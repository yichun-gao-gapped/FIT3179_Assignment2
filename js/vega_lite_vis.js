var vg_1 = "js/protected_areas_map.vg.json";
vegaEmbed("#protected_areas_map", vg_1, {
  actions: false
}).catch(console.error);

var vg_2 = "js/state_protection_map.vg.json";
vegaEmbed("#state_protection_map", vg_2, {
  actions: false
}).catch(console.error);

var vg_3 = "js/iucn_composition.vg.json";
vegaEmbed("#iucn_composition", vg_3, {
  actions: false
}).catch(console.error);