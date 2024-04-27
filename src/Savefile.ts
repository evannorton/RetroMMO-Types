import { BestiaryEntry } from "./BestiaryEntry";
import { ChestOpen } from "./ChestOpen";
import { DefinableReference } from "./DefinableReference";
import { Direction } from "./Direction";
import { ItemInstance } from "./ItemInstance";
import { Step } from "./Step";

export interface SavefileCharacter {
  battleHotkeyablesDefinableReferences: (DefinableReference | null)[];
  bestiaryEntries: Record<string, BestiaryEntry>;
  bodyItemInstance: ItemInstance | null;
  boostsItemInstances: ItemInstance[];
  chestOpens: ChestOpen[];
  classID: string;
  clothesDyeItemInstance: ItemInstance | null;
  createdAt: number;
  direction: Direction;
  experience: number;
  experienceUntilLevel: number | null;
  figureID: string;
  gold: number;
  hairDyeItemInstance: ItemInstance | null;
  headItemInstance: ItemInstance | null;
  hp: number;
  itemInstances: ItemInstance[];
  level: number;
  mainHandItemInstance: ItemInstance | null;
  maskItemInstance: ItemInstance | null;
  mp: number | null;
  offHandItemInstance: ItemInstance | null;
  outfitItemInstance: ItemInstance | null;
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
  bankItemInstances: ItemInstance[][];
  bestiaryEntries: Record<string, BestiaryEntry>;
  characters: SavefileCharacter[];
  lifetimeExperience: number;
  totalTimePlayed: number;
}
