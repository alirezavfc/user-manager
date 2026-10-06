export function UserList() {
  const users = [
    { id: 1, name: "Ali", email: "ali@example.com", age: 30 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
    { id: 3, name: "John", email: "john@example.com", age: 25 },
    { id: 4, name: "John", email: "john@example.com", age: 25 },
    { id: 5, name: "John", email: "john@example.com", age: 25 },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl">
      <h3 className="mb-4 text-2xl font-semibold">Users List</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {users.map((user) => (
          <div key={user.id} className="rounded-3xl bg-slate-100 p-6 shadow-sm">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
            <p className="mt-1 text-sm text-slate-500">Age: {user.age}</p>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
              >
                Edit
              </button>

              <button
                type="button"
                className="rounded-full bg-slate-200 px-4 py-2 text-sm hover:bg-slate-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
