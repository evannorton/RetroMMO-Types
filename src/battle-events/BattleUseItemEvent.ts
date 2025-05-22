import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleUseItemEventCaster {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleUseItemEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleUseItemEvent extends BattleEvent {
  readonly itemID: string;
  readonly caster: BattleUseItemEventCaster;
  readonly target?: BattleUseItemEventTarget;
  readonly type: BattleEventType.UseItem;
}
