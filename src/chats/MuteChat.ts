import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface MuteChat extends Chat {
  readonly enforcerUsername: string;
  readonly expireTime?: number;
  readonly reason: string;
  readonly recipientUsername: string;
  readonly type: ChatType.Mute;
}
