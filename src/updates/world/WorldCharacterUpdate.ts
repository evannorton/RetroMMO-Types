import { Direction } from "../../Direction";
import { SavefileItemInstance } from "../../Savefile";

export interface WorldCharacterUpdate {
  readonly classID: string;
  readonly clothesDyeItemInstance: SavefileItemInstance | null;
  readonly direction: Direction;
  readonly figureID: string;
  readonly hairDyeItemInstance: SavefileItemInstance | null;
  readonly id: string;
  readonly level: number;
  readonly maskItemInstance: SavefileItemInstance | null;
  readonly outfitItemInstance: SavefileItemInstance | null;
  readonly partyID: string;
  readonly skinColorID: string;
  readonly tilemapID: string;
  readonly userID: number;
  readonly username: string;
  readonly x: number;
  readonly y: number;
}
