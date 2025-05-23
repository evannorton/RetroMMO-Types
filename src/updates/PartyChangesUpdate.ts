import { PartyUpdate } from "./PartyUpdate";
import { WorldPartyCharacterUpdate } from "./world/WorldPartyCharacterUpdate";

export interface PartyChangesWorldUpdate {
  readonly characters: readonly WorldPartyCharacterUpdate[];
}
export interface PartyChangesUpdate {
  readonly parties: readonly PartyUpdate[];
  readonly partyIDsToRemove: readonly string[];
  readonly world?: PartyChangesWorldUpdate;
}
