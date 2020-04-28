




/*
     FILE ARCHIVED ON 14:15:47 Jun 27, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:26:37 Nov 12, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var mods = [
	{"wclass":"Assault Rifles","name":"Precision Scope","effects":{"type":"Accuracy Upgrade","y":[0.15, 0.20, 0.25, 0.30, 0.35]}},
	{"wclass":"Assault Rifles","name":"Stability Damper","effects":{"type":"Weapon Stability","y":[0.3, 0.4, 0.5, 0.6, 0.7]}},
	{"wclass":"Assault Rifles","name":"Magazine Upgrade","effects":{"type":"Magazine Upgrade","y":[0.4, 0.5, 0.6, 0.7, 0.8]}},
	{"wclass":"Assault Rifles","name":"Extended Barrel","effects":{"type":"Weapon Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]}},
	{"wclass":"Assault Rifles","name":"Piercing Mod","effects":{"type":"Defense Ignore","y":[0.25,0.35,0.45,0.55,0.65]}},
	
	{"wclass":"Heavy Pistols", "name":"Melee Stunner","effects":{"type":"Melee Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]}},
	{"wclass":"Heavy Pistols", "name":"Piercing Mod","effects":{"type":"Defense Ignore","y":[0,0,0,0,0]}},
	{"wclass":"Heavy Pistols", "name":"Magazine Upgrade","effects":{"type":"Magazine Upgrade","y":[0.4, 0.5, 0.6, 0.7, 0.8]}},
	{"wclass":"Heavy Pistols", "name":"High Caliber Barrel","effects":{"type":"Weapon Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]}},
	{"wclass":"Heavy Pistols", "name":"Scope","effects":{"type":"Accuracy Upgrade","y":[0.15, 0.20, 0.25, 0.30, 0.35]}},
	
	{"wclass":"Shotguns",      "name":"Spare Thermal Clip","effects":{"type":"Thermal Clip Capacity","y":[0.5, 0.6, 0.7, 0.8, 0.9]}},
	{"wclass":"Shotguns",      "name":"Shredder Mod","effects":{"type":"Defense Ignore","y":[0,0,0,0,0]}},
	{"wclass":"Shotguns",      "name":"Blade Attachment","effects":{"type":"Melee Damage Bonus","y":[0.15, 0.175, 0.20, 0.225, 0.25]}},
	{"wclass":"Shotguns",      "name":"High Caliber Barrel","effects":{"type":"Weapon Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]}},
	{"wclass":"Shotguns",      "name":"Smart Choke","effects":{"type":"Accuracy Upgrade","y":[0.3, 0.35, 0.4, 0.45, 0.50]}},
	
	{"wclass":"Sniper Rifles", "name":"Spare Thermal Clip","effects":{"type":"Thermal Clip Capacity","y":[0.5, 0.6, 0.7, 0.8, 0.9]}},
	{"wclass":"Sniper Rifles", "name":"Extended Barrel","effects":{"type":"Weapon Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]}},
	{"wclass":"Sniper Rifles", "name":"Piercing Mod","effects":{"type":"Defense Ignore","y":[0,0,0,0,0]}},
	{"wclass":"Sniper Rifles", "name":"Enhanced Scope","effects":{"type":"Accuracy Upgrade","y":[0.15, 0.20, 0.25, 0.30, 0.35]}},
	
	{"wclass":"SMGs",          "name":"Ultralight SMG Materials","effects":{"type":"Mod Weight Reduction","y":[-0.5, -0.6, -0.7, -0.8, -0.9]}}, // actually "Ultralight Materials"
	{"wclass":"SMGs",          "name":"Magazine Upgrade","effects":{"type":"Rounds per Magazine","y":[0.4, 0.5, 0.6, 0.7, 0.8]}},
	{"wclass":"SMGs",          "name":"High Caliber Barrel","effects":{"type":"Weapon Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]}},
	{"wclass":"SMGs",          "name":"Heat Sink","effects":{"type":"Heat Negate Chance","y":[0.25, 0.30, 0.35, 0.40, 0.45]}},
	{"wclass":"SMGs",          "name":"Scope","effects":{"type":"Accuracy Upgrade","y":[0.15, 0.20, 0.25, 0.30, 0.35]}},
	
	
	// Add earth dlc here
	{"wclass":"Heavy Pistols", "name":"Cranial Trauma System","effects":{"type":"Headshot Damage Bonus","y":[0.20, 0.25, 0.30, 0.35, 0.40]}},
	{"wclass":"Heavy Pistols", "name":"Ultralight HP Materials","effects":{"type":"Mod Weight Reduction","y":[-0.30, -0.35, -0.40, -0.45, -0.50]}}, // actually "Ultralight Pistol Materials"
	{"wclass":"SMGs",          "name":"High-Velocity Barrel","effects":{"type":"Defense Ignore","y":[0.5,0.6,0.7,0.8,0.9]}},
	{"wclass":"SMGs",          "name":"Recoil System","effects":{"type":"Weapon Stability","y":[0.3, 0.4, 0.5, 0.6, 0.7]}},
	{"wclass":"Assault Rifles","name":"Omni-Blade","effects":{"type":"Melee Damage Bonus","y":[0.15, 0.175, 0.20, 0.225, 0.25]}},
	
	{"wclass":"Assault Rifles","name":"Thermal Scope","effects":[{"type":"Accuracy Upgrade","y":[0.15, 0.20, 0.25, 0.30, 0.35]},{"type":"Weight Capacity Bonus","y":[-0.5, -0.5, -0.5, -0.5, -0.5]}]},
	{"wclass":"Assault Rifles","name":"High-Velocity Barrel","effects":[{"type":"Defense Ignore","y": [0.5,0.6,0.7,0.8,0.9]},{"type":"Weight Capacity Bonus","y":[-0.5, -0.5, -0.5, -0.5, -0.5]}]},
	{"wclass":"Shotguns",      "name":"Omni-Blade","effects":[{"type":"Melee Damage Bonus","y":[0.30, 0.35, 0.40, 0.45, 0.50]},{"type":"Weight Capacity Bonus","y":[-0.5, -0.5, -0.5, -0.5, -0.5]}]},
	{"wclass":"Shotguns",      "name":"High-Velocity Barrel","effects":[{"type":"Weapon Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]},{"type":"Defense Ignore","y": [0.25,0.35,0.45,0.55,0.65]},{"type":"Weight Capacity Bonus","y":[-0.5, -0.5, -0.5, -0.5, -0.5]}]},
	{"wclass":"Sniper Rifles", "name":"Thermal Scope","effects":[{"type":"Accuracy Upgrade","y":[0.15, 0.20, 0.25, 0.30, 0.35]},{"type":"Weight Capacity Bonus","y":[-0.5, -0.5, -0.5, -0.5, -0.5]}]},
	{"wclass":"Sniper Rifles", "name":"High-Velocity Barrel","effects":[{"type":"Weapon Damage Bonus","y":[0.15, 0.175, 0.2, 0.225, 0.25]},{"type":"Defense Ignore","y": [0.25,0.35,0.45,0.55,0.65]},{"type":"Weight Capacity Bonus","y":[-0.5, -0.5, -0.5, -0.5, -0.5]}]},
	{"wclass":"Heavy Pistols", "name":"Heavy Barrel","effects":[{"type":"Weapon Damage Bonus","y":[0.20, 0.25, 0.30, 0.35, 0.40]},{"type":"Weight Capacity Bonus","y":[-0.5, -0.5, -0.5, -0.5, -0.5]}]},
	
	// Reckoning DLC
	{"wclass":"Sniper Rifles", "name":"Ultralight Materials","effects":{"type":"Mod Weight Reduction","y":[-0.08, -0.10, -0.12, -0.14, -0.15]}},
	{"wclass":"Assault Rifles", "name":"Ultralight Materials","effects":{"type":"Mod Weight Reduction","y":[-0.08, -0.10, -0.12, -0.14, -0.15]}},
	{"wclass":"Shotguns", "name":"Ultralight Materials","effects":{"type":"Mod Weight Reduction","y":[-0.08, -0.10, -0.12, -0.14, -0.15]}},
	{"wclass":"SMGs", "name":"Power Magnifier","effects":{"type":"Power Damage Bonus","y":[0.1,0.15,0.2,0.25,0.3]}},
	{"wclass":"Heavy Pistols", "name":"Power Magnifier","effects":{"type":"Power Damage Bonus","y":[0.1,0.15,0.2,0.25,0.3]}},
	
	
];