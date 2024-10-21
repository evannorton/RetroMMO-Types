import { Definition } from "../Definition";
import { TilemapTileDefinition } from "./TilemapTileDefinition";
import { TilemapTilesetDefinition } from "./TilemapTilesetDefinition";

export interface TilemapDefinition extends Definition {
  readonly height: number;
  readonly tiles: readonly (readonly TilemapTileDefinition[])[];
  readonly tilesets: readonly TilemapTilesetDefinition[];
  readonly width: number;
}
