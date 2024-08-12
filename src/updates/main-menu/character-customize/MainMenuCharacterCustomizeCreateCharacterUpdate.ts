import { Direction } from "../../../Direction";
import { SavefileItemInstance } from "../../../Savefile";

export interface MainMenuCharacterCustomizeCreateCharacterUpdate {
  readonly classID: string;
  readonly clothesDyeSavefileItemInstance: SavefileItemInstance;
  readonly direction: Direction;
  readonly figureID: string;
  readonly hairDyeSavefileItemInstance: SavefileItemInstance;
  readonly id: string;
  readonly level: number;
  readonly maskSavefileItemInstance: SavefileItemInstance;
  readonly outfitSavefileItemInstance: SavefileItemInstance;
  readonly skinColorID: string;
  readonly tilemapID: string;
  readonly x: number;
  readonly y: number;
}
