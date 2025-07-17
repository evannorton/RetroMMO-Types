import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleHealEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleHealEvent extends BattleEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly target: BattleHealEventTarget;
  readonly type: BattleEventType.Heal;
}
