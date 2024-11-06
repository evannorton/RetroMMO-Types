import { WorldPartyCharacterUpdate } from "./WorldPartyCharacterUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPartyChangesUpdate {
  readonly characters: readonly WorldPartyCharacterUpdate[];
  readonly parties: readonly WorldPartyUpdate[];
  readonly partyIDsToRemove: readonly string[];
}
