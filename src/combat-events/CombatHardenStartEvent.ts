import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatHardenStartEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly order: number;
  readonly username?: string;
}
export interface CombatHardenStartEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatHardenStartEventTarget;
  readonly type: CombatEventType.HardenStart;
}
