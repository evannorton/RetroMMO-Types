import { KeybindNumLock } from "../KeybindNumLock";

export interface BindKeyboardKeybindDownstreamWindowMessage {
  readonly inputCollectionID: string;
  readonly numLock: KeybindNumLock;
  readonly value: string;
}
