import { Definition } from "./Definition";

export interface ReachableDefinition extends Definition {
  readonly landscapeSlug: string;
  readonly mapMusicTrackSlug: string;
  readonly pveMusicTrackSlug: string;
}
