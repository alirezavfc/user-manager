import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";

function App() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col space-y-10 p-6">
      <h1 className="mb-8 text-3xl font-bold">User Manager</h1>
      <UserForm />
      <UserList />
    </main>
  );
}

export default App;
