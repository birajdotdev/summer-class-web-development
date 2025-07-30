import SimpleForm from "@/components/simple-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form",
  description: "A simple form example using React Hook Form and Zod",
};

export default function Form() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <SimpleForm />
    </div>
  );
}
