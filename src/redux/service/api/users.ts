import { client } from "@/redux/service/axios";
import { TUsersParams } from "@/shared/types/customTypes";

const users = "users";

class User {
  getUsersList(params: TUsersParams) {
    return client.get<User[]>(`${users}/users/`, {
      params,
    });
  }
  getUserById(id: string) {
    return client.get<User>(`${users}/users/${id}/`);
  }
}

export default User;
