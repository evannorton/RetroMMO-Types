import { SavefileItemInstance } from "../Savefile";

export interface CreateCharacterUpdate {
  readonly classID: string;
  readonly clothesDyeSavefileItemInstance: SavefileItemInstance;
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
