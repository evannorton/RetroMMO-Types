import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatRejuvenateEventTarget {
  readonly battlerID?: string;
  readonly characterID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatRejuvenateEvent extends CombatEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly target: CombatRejuvenateEventTarget;
  readonly type: CombatEventType.Rejuvenate;
}
