import { BattleResourcesUpdate } from "./BattleResourcesUpdate";

export interface BattlerUpdate {
  readonly characterID?: string;
  readonly id: string;
  readonly isAlive?: boolean;
  readonly resources?: BattleResourcesUpdate;
}
