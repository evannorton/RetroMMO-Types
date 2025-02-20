import { BattleImpactAlignment } from "../BattleImpactAlignment";
import { Definition } from "./Definition";

export interface BattleImpactAnimationDefinition extends Definition {
  readonly alignment: BattleImpactAlignment;
  readonly imagePath: string;
}
