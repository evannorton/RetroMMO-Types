import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPartyChangesUpdate {
  readonly parties: readonly WorldPartyUpdate[];
  readonly partyIDsToRemove: readonly string[];
}
