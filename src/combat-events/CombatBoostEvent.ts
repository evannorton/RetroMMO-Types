import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";

export interface CombatBoostEvent extends CombatEvent {
  readonly abilityID: string;
  readonly type: CombatEventType.Boost;
  readonly username: string;
}
