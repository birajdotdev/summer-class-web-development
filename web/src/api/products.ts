import { api } from "@/lib/axios";
import { ProductFormSchema } from "@/schemas/product";
import { Product } from "@/types/product";
import axios from "axios";

export async function getProducts() {
  try {
    const res = await api.get("/products");
    return res.data as Product[];
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to get products");
  }
}

export async function createProduct(data: ProductFormSchema) {
  try {
    const res = await api.post("/products", {
      title: data.title,
      price: Number(data.price),
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to create product");
  }
}

export async function updateProduct(id: number, data: ProductFormSchema) {
  try {
    const res = await api.put(`/products/${id}`, {
      title: data.title,
      price: Number(data.price),
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to update product");
  }
}

export async function deleteProduct(id: number) {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to delete product");
  }
}
