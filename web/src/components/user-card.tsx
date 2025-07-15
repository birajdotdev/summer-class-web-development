import { User } from "@/types/user";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-card rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center">
        <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
          {user.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-muted-foreground text-sm">@{user.username}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex">
          <div className="w-20 font-medium">Email:</div>
          <div className="text-muted-foreground">{user.email}</div>
        </div>

        <div className="flex">
          <div className="w-20 font-medium">Phone:</div>
          <div className="text-muted-foreground">{user.phone}</div>
        </div>

        <div className="flex">
          <div className="w-20 font-medium">Website:</div>
          <div className="text-muted-foreground">{user.website}</div>
        </div>

        <div className="flex">
          <div className="w-20 font-medium">Company:</div>
          <div className="text-muted-foreground">{user.company.name}</div>
        </div>

        <div>
          <div className="mb-1 font-medium">Address:</div>
          <div className="text-muted-foreground pl-2">
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
