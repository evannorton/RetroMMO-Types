import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleUseItemEventCaster {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleUseItemEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleUseItemEvent extends BattleEvent {
  readonly itemID: string;
  readonly caster: BattleUseItemEventCaster;
  readonly target?: BattleUseItemEventTarget;
  readonly type: BattleEventType.UseItem;
}
