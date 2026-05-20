import { ChatType } from "../ChatType";
import { Chat } from "./Chat";

export interface PartyJoinChat extends Chat {
  readonly partyPlayersIDs: string[];
  readonly type: ChatType.PartyJoin;
}
