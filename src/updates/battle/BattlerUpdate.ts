import { BattleResourcesUpdate } from "./BattleResourcesUpdate";

export interface BattlerUpdate {
  readonly characterID?: string;
  readonly id: string;
  readonly isDead?: boolean;
  readonly resources?: BattleResourcesUpdate;
}
