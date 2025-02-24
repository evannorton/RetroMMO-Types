import { EquipmentSlot } from "../EquipmentSlot";

export interface EquipmentPieceDefinition {
  readonly agility: number;
  readonly classIDs: readonly string[];
  readonly defense: number;
  readonly intelligence: number;
  readonly level: number;
  readonly luck: number;
  readonly slot: EquipmentSlot;
  readonly strength: number;
  readonly wisdom: number;
}
