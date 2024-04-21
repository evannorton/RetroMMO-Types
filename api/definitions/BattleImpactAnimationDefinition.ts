import { BattleImpactAlignment } from "../BattleImpactAlignment";
import { Definition } from "./Definition";

export interface BattleImpactAnimation extends Definition {
  readonly alignment: BattleImpactAlignment;
  readonly imageSourceSlug: string;
}
