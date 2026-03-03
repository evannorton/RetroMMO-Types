import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatDamageEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatDamageEvent extends CombatEvent {
  readonly abilityID?: string;
  readonly amount: number;
  readonly isBleed?: boolean;
  readonly isCrit?: boolean;
  readonly isInstakill?: boolean;
  readonly isPoison?: boolean;
  readonly isRedirected?: boolean;
  readonly target: CombatDamageEventTarget;
  readonly type: CombatEventType.Damage;
}
