"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PagesOptionComponent() {
  const navItems = [
    {
      name: "Poss",
      href: "/poss",
      active: false,
      title: "Point of Sale Management System",
      description:
        "Streamline your retail operations with our comprehensive POS solution that tracks sales, inventory, and customer data in real-time.",
      buttontext: "Explore Poss",
    },
    {
      name: "Payroll",
      href: "/payroll",
      active: false,
      title: "Automated Payroll Processing",
      description:
        "Simplify payroll management with automated calculations, tax deductions, and compliance reporting for your entire workforce.",
      buttontext: "Explore Payroll",
    },
    {
      name: "Invoice",
      href: "/invoice",
      active: false,
      title: "Smart Invoice Management System",
      description:
        "Create, send, and track invoices effortlessly with automated reminders and payment processing capabilities.",
      buttontext: "Explore Invoice",
    },
    {
      name: "Purchase",
      href: "/purchase",
      active: true,
      title:
        "All-in-one invoice processing AI tool for inventory, purchase & payables.",
      description:
        "An end-to-end solution that scans your invoices & generates meaningful insights.",
      buttontext: "Explore Purchase",
    },
    {
      name: "Tasks",
      href: "/tasks",
      active: false,
      title: "Task Management & Workflow Automation",
      description:
        "Organize, prioritize, and automate your business tasks with intelligent workflow management and team collaboration tools.",
      buttontext: "Explore Tasks",
    },
  ];

  const [activeItem, setActiveItem] = useState(
    navItems.find((item) => item.active) || navItems[3]
  );

  return (
    <div className="pt-4 pb-20">
      {/* Navigation */}
      <div className="px-4 pt-8 sm:px-6">
        <nav className="flex justify-center pt-4 pb-2">
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-x-2 gap-y-0 w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item);
                }}
                className={`text-base sm:text-lg font-semibold px-4 py-2 rounded-full transition-colors text-center
                  ${
                    activeItem.name === item.name
                      ? "bg-[#FEF0E9] text-[#F47537]"
                      : "text-gray-700 hover:text-[#F47537]"
                  }
                  ${
                    item.name === "Tasks"
                      ? "w-full sm:w-auto flex justify-center"
                      : ""
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-2">
        <h1 className="text-2xl md:text-2xl lg:text-3xl text-gray-900 leading-tight mb-3">
          {activeItem.title}
        </h1>

        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          {activeItem.description}
        </p>

        <Button
          asChild
          variant="ghost"
          className="text-[#F47537] border-b-2 border-[#F47537] hover:text-[#F47537] hover:border-[#F47537] hover:bg-transparent px-0 py-0 text-lg font-medium rounded-none shadow-none"
        >
          <Link href={activeItem.href}>{activeItem.buttontext}</Link>
        </Button>
      </div>
    </div>
  );
}
