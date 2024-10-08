import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPositionUpdate {
  readonly parties: WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacters: WorldCharacterUpdate[];
}
