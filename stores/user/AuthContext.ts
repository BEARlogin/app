import { observable } from "mobx";
import {User} from "./User";

export class AuthContext {
  @observable user?: User = undefined;
}
