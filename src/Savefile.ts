import { BestiaryEntry } from "./BestiaryEntry";
import { ChestOpen } from "./ChestOpen";
import { DefinableReference } from "./DefinableReference";
import { Direction } from "./Direction";
import { Step } from "./Step";

export interface SavefileItemInstanceTrade {
  readonly tradedAt: number;
  readonly traderUserID: number;
}
export interface SavefileItemInstance {
  readonly bankSpawnedAt: number | null;
  readonly customizedAt: number | null;
  readonly droppedAt: number | null;
  readonly itemID: string;
  readonly openedAt: number | null;
  readonly origin: string;
  readonly purchasedAt: number | null;
  readonly id: string;
  readonly trades: SavefileItemInstanceTrade[];
}
export interface SavefileCharacter {
  battleHotkeyablesDefinableReferences: (DefinableReference | null)[];
  bestiaryEntries: Record<string, BestiaryEntry>;
  bodyItemInstance: SavefileItemInstance | null;
  boostsItemInstances: SavefileItemInstance[];
  chestOpens: ChestOpen[];
  classID: string;
  clothesDyeItemInstance: SavefileItemInstance | null;
  createdAt: number;
  direction: Direction;
  experience: number;
  experienceUntilLevel: number | null;
  figureID: string;
  gold: number;
  hairDyeItemInstance: SavefileItemInstance | null;
  headItemInstance: SavefileItemInstance | null;
  hp: number;
  itemInstances: SavefileItemInstance[];
  level: number;
  mainHandItemInstance: SavefileItemInstance | null;
  maskItemInstance: SavefileItemInstance | null;
  mp: number | null;
  offHandItemInstance: SavefileItemInstance | null;
  outfitItemInstance: SavefileItemInstance | null;
  renewAbilityID: string | null;
  renewSteps: number;
  skinColorID: string;
  step: Step;
  stepsSinceEncounter: number | null;
  timePlayed: number;
  tilemapID: string;
  townTilemapID: string;
  x: number;
  y: number;
}
export interface Savefile {
  bankGold: number;
  bankItemInstances: SavefileItemInstance[][];
  bestiaryEntries: Record<string, BestiaryEntry>;
  characters: SavefileCharacter[];
  lifetimeExperience: number;
  totalTimePlayed: number;
}
