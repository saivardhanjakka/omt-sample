// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import contactImg from "../../public/assets/contact-img.png";
// import { useFormState } from "react-dom";
// import { bookDemo } from "@/app/action/action";

// // Shadcn UI Dialog Components
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// const initialState = {
//   message: "",
//   error: undefined,
//   fields: {},
//   values: {},
// };

// export default function Form() {
//   const [state, formAction] = useFormState(bookDemo, initialState);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [source, setSource] = useState("");

//   useEffect(() => {
//     setSource(window.location.href);
//   }, []);

//   // useEffect(() => {
//   //   if (state.message) {
//   //     // Open dialog for both success and error
//   //     setDialogOpen(true);
//   //   }
//   // }, [state.message]);
//   useEffect(() => {
//   if (state.message && state.error !== "Validation failed") {
//     setDialogOpen(true);
//   }
// }, [state.message, state.error]);


//   return (
//     <section className="px-4 py-16 md:px-20 bg-white" id="ScheduleForm">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-start">
//         {/* Left Side: Heading + Form */}
//         <div className="w-full lg:w-1/2">
//           <div className="text-center lg:text-left mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Book a Free Demo
//             </h2>
//             <p className="text-lg text-gray-600 mt-3">
//               Have questions? Our team is here to help — get in touch anytime.
//             </p>
//           </div>

//           {/* Form */}
//           <form action={formAction} className="space-y-6">
//             <input type="hidden" name="source" value={source} />
//             {/* Name */}
//             <div>
//               <label className="block text-base font-semibold text-gray-700">
//                 Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 name="name"
//                 type="text"
//                 defaultValue={state.values?.name ?? ""}
//                 className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
//                   state.fields?.name
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-[#F47537]"
//                 }`}
//               />
//               {state.fields?.name && (
//                 <p className="text-red-500 text-sm mt-1">{state.fields.name}</p>
//               )}
//             </div>

//             {/* Phone + Email */}
//             <div className="flex flex-col md:flex-row gap-6">
//               <div className="w-full">
//                 <label className="block text-base font-semibold text-gray-700">
//                   Phone number<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   name="phoneNumber"
//                   type="tel"
//                   defaultValue={state.values?.phoneNumber ?? ""}
//                   className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
//                     state.fields?.phoneNumber
//                       ? "border-red-500 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-[#F47537]"
//                   }`}
//                 />
//                 {state.fields?.phoneNumber && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {state.fields.phoneNumber}
//                   </p>
//                 )}
//               </div>

//               <div className="w-full">
//                 <label className="block text-base font-semibold text-gray-700">
//                   Email<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   defaultValue={state.values?.email ?? ""}
//                   className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
//                     state.fields?.email
//                       ? "border-red-500 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-[#F47537]"
//                   }`}
//                 />
//                 {state.fields?.email && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {state.fields.email}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* City */}
//             <div>
//               <label className="block text-base font-semibold text-gray-700">
//                 City<span className="text-red-500">*</span>
//               </label>
//               <input
//                 name="restaurantLocation"
//                 type="text"
//                 defaultValue={state.values?.restaurantLocation ?? ""}
//                 className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
//                   state.fields?.restaurantLocation
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-[#F47537]"
//                 }`}
//               />
//               {state.fields?.restaurantLocation && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {state.fields.restaurantLocation}
//                 </p>
//               )}
//             </div>

//             {/* Restaurant Name */}
//             <div>
//               <label className="block text-base font-semibold text-gray-700">
//                 Restaurant Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 name="restaurantName"
//                 type="text"
//                 defaultValue={state.values?.restaurantName ?? ""}
//                 className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
//                   state.fields?.restaurantName
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-[#F47537]"
//                 }`}
//               />
//               {state.fields?.restaurantName && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {state.fields.restaurantName}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="btn-primary text-white text-base px-8 py-3 rounded-md font-semibold bg-[#F47537] transition"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Side Image */}
//         <div className="w-full lg:w-1/2 flex lg:ml-14 justify-center lg:mt-28">
//           <Image
//             src={contactImg}
//             alt="Support"
//             width={400}
//             height={400}
//             className="w-full max-w-xl object-contain"
//           />
//         </div>
//       </div>

//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="text-center flex flex-col items-center justify-center gap-4">
//           <DialogHeader className="flex flex-col items-center">
//             <DialogTitle className="text-xl font-bold">
//               {state.error ? "Submission Failed" : "Submission Successful!"}
//             </DialogTitle>
//             <DialogDescription className="text-base mt-2">
//               {state.error
//                 ? state.message || "Something went wrong. Please try again."
//                 : state.message}
//             </DialogDescription>
//           </DialogHeader>

//           <div className="mt-4">
//             <Button
//               onClick={() => setDialogOpen(false)}
//               className="text-white bg-[#F47537]"
//             >
//               Okay
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import contactImg from "../../public/assets/contact-img.png";
import { useFormState } from "react-dom";
import { bookDemo } from "@/app/action/action";

// Shadcn UI Dialog Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const initialState = {
  message: "",
  error: undefined,
  fields: {},
  values: {},
};

export default function Form() {
  const [state, formAction] = useFormState(bookDemo, initialState);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [source, setSource] = useState("");

  useEffect(() => {
    setSource(window.location.href);
  }, []);

  useEffect(() => {
    if (state.message && state.error !== "Validation failed") {
      setDialogOpen(true);
    }
  }, [state.message, state.error]);

  return (
    <section className="px-4 py-16 md:px-20 bg-white" id="ScheduleForm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-start">
        {/* Left Side: Heading + Form */}
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Book a Free Demo
            </h2>
            <p className="text-lg text-gray-600 mt-3">
              Have questions? Our team is here to help — get in touch anytime.
            </p>
          </div>

          {/* Form */}
          <form action={formAction} className="space-y-6">
            <input type="hidden" name="source" value={source} />

            {/* Your Name */}
            <div>
              <label className="block text-base font-semibold text-gray-700">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={state.values?.name ?? ""}
                className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
                  state.fields?.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#F47537]"
                }`}
              />
              {state.fields?.name && (
                <p className="text-red-500 text-sm mt-1">{state.fields.name}</p>
              )}
            </div>
             
            {/* Restaurant Location + Restaurant Name */}
            <div className="flex flex-col md:flex-row gap-6">
               <div className="w-full">
                <label className="block text-base font-semibold text-gray-700">
                  Restaurant Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="restaurantName"
                  type="text"
                  defaultValue={state.values?.restaurantName ?? ""}
                  className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
                    state.fields?.restaurantName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#F47537]"
                  }`}
                />
                {state.fields?.restaurantName && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.fields.restaurantName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label className="block text-base font-semibold text-gray-700">
                  Restaurant Location<span className="text-red-500">*</span>
                </label>
                <input
                  name="restaurantLocation"
                  type="text"
                  defaultValue={state.values?.restaurantLocation ?? ""}
                  className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
                    state.fields?.restaurantLocation
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#F47537]"
                  }`}
                />
                {state.fields?.restaurantLocation && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.fields.restaurantLocation}
                  </p>
                )}
              </div>

             
            </div>
            {/* Phone + Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-base font-semibold text-gray-700">
                  Phone number<span className="text-red-500">*</span>
                </label>
                <input
                  name="phoneNumber"
                  type="tel"
                  defaultValue={state.values?.phoneNumber ?? ""}
                  className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
                    state.fields?.phoneNumber
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#F47537]"
                  }`}
                />
                {state.fields?.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.fields.phoneNumber}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label className="block text-base font-semibold text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  defaultValue={state.values?.email ?? ""}
                  className={`mt-2 block w-full rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 ${
                    state.fields?.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#F47537]"
                  }`}
                />
                {state.fields?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.fields.email}
                  </p>
                )}
              </div>
            </div>


            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-primary text-white text-base px-8 py-3 rounded-md font-semibold bg-[#F47537] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex lg:ml-14 justify-center lg:mt-12">
          <Image
            src={contactImg}
            alt="Support"
            width={400}
            height={400}
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="text-center flex flex-col items-center justify-center gap-4">
          <DialogHeader className="flex flex-col items-center">
            <DialogTitle className="text-xl font-bold">
              {state.error ? "Submission Failed" : "Submission Successful!"}
            </DialogTitle>
            <DialogDescription className="text-base text-center mt-2">
              {state.error
                ? state.message || "Something went wrong. Please try again."
                : state.message}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <Button
              onClick={() => setDialogOpen(false)}
              className="text-white bg-[#F47537]"
            >
              Okay
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

