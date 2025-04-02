import { WorldPartyCharacterUpdate } from "./world/WorldPartyCharacterUpdate";
import { WorldPartyUpdate } from "./world/WorldPartyUpdate";

export interface PartyChangesWorldUpdate {
  readonly worldCharacters: readonly WorldPartyCharacterUpdate[];
}
export interface PartyChangesUpdate {
  readonly parties: readonly WorldPartyUpdate[];
  readonly partyIDsToRemove: readonly string[];
  readonly world?: PartyChangesWorldUpdate;
}
