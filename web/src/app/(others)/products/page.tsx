import { Metadata } from "next";
import ProductsClient from "./client";

export const metadata: Metadata = {
  title: "Products",
  description: "Manage your products and add new ones easily.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen px-2 py-10 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Dashboard Header */}
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Products Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your products and add new ones easily.
            </p>
          </div>
        </div>
        <ProductsClient />
      </div>
    </div>
  );
}
