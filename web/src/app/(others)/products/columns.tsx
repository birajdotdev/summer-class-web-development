"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@/types/product";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import ActionButton from "./action-button";

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-2">
          Title
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="size-8"
          >
            <ArrowUpDown className="size-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-right">Created At</div>,
    cell: ({ row }) => {
      const created_at = new Date(row.getValue("created_at"));
      const formatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(created_at);
      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "updated_at",
    header: () => <div className="text-right">Updated At</div>,
    cell: ({ row }) => {
      const updated_at = new Date(row.getValue("updated_at"));
      const formatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(updated_at);
      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="text-center">
        <ActionButton product={row.original} />
      </div>
    ),
  },
];
