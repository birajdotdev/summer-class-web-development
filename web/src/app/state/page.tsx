"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MinusIcon, PlusIcon, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function State() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="grow min-h-screen flex flex-col items-center mt-18 gap-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">React State Demo</h1>
        <p className="text-sm text-muted-foreground">
          Learn how useState works in React
        </p>
      </div>
      <div className="max-w-md w-full space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          State Example (useState)
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Counter Component</CardTitle>
          </CardHeader>
          <CardContent>
            Count: <span className="font-bold">{count}</span>
          </CardContent>
          <CardFooter className="space-x-2">
            <Button onClick={increaseCount}>
              <PlusIcon />
              Increase
            </Button>
            <Button variant="destructive" onClick={decreaseCount}>
              <MinusIcon />
              Decrease
            </Button>
            <Button variant="outline" onClick={resetCount}>
              <RotateCcw />
              Reset
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
