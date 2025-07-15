"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlusIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function TaskTrackerPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const formSchema = z.object({
    task: z.string().min(1, "Task cannot be empty"),
    completed: z.boolean().default(false),
  });

  type Task = z.infer<typeof formSchema>;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      completed: false,
    },
  });

  const onSubmit = (data: Task) => {
    setTasks([...tasks, data]);
    form.reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Task Tracker</CardTitle>
          <CardDescription>
            Keep track of your tasks efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex items-start gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Add a task" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                <CirclePlusIcon />
                Add Task
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="block space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div className="flex items-center justify-between" key={index}>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={(checked) => {
                      setTasks(
                        tasks.map((t, i) =>
                          i === index
                            ? { ...t, completed: checked === true }
                            : t,
                        ),
                      );
                    }}
                  />
                  <span className={cn({ "line-through": task.completed })}>
                    {task.task}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setTasks(tasks.filter((_, i) => i !== index));
                  }}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2Icon />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center">No tasks added</div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
