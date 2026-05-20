import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface UnbanChat extends Chat {
  readonly enforcerUsername: string;
  readonly recipientUsername: string;
  readonly type: ChatType.Unban;
}
