import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldEquipmentUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly bodyItemInstance?: ItemInstanceUpdate;
  readonly headItemInstance?: ItemInstanceUpdate;
  readonly mainHandItemInstance?: ItemInstanceUpdate;
  readonly offHandItemInstance?: ItemInstanceUpdate;
}
