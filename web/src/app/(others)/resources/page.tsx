import ResourceJson from "@/components/resource-json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resources() {
  const resources = [
    { label: "Users", value: "users" },
    { label: "Posts", value: "posts" },
    { label: "Comments", value: "comments" },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-6xl p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">User Directory</h1>
        <p className="text-muted-foreground">Data from JSONPlaceholder API</p>
      </div>
      <Tabs defaultValue="users" className="w-[400px]">
        <TabsList>
          {resources.map((res) => (
            <TabsTrigger key={res.value} value={res.value}>
              {res.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {resources.map((res) => (
          <TabsContent key={res.value} value={res.value}>
            <ResourceJson value={res.value} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
