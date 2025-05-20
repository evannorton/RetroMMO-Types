import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleUseAbilityEvent extends BattleEvent {
  readonly abilityID: string;
  readonly casterBattlerID: string;
  readonly targetBattlerID?: string;
  readonly type: BattleEventType.UseAbility;
}
