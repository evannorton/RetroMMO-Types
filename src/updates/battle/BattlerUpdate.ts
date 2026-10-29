import { BattleResourcesUpdate } from "./BattleResourcesUpdate";
import { CombatantType } from "../../CombatantType";

export interface BattlerBleedUpdate {
  readonly order: number;
}
export interface BattlerHardenUpdate {
  readonly order: number;
}
export interface BattlerPoisonUpdate {
  readonly order: number;
}
export interface BattlerSoftenUpdate {
  readonly order: number;
}
export interface BattlerUpdate {
  readonly bleed?: BattlerBleedUpdate;
  readonly characterID?: string;
  readonly gold: number;
  readonly harden?: BattlerHardenUpdate;
  readonly id: string;
  readonly isAlive?: boolean;
  readonly monsterID?: string;
  readonly poison?: BattlerPoisonUpdate;
  readonly resources?: BattleResourcesUpdate;
  readonly soften?: BattlerSoftenUpdate;
  readonly type: CombatantType;
}
