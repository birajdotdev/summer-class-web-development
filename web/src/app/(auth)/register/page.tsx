import { AuthForm } from "@/components/auth-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account",
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
