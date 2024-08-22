import { Direction } from "../../Direction";
import { SavefileItemInstance } from "../../Savefile";

export interface WorldCharacterUpdate {
  readonly classID: string;
  readonly clothesDyeItemInstance?: SavefileItemInstance;
  readonly direction: Direction;
  readonly figureID: string;
  readonly hairDyeItemInstance?: SavefileItemInstance;
  readonly id: string;
  readonly level: number;
  readonly maskItemInstance?: SavefileItemInstance;
  readonly outfitItemInstance?: SavefileItemInstance;
  readonly partyID: string;
  readonly skinColorID: string;
  readonly tilemapID: string;
  readonly userID: number;
  readonly username: string;
  readonly x: number;
  readonly y: number;
}
