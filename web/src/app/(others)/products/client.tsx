"use client";

import { getProducts } from "@/api/products";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProductsClient() {
  const {
    data: products = [],
    isLoading: productsLoading,
    error: productsError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <DataTable
      columns={columns}
      data={products}
      isLoading={productsLoading}
      error={productsError}
    />
  );
}
