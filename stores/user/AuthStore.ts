import { action, computed } from "mobx";

import api from "../../helpers/api";
import { AuthContext } from "./AuthContext";
import { User } from "./User";

export class AuthStore implements BaseStore<AuthContext> {
  context: AuthContext = new AuthContext();

  @action.bound async login() {
    const response = await api.post<User>("/auth/login");
    this.context.user = response.data;
  }
}

export default new AuthStore();
