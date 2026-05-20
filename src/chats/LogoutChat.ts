import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface LogoutChat extends Chat {
  readonly type: ChatType.Logout;
}
