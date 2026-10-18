import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";

export interface CombatMilestoneResetFailureEvent extends CombatEvent {
  readonly type: CombatEventType.MilestoneResetFailure;
  readonly username: string;
}
