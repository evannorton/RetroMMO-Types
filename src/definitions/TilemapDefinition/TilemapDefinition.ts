import { Definition } from "../Definition";
import { TilemapTileDefinition } from "./TilemapTileDefinition";
import { TilemapTilesetDefinition } from "./TilemapTilesetDefinition";

export interface TilemapDefinition extends Definition {
  readonly height: number;
  readonly tiles: TilemapTileDefinition[][];
  readonly tilesets: TilemapTilesetDefinition[];
  readonly width: number;
}
