import type { User } from "../interfaces/user";
import { api } from "./api";

export const UserService = {
  getUsers: () => api.get<User[]>("/users"),
  createUser: (data: Omit<User, "id">) => api.post("/users", data),
  updateUser: (id: number, data: Omit<User, "id">) =>
    api.put(`/users/${id}`, data),
  deleteUser: (id: number) => api.delete(`/users/${id}`),
};
