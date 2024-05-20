import { Definition } from "../Definition";
import { TilesetTileDefinition } from "./TilesetTileDefinition";

export interface TilesetDefinition extends Definition {
  readonly height: number;
  readonly tiles: TilesetTileDefinition[][];
  readonly width: number;
}
