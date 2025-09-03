import { BattleResourcesUpdate } from "./BattleResourcesUpdate";
import { BattlerType } from "../../BattlerType";

export interface BattlerBleedUpdate {
  readonly order: number;
}
export interface BattlerPoisonUpdate {
  readonly order: number;
}
export interface BattlerUpdate {
  readonly bleed?: BattlerBleedUpdate;
  readonly characterID?: string;
  readonly gold: number;
  readonly id: string;
  readonly isAlive?: boolean;
  readonly monsterID?: string;
  readonly poison?: BattlerPoisonUpdate;
  readonly resources?: BattleResourcesUpdate;
  readonly type: BattlerType;
}
