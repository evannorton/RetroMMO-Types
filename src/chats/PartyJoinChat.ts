import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface PartyJoinChat extends Chat {
  readonly type: ChatType.PartyJoin;
}
