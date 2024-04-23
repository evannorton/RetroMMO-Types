import { Definition } from "./Definition";

export interface MonsterDefinition extends Definition {
  readonly battleHeight: number;
  readonly battleWidth: number;
  readonly imageSourceID: string;
  readonly offset: number;
  readonly shadowXOffset: number;
  readonly shadowXRadius: number;
  readonly shadowYOffset: number;
  readonly shadowYRadius: number;
}
