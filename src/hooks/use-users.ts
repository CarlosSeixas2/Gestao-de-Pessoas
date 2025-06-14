import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../services/user-service";
import type { User } from "../interfaces/user";
import type { AxiosResponse } from "axios";

export const useUsers = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await UserService.getUsers();
      return response.data;
    },
  });

  const createUser = useMutation<AxiosResponse<User>, Error, Omit<User, "id">>({
    mutationFn: (newUser) => UserService.createUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const updateUser = useMutation<
    AxiosResponse<User>,
    Error,
    { id: number; data: Omit<User, "id"> }
  >({
    mutationFn: ({ id, data }) => UserService.updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const deleteUser = useMutation<AxiosResponse<void>, Error, number>({
    mutationFn: (id) => UserService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    users: data || [],
    isLoading,
    createUser,
    updateUser,
    deleteUser,
  };
};
