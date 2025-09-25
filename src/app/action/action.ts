
"use server";

import { z } from "zod";
import axios from "axios";

const demoSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Must be a valid email address." }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Must be a valid 10-digit phone number." }),
  restaurantName: z
    .string()
    .min(2, { message: "Restaurant name is required." }),
  restaurantLocation: z
    .string()
    .min(2, { message: "Restaurant location is required." }),
  source: z.string().nonempty(),
});

export interface FormState {
  message: string;
  error?: string;
  fields?: Record<string, string>;
  values?: Record<string, string>;
}

export async function bookDemo(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const values = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phoneNumber: formData.get("phoneNumber")?.toString() ?? "",
    restaurantName: formData.get("restaurantName")?.toString() ?? "",
    restaurantLocation: formData.get("restaurantLocation")?.toString() ?? "",
    source: formData.get("source")?.toString() ?? "",
  };

  console.log("Form Values:", values);

  const validatedFields = demoSchema.safeParse(values);

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: "Please correct the errors below.",
      error: "Validation failed",
      fields: {
        name: fieldErrors.name?.join(", ") ?? "",
        email: fieldErrors.email?.join(", ") ?? "",
        phoneNumber: fieldErrors.phoneNumber?.join(", ") ?? "",
        restaurantName: fieldErrors.restaurantName?.join(", ") ?? "",
        restaurantLocation: fieldErrors.restaurantLocation?.join(", ") ?? "",
      },
      values,
    };
  }

  const n8nWebhookUrl = process.env.N8N_BOOK_DEMO_URL;
  if (!n8nWebhookUrl) {
    return {
      message: "Server configuration error. Please contact support.",
      error: "Missing webhook URL",
      values,
    };
  }

  const n8nApiKey = process.env.N8N_WEBHOOK_KEY || "";
  console.log("Using N8N Key:", n8nApiKey ? "[SET]" : "[EMPTY]");

  try {
    const { status, data } = await axios.post(
      n8nWebhookUrl,
      validatedFields.data,
      {
        headers: {
          "Content-Type": "application/json",
          ...(n8nApiKey && { "X-OMT-N8N-Request-Key": n8nApiKey }),
        },
      }
    );

    console.log("n8n response status:", status);
    console.log("n8n response body:", data);

    if (status !== 200) {
      return {
        message: `Error from server: ${status}`,
        error: "Server error",
        values,
      };
    }
    

    return {
      message: "Thank you! Your demo request has been submitted successfully.",
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return {
      message: "An unexpected error occurred. Please try again.",
      error: "Server error",
      values,
    };
  }
}