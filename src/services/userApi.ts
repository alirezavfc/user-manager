import api from "./api";
import type { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
  const response = await api.get("/users");
  return response.data;
}
