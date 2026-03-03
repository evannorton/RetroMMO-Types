import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatBoostFailureEvent extends CombatEvent {
  readonly type: CombatEventType.BoostFailure;
  readonly username: string;
}
