export interface WorldInvitePromptUpdate {
  readonly inviterCharacterID: string;
  readonly inviteeCharacterID: string;
}
export interface WorldInvitePromptsUpdate {
  readonly duelInvitePrompts?: readonly WorldInvitePromptUpdate[];
  readonly partyInvitePrompts?: readonly WorldInvitePromptUpdate[];
  readonly tradeInvitePrompts?: readonly WorldInvitePromptUpdate[];
}
