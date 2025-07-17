import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleDamageEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleDamageEvent extends BattleEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly isCrit?: boolean;
  readonly isInstakill?: boolean;
  readonly isRedirected?: boolean;
  readonly target: BattleDamageEventTarget;
  readonly type: BattleEventType.Damage;
}
