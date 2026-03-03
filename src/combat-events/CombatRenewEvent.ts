import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatRenewEvent extends CombatEvent {
  readonly abilityID: string;
  readonly characterID: string;
  readonly type: CombatEventType.Renew;
  readonly username: string;
}
