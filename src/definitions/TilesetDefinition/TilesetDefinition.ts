import { Definition } from "../Definition";
import { TilesetTileDefinition } from "./TilesetTileDefinition";

export interface TilesetDefinition extends Definition {
  readonly height: number;
  readonly tiles: readonly (readonly TilesetTileDefinition[])[];
  readonly width: number;
}
