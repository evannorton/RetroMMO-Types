import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface LoginChat extends Chat {
  readonly type: ChatType.Login;
}
