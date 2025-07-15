import { z } from "zod";

export const productFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Price must be a positive number",
  }),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;
