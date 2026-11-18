import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";

function App() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-16 text-3xl font-bold">User Manager</h1>

      <div className=" flex-col space-y-10 md:grid md:grid-cols-2 md:gap-10 md:items-start">
        <div className="md:sticky md:top-8">
          <UserForm />
        </div>

        <UserList />
      </div>
    </main>
  );
}

export default App;
