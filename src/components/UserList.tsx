import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userApi";
import Button from "./Button";

export function UserList() {
  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const users = data ?? [];

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-4xl">
        <h3 className="mb-4 text-2xl font-semibold">Users List</h3>
        <p>Loading users...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto w-full max-w-4xl">
        <h3 className="mb-4 text-2xl font-semibold">Users List</h3>
        <p>Failed to load users.</p>
        <Button type={"button"} onClick={() => refetch()} disabled={isFetching}>
          Try Again
        </Button>
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-4xl">
      <h3 className="mb-4 text-2xl font-semibold">Users List</h3>
      <Button type={"button"} onClick={() => refetch()} disabled={isFetching}>
        Refetch
      </Button>
      <div className="min-h-8">{isFetching && <p>Updating...</p>}</div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {users.map((user) => (
          <div key={user.id} className="rounded-3xl bg-slate-100 p-6 shadow-sm">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
