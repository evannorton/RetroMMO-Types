import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatUseItemEventCaster {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatUseItemEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatUseItemEvent extends CombatEvent {
  readonly itemID: string;
  readonly caster: CombatUseItemEventCaster;
  readonly target?: CombatUseItemEventTarget;
  readonly type: CombatEventType.UseItem;
}
