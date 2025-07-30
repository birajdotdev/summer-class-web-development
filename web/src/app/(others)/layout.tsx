import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
