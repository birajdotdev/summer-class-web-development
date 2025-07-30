import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our homepage",
};

export default function Home() {
  return (
    <main className="grow flex min-h-screen items-center justify-center gap-4">
      <Hero />
      {/* <Button>Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
      <Button disabled>Click me</Button> */}
    </main>
  );
}
