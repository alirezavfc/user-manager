import api from "./api";
import type { User, UserFormData } from "../types/user";

export async function getUsers(): Promise<User[]> {
  const response = await api.get("/users");
  return response.data;
}

export async function createUser(data: UserFormData): Promise<User> {
  const response = await api.post("/users", data);
  return response.data;
}
