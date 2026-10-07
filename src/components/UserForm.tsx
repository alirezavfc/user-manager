import { useForm } from "react-hook-form";
import { type UserFormData, userSchema } from "../types/user";
import { zodResolver } from "@hookform/resolvers/zod";

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserFormData): void => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-4xl flex-col gap-5 rounded-[2rem] bg-slate-100 p-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Add User
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter the user information below.
        </p>
      </div>

      <label className="flex flex-col gap-2">
        <span className="px-1 text-sm font-medium text-slate-700">Name</span>

        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

        <p className="min-h-5 px-1 text-sm text-red-800">
          {errors.name?.message}
        </p>
      </label>

      <label className="flex flex-col gap-2">
        <span className="px-1 text-sm font-medium text-slate-700">Email</span>

        <input
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

        <p className="min-h-5 px-1 text-sm text-red-800">
          {errors.email?.message}
        </p>
      </label>

      <button
        type="submit"
        className="mt-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 active:scale-[0.98]"
      >
        Add User
      </button>
    </form>
  );
}
