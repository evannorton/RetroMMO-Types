import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface PartyLeaveChat extends Chat {
  readonly type: ChatType.PartyLeave;
}
