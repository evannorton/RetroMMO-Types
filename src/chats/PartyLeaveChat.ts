import { ChatType } from "../ChatType";
import { Chat } from "./Chat";

export interface PartyLeaveChat extends Chat {
  readonly partyPlayersIDs: string[];
  readonly type: ChatType.PartyLeave;
}
