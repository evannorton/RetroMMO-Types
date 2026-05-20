import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface WarnChat extends Chat {
  readonly contents: string;
  readonly monthsSubscribed?: number;
  readonly permission: number;
  readonly type: ChatType.Warn;
}
