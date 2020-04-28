




/*
     FILE ARCHIVED ON 12:31:16 Jun 27, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:27:10 Nov 12, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var x = [
	[0.04,0.06,0.08,0.10,0.12],// 0
	[0.06,0.1,0.14,0.175,0.2], // 1
	[1,1,1,2,2],               // 2
	[0.03,0.05,0.07,0.085,0.10],// 3
	[0.05,0.075,0.1,0.125,0.15],// 4
	[0.05,0.1,0.15,0.20,0.25], // 5 --- TODO:MAKE SURE
	[0.1,0.15,0.20,0.25,0.3],  // 6
	[1,2,3,4,5],               // 7
	[0.08,0.11,0.14,0.17,0.2], // 8
	[0.1,0.2,0.3,0.5],   //  9  check these vvvv
	[0.25,0.5,1,1.25],    // 10
	[0.05,0.15,0.25,0.30],// 11
	[0.3,0.6,1,1.5],      // 12
	[0.06,0.1,0.14,0.17,0.20],// 13
];

// up to 3
var wamps = [
	{"name":"Assault Rifle Rail Amp","effects":{"type":"Weapon Damage Bonus","wclass":"Assault Rifles","x":9}},
	{"name":"Pistol Rail Amp",       "effects":{"type":"Weapon Damage Bonus","wclass":"Heavy Pistols","x":9}},
	{"name":"Shotgun Rail Amp",      "effects":{"type":"Weapon Damage Bonus","wclass":"Shotguns","x":9}},
	{"name":"SMG Rail Amp",          "effects":{"type":"Weapon Damage Bonus","wclass":"SMGs","x":9}},
	{"name":"Sniper Rifle Rail Amp", "effects":{"type":"Weapon Damage Bonus","wclass":"Sniper Rifles","x":9}},
	{"name":"Strength Enhancer",     "effects":{"type":"Melee Damage Bonus","y":[0.1,0.2,0.3]}},// /web/20130627123116/http://social.bioware.com/forum/1/topic/343/index/13773218 10/20/30%,not 25/50/100
	{"name":"Targeting VI",          "effects":{"type":"Headshot Damage Bonus","y":[0.15,0.25,0.35]}}	// according to /web/20130627123116/http://social.bioware.com/forum/1/topic/343/index/13855086
];
// up to 4
var aamps = [
	{"name":"Adrenaline Module",      "effects":{"type":"Movement Speed Bonus","x":11}},
	{"name":"Power Amplifier Module", "effects":{"type":"Power Damage Bonus","x":9}},
	{"name":"Power Efficiency Module","effects":{"type":"Power Recharge","x":9}},
	{"name":"Cyclonic Modulator",     "effects":{"type":"Shield Bonus","x":12}},
	{"name":"Shield Power Cells",     "effects":{"type":"Shield Recharge Delay Bonus","x":9}}, // Shield Recharge Speed Bonus
	{"name":"Stabilization Module",   "effects":{"type":"Weapon Stability Bonus","x":9}}
];
// up to 4
var ammo = [
	{"name":"Armor-Piercing Rounds", "effects":[
		{"type":"Damage Modifier","y":[[0.1,0,0,0.1],[0.2,0,0,0.2],[0.3,0,0,0.3],[0.5,0,0,0.5]]},
		{"type":"Armor Reduction","y":[0.5,0.65,0.75,0.9]},
		{"type":"Penetration","y":[0.5,0.75,1,1.5]}]},
	{"name":"Cryo Rounds",          "effects":[
		{"type":"Damage Modifier","y":[[0.1,0,0,0.1],[0.2,0,0,0.2],[0.3,0,0,0.3],[0.5,0,0,0.5]]},
		{"type":"Armor Weakness","y":[0.25,0.35,0.50,0.65]},
		{"type":"Special","desc":"Set up cryo explosions."}]},
	{"name":"Disruptor Rounds",     "effects":[
		{"type":"Damage Modifier","y":[[0.0,5,0.2,0.2,0],[0.1,0.4,0.4,0],[0.15,0.60,0.60,0],[0.25,1,1,0]]},
		{"type":"Special","desc":"Delays enemy shield regen by 8 seconds."}]},
	{"name":"Incendiary Rounds",    "effects":[
		{"type":"Damage Modifier","y":[[0.1,0,0,0.1],[0.2,0,0,0.2],[0.3,0,0,0.3],[0.5,0,0,0.5]]},
		{"type":"Special","desc":"Can set up fire explosions."},
		{"type":"Special","desc":"Extra damage applied over 3 seconds."}]},
	{"name":"Warp Rounds",          "effects":[
		{"type":"Damage Modifier","y":[[0.1,0,0,0.1],[0.2,0,0,0.2],[0.3,0,0,0.3],[0.5,0,0,0.5]]},
		{"type":"Armor Weakness","y":[0.25,0.35,0.50,0.65]},
		{"type":"Special","desc":"Set up cryo explosions."}]},
	{"name":"Drill Rounds",         "effects":{"type":"Movement Speed Bonus","x":11}},
	{"name":"Explosive Rounds",     "effects":{"type":"Movement Speed Bonus","x":11}},
	{"name":"Phasic Rounds",        "effects":{"type":"Movement Speed Bonus","x":11}},
]

// up to 5
var gear = [
	{"name":"Commando Package",     "effects":[{"type":"Weapon Damage Bonus","wclass":"Heavy Pistols","x":0},{"type":"Biotic Power Damage Bonus","x":0}]},
	{"name":"Berserker Package",    "effects":[{"type":"Weapon Damage Bonus","wclass":"Shotguns","x":0},{"type":"Melee Damage Bonus","x":0}]},
	{"name":"Expert Package",       "effects":[{"type":"Weapon Damage Bonus","wclass":"SMGs","x":0},{"type":"Power Recharge","x":0}]},
	{"name":"Operative Package",    "effects":[{"type":"Weapon Damage Bonus","wclass":"Sniper Rifles","x":0},{"type":"Tech Power Damage Bonus","x":0}]},
	{"name":"Stronghold Package",   "effects":[{"type":"Shield Bonus","x":1},{"type":"Shield Recharge Delay Bonus","x":0}]}, // "Shield Regen"
	{"name":"Warfighter Package",   "effects":[{"type":"Weapon Damage Bonus","wclass":"Assault Rifles","x":0},{"type":"Grenade Capacity","x":2}]},
	{"name":"Mental Focuser",       "effects":{"type":"Power Damage Bonus","x":0}},
	{"name":"Structural Ergonomics","effects":{"type":"Power Recharge","x":4}},
	{"name":"Multicapacitor",       "effects":{"type":"Shield Recharge Delay Bonus","x":4}},
	{"name":"Shield Booster",       "effects":{"type":"Shield Bonus","x":6}},

	{"name":"Assault Rifle Amp","effects":{"type":"Weapon Damage Bonus","wclass":"Assault Rifles","x":4}},
	{"name":"Pistol Amp",       "effects":{"type":"Weapon Damage Bonus","wclass":"Heavy Pistols","x":4}},
	{"name":"Shotgun Amp",      "effects":{"type":"Weapon Damage Bonus","wclass":"Shotguns","x":4}},
	{"name":"SMG Amp",          "effects":{"type":"Weapon Damage Bonus","wclass":"SMGs","x":4}},
	{"name":"Sniper Rifle Amp", "effects":{"type":"Weapon Damage Bonus","wclass":"Sniper Rifles","x":4}},

	{"name":"Grenade Capacity","effects":{"type":"Grenade Capacity","x":7}},
	{"name":"Hydraulic Joints","effects":{"type":"Melee Damage Bonus","y":[0.1,0.125,0.15,0.175,0.2]}},
	{"name":"Vulnerability VI","effects":{"type":"Headshot Damage Bonus","x":8}},

	// EARTH DLC GEAR
	{"name":"Adaptive War Amp",     "effects":{"type":"Biotic Power Damage Bonus","x":4}},
	{"name":"Combatives Upgrade",   "effects":[{"type":"Weapon Damage Bonus","wclass":"Assault Rifles","x":0},{"type":"Weapon Damage Bonus","wclass":"Heavy Pistols","x":0}]},
	{"name":"Densified Ammunition", "effects":[{"type":"Ammo Capacity","x":3},{"type":"Weapon Damage Bonus","x":3}]},
	{"name":"Engineering Kit",      "effects":{"type":"Tech Power Damage Bonus","x":4}},
	{"name":"Guerrilla Upgrade",    "effects":[{"type":"Weapon Damage Bonus","wclass":"Sniper Rifles","x":0},{"type":"Weapon Damage Bonus","wclass":"SMGs","x":0}]},
	{"name":"Juggernaut Shield",    "effects":[{"type":"Melee Damage Bonus","x":0},{"type":"Shield Bonus","x":13}]},
	{"name":"Martial Biotic Amp",   "effects":[{"type":"Melee Damage Bonus","x":0},{"type":"Biotic Power Damage Bonus","x":0}]},
	{"name":"Omni-Capacitors",      "effects":[{"type":"Power Recharge","x":0},{"type":"Power Damage Bonus","x":0}]},
	{"name":"Shock Trooper Upgrade","effects":[{"type":"Grenade Capacity","x":2},{"type":"Weapon Damage Bonus","wclass":"Shotguns","x":0}]},
	{"name":"Thermal Clip Storage", "effects":{"type":"Ammo Capacity","x":6}},
	{"name":"Barrage Upgrade",      "effects":[{"type":"Ammo Capacity","x":0},{"type":"Weapon Stability Bonus","x":6}]},

	// Retaliation DLC Gear
	{"name":"Medi-Gel Transmitter","effects":null},
	{"name":"Armored Compartments","effects":null},
	{"name":"Responder Loadout",   "effects":{"type":"Shield Recharge Delay Bonus","y":[0.03,0.05,0.07,0.085,0.1]}}, // "Shield Regen"
	{"name":"Survivor Loadout",    "effects":{"type":"Shield Bonus","y":[0.06,0.1,0.14,0.17,0.2]}},
	{"name":"Assault Loadout",     "effects":{"type":"Weapon Damage Bonus","y":[0.02,0.04,0.06,0.07,0.08]}},
	
	// Reckoning DLC
	{"name":"Batarian Gauntlet",   "effects":{"type":"Heavy Melee Base","y":[600,650,700,750,800]}},
	{"name":"Geth Scanner",     "effects":{"type":"Range (m)","y":[10,12.5,15,17.5,20]}}
	
];