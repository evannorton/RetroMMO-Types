import { Chat } from "./Chat";
import { ChatChannel } from "../ChatChannel";
import { ChatType } from "../ChatType";

export interface MessageChat extends Chat {
  readonly channel: ChatChannel;
  readonly contents: string;
  readonly id: number;
  readonly monthsSubscribed?: number;
  readonly permission: number;
  readonly type: ChatType.Message;
}
