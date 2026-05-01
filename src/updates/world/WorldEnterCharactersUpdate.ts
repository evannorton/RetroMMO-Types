import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldInvitePromptsUpdate } from "./invites/WorldInvitePromptsUpdate";

export interface WorldEnterCharactersUpdate {
  readonly characters: readonly WorldCharacterUpdate[];
  readonly invites?: WorldInvitePromptsUpdate;
}
