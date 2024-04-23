import { Definition } from "./Definition";

export interface ReachableDefinition extends Definition {
  readonly landscapeID: string;
  readonly mapMusicTrackID: string;
  readonly pveMusicTrackID: string;
}
