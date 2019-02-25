import ModuleTypes from "./module-types.js";

const CorvetteShipSections = {
  "INTERCEPTOR": {
    key: "INTERCEPTOR",
    name: "Interceptor",
    slot1: ModuleTypes.SMALL_WEAPON,
    slot2: ModuleTypes.SMALL_WEAPON,
    slot3: ModuleTypes.SMALL_WEAPON,
    slot4: ModuleTypes.NONE,
    slot5: ModuleTypes.NONE,
    slot6: ModuleTypes.NONE,
    slot7: ModuleTypes.NONE,
    slot8: ModuleTypes.NONE,
    slot9: ModuleTypes.AUXILIARY,
    slot10: ModuleTypes.SMALL_DEFENCE,
    slot11: ModuleTypes.SMALL_DEFENCE,
    slot12: ModuleTypes.SMALL_DEFENCE
  },
  "MISSILE_BOAT": {
    key: "MISSILE_BOAT",
    name: "Missile Boat",
    slot1: ModuleTypes.SMALL_WEAPON,
    slot2: ModuleTypes.GUIDED,
    slot3: ModuleTypes.NONE,
    slot4: ModuleTypes.NONE,
    slot5: ModuleTypes.NONE,
    slot6: ModuleTypes.NONE,
    slot7: ModuleTypes.NONE,
    slot8: ModuleTypes.NONE,
    slot9: ModuleTypes.AUXILIARY,
    slot10: ModuleTypes.SMALL_DEFENCE,
    slot11: ModuleTypes.SMALL_DEFENCE,
    slot12: ModuleTypes.SMALL_DEFENCE
  },
  "PICKET_SHIP": {
    key: "PICKET_SHIP",
    name: "Picket Ship",
    slot1: ModuleTypes.POINT_DEFENCE,
    slot2: ModuleTypes.SMALL_WEAPON,
    slot3: ModuleTypes.SMALL_WEAPON,
    slot4: ModuleTypes.NONE,
    slot5: ModuleTypes.NONE,
    slot6: ModuleTypes.NONE,
    slot7: ModuleTypes.NONE,
    slot8: ModuleTypes.NONE,
    slot9: ModuleTypes.AUXILIARY,
    slot10: ModuleTypes.SMALL_DEFENCE,
    slot11: ModuleTypes.SMALL_DEFENCE,
    slot12: ModuleTypes.SMALL_DEFENCE
  }
};

export default CorvetteShipSections;