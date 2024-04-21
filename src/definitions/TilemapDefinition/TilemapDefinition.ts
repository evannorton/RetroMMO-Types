import { Definition } from "../Definition";
import { TilemapTileDefinition } from "./TilemapTileDefinition";
import { TilemapTilesetDefinition } from "./TilemapTilesetDefinition";

export interface TilemapDefinition extends Definition {
  readonly tiles: TilemapTileDefinition[][];
  readonly tilesets: TilemapTilesetDefinition[];
}
