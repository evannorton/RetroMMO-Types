export interface RenamePlayerUpdate {
  readonly newUsername: string;
  readonly oldUsername: string;
  readonly playerID?: string;
}
