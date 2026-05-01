import { InviteType } from "../../../InviteType";

export interface WorldInviteStartUpdate {
  readonly type: InviteType;
  readonly playerID: string;
}
