import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPartyChangesUpdate {
  readonly parties: WorldPartyUpdate[];
  readonly partyIDsToRemove: string[];
}
