import { ChatType } from "../ChatType";
import { Chat } from "./Chat";

export interface LoginChat extends Chat {
  readonly type: ChatType.Login;
}
