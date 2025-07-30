"use client";

import { createProduct, updateProduct } from "@/api/products";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { productFormSchema, ProductFormSchema } from "@/schemas/product";
import { Product } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ProductDialogFormProps =
  | {
      edit: true;
      product: Product;
      onSuccess?: () => void;
    }
  | {
      edit?: false;
      product?: undefined;
      onSuccess?: () => void;
    };

export default function ProductDialogForm({
  edit = false,
  product,
  onSuccess,
}: ProductDialogFormProps) {
  const queryClient = useQueryClient();

  const defaultValues = useMemo(() => {
    return {
      title: edit ? product?.title : "",
      price: edit ? product?.price.toString() : "",
    };
  }, [edit, product]);

  const form = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
  });

  const mutation = useMutation({
    mutationFn: edit
      ? (data: ProductFormSchema) => updateProduct(product!.id, data)
      : createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      form.reset();
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: ProductFormSchema) => {
    mutation.mutate(data);
  };

  const buttonText = edit ? "Update Product" : "Add Product";
  const dialogTitle = edit ? "Edit Product" : "New Product";
  const dialogDescription = edit
    ? "Update the product's title and price below, then save your changes."
    : "Enter the product's title and price to add a new product.";

  const disableButton = mutation.isPending || (edit && !form.formState.isDirty);

  return (
    <DialogContent
      onCloseAutoFocus={() => {
        form.reset(defaultValues);
      }}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          className="space-y-4"
        >
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Apple iPhone 15" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="e.g. 100.00"
                    min="0"
                    step="0.01"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={disableButton}>
              {mutation.isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader className="h-4 w-4 animate-spin" />
                  {buttonText}
                </span>
              ) : (
                buttonText
              )}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
