"use client";

import { useQuery } from "@tanstack/react-query";

export default function ResourceJson({ value }: { value: string }) {
  const fetchData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${value}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data for ${value}`);
      }
      return res.json();
    } catch (error) {
      console.error(`Error fetching data for ${value}:`, error);
      return { error: (error as Error).message };
    }
  };

  const { isLoading, data, error } = useQuery({
    queryKey: [value],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
