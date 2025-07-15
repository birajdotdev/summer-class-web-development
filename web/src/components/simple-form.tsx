"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({ message: "Invalid email address" }).min(1, {
    message: "Email is required",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

interface FormItem {
  name: keyof FormSchema;
  label: string;
  type: string;
  placeholder: string;
}

const formItems: FormItem[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name here",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email here",
  },
];

export default function SimpleForm() {
  const [count, setCount] = useState(0);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const onSubmit = async (data: FormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
    console.log("Form submitted:", data);
  };
  return (
    <Form {...form}>
      <form className="w-full max-w-md" onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Simple Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {formItems.map((item) => (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={item.name}>{item.label}</FormLabel>
                    <FormControl>
                      <Input
                        id={item.name}
                        type={item.type}
                        placeholder={item.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </CardContent>
          <CardFooter className="block space-y-4">
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
            <Button
              type="button"
              className="w-full"
              onClick={() => setCount(count + 1)}
              variant="outline"
            >
              Click me ({count})
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
