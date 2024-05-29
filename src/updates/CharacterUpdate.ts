import { SavefileItemInstance } from "../Savefile";

export interface CharacterUpdate {
  readonly classID: string;
  readonly clothesDyeItemInstance: SavefileItemInstance | null;
  readonly figureID: string;
  readonly hairDyeItemInstance: SavefileItemInstance | null;
  readonly id: string;
  readonly level: number;
  readonly maskItemInstance: SavefileItemInstance | null;
  readonly outfitItemInstance: SavefileItemInstance | null;
  readonly skinColorID: string;
  readonly tilemapID: string;
  readonly userID: number;
  readonly username: string;
  readonly x: number;
  readonly y: number;
}
