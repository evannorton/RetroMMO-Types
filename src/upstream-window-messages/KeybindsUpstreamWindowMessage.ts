import { KeybindNumLock } from "../KeybindNumLock";

export type KeybindJoystickDirection = "down" | "left" | "right" | "up";
export interface KeybindKeyboardButton {
  readonly numLock: KeybindNumLock;
  readonly value: string;
}
export interface KeybindInputCollection {
  readonly gamepadButtons: readonly number[];
  readonly id: string;
  readonly joystickDirections: readonly KeybindJoystickDirection[];
  readonly keyboardButtons: readonly KeybindKeyboardButton[];
  readonly matchesDefaultInputs: boolean;
  readonly mouseButtons: readonly number[];
  readonly name: string;
}
export interface KeybindsUpstreamWindowMessage {
  readonly inputCollections: readonly KeybindInputCollection[];
}
