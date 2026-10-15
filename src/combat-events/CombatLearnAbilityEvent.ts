import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";

export interface CombatLearnAbilityEvent extends CombatEvent {
  readonly abilityID: string;
  readonly type: CombatEventType.LearnAbility;
  readonly username: string;
}
