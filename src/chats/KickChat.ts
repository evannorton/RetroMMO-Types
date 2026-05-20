import { ChatType } from "../ChatType";
import { Chat } from "./Chat";

export interface KickChat extends Chat {
  readonly enforcerUsername: string;
  readonly recipientUsername: string;
  readonly type: ChatType.Kick;
}
