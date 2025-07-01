import { BattleResourcesUpdate } from "./BattleResourcesUpdate";
import { BattlerType } from "../../BattlerType";

export interface BattlerUpdate {
  readonly characterID?: string;
  readonly gold: number;
  readonly id: string;
  readonly isAlive?: boolean;
  readonly resources?: BattleResourcesUpdate;
  readonly type: BattlerType;
}
