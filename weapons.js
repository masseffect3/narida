




/*
     FILE ARCHIVED ON 14:13:50 Jun 27, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:26:40 Nov 12, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//dmg mod is [shields,barriers,armor]

var weapons = [
	{"mag":30,"wi":1.00,"wx":0.50,"dmgi": 38.6,"dmgx": 48.2,"wclass":"Assault Rifles","name":"Avenger"},
	{"mag":20,"wi":1.75,"wx":1.25,"dmgi":106.2,"dmgx":129.5,"wclass":"Assault Rifles","name":"Cerberus Harrier"},
	{"mag":28,"wi":1.60,"wx":1.20,"dmgi": 55.4,"dmgx": 69.2,"wclass":"Assault Rifles","name":"Collector AR"},
	{"mag": 4,"wi":1.75,"wx":1.00,"dmgi":279.2,"dmgx":349.0,"wclass":"Assault Rifles","name":"Falcon"},
	{"mag":100,"wi":1.00,"wx":0.50,"dmgi": 28.8,"dmgx": 36.0,"wclass":"Assault Rifles","name":"Geth Pulse Rifle"},
	{"mag":16,"wi":1.50,"wx":0.90,"dmgi":103.6,"dmgx":129.5,"wclass":"Assault Rifles","name":"Mattock"},
	{"mag":50,"wi":1.35,"wx":0.80,"dmgi": 41.9,"dmgx": 52.4,"wclass":"Assault Rifles","name":"Phaeston"},
	{"mag":60,"wi":1.80,"wx":1.25,"dmgi": 63.6,"dmgx": 79.5,"wclass":"Assault Rifles","name":"Revenant"},
	{"mag": 8,"wi":1.70,"wx":1.40,"dmgi":460.0,"dmgx":575.0,"wclass":"Assault Rifles","name":"Saber"},
	{"mag":12,"wi":2.00,"wx":1.40,"dmgi":144.7,"dmgx":180.9,"wclass":"Assault Rifles","name":"Striker"},
	{"mag":24,"wi":1.25,"wx":0.70,"dmgi": 68.6,"dmgx": 85.8,"wclass":"Assault Rifles","name":"Vindicator"},

	{"mag":18,"wi":1.10,"wx":0.60,"dmgi": 77.2, "dmgx": 96.5,"wclass":"Heavy Pistols","name":"Arc Pistol"},
	{"mag": 6,"wi":1.20,"wx":0.70,"dmgi":276.1, "dmgx":345.1,"wclass":"Heavy Pistols","name":"Carnifex"},
	{"mag":24,"wi":0.45,"wx":0.25,"dmgi": 86.1, "dmgx":107.7,"wclass":"Heavy Pistols","name":"Eagle"},
	{"mag": 3,"wi":1.00,"wx":0.70,"dmgi":424.9, "dmgx":531.1,"wclass":"Heavy Pistols","name":"Paladin"},
	{"mag":12,"wi":0.60,"wx":0.25,"dmgi":114.8, "dmgx":143.5,"wclass":"Heavy Pistols","name":"Phalanx"},
	{"mag":15,"wi":0.50,"wx":0.20,"dmgi": 58.8, "dmgx": 73.5,"wclass":"Heavy Pistols","name":"Predator"},
	{"mag": 4,"wi":1.10,"wx":0.60,"dmgi":375.2, "dmgx":469.0,"wclass":"Heavy Pistols","name":"Scorpion"},
	{"mag": 4,"wi":0.90,"wx":0.60,"dmgi":562.2, "dmgx":702.6,"wclass":"Heavy Pistols","name":"Talon","mod":[1.5,1.5,1]},

	{"mag": 1,"wi":2.50,"wx":2.00,"dmgi": 1342.4,"dmgx": 1648.0,"wclass":"Shotguns","name":"Claymore"},
	{"mag": 4,"wi":2.30,"wx":2.00,"dmgi":  630.7,"dmgx":  788.4,"wclass":"Shotguns","name":"Crusader"},
	{"mag": 4,"wi":1.00,"wx":0.50,"dmgi":  444.8,"dmgx":  556.4,"wclass":"Shotguns","name":"Disciple"},
	{"mag": 3,"wi":1.25,"wx":0.70,"dmgi":  516.8,"dmgx":  645.6,"wclass":"Shotguns","name":"Eviscerator"},
	{"mag": 5,"wi":2.00,"wx":1.40,"dmgi":1142.72,"dmgx":1428.32,"wclass":"Shotguns","name":"GPSG"},
	{"mag": 3,"wi":2.00,"wx":1.40,"dmgi": 1056.0,"dmgx": 1320.0,"wclass":"Shotguns","name":"Graal Spike"},
	{"mag": 5,"wi":1.50,"wx":0.90,"dmgi":  348.8,"dmgx":  481.6,"wclass":"Shotguns","name":"Katana"},
	{"mag":22,"wi":1.75,"wx":1.25,"dmgi":  880.0,"dmgx": 1100.0,"wclass":"Shotguns","name":"Reegar Carbine","mod":[2,2,0.5]},
	{"mag": 8,"wi":1.15,"wx":0.60,"dmgi":  283.2,"dmgx":  353.6,"wclass":"Shotguns","name":"Scimitar"},
	{"mag": 2,"wi":1.20,"wx":0.90,"dmgi":  940.8,"dmgx": 1176.0,"wclass":"Shotguns","name":"Wraith"},

	{"mag":100,"wi":0.65,"wx":0.30,"dmgi": 16.1,"dmgx": 20.1, "wclass":"SMGs","name":"GPSMG"},
	{"mag": 24,"wi":0.85,"wx":0.45,"dmgi": 53.7,"dmgx": 67.2, "wclass":"SMGs","name":"Hornet"},
	{"mag": 40,"wi":0.85,"wx":0.45,"dmgi":102.5,"dmgx":128.1, "wclass":"SMGs","name":"Hurricane"},
	{"mag": 20,"wi":0.65,"wx":0.30,"dmgi": 40.8,"dmgx": 51.0, "wclass":"SMGs","name":"Locust"},
	{"mag": 36,"wi":0.45,"wx":0.20,"dmgi": 38.7,"dmgx": 48.3, "wclass":"SMGs","name":"Shuriken"},
	{"mag": 50,"wi":0.65,"wx":0.30,"dmgi": 47.5,"dmgx": 59.4, "wclass":"SMGs","name":"Tempest"},

	{"mag": 3,"wi":2.30,"wx":2.00,"dmgi": 739.0,"dmgx": 923.8, "wclass":"Sniper Rifles","name":"Black Widow"},
	{"mag":15,"wi":1.50,"wx":0.90,"dmgi":  98.0,"dmgx": 122.5, "wclass":"Sniper Rifles","name":"Incisor"},
	{"mag":25,"wi":1.00,"wx":0.70,"dmgi":  72.6,"dmgx":  92.2, "wclass":"Sniper Rifles","name":"Indra"},
	{"mag": 1,"wi":2.70,"wx":2.40,"dmgi":1236.6,"dmgx":1545.8, "wclass":"Sniper Rifles","name":"Javelin"},
	{"mag": 1,"wi":2.00,"wx":1.40,"dmgi": 890.7,"dmgx":1113.4, "wclass":"Sniper Rifles","name":"Kishock Harpoon"},
	{"mag": 3,"wi":2.00,"wx":1.40,"dmgi": 493.4,"dmgx": 616.8, "wclass":"Sniper Rifles","name":"Krysae","mod":[1,1,1.5]},
	{"mag": 1,"wi":1.75,"wx":1.00,"dmgi": 738.7,"dmgx": 886.4, "wclass":"Sniper Rifles","name":"Mantis"},
	{"mag":15,"wi":1.00,"wx":0.70,"dmgi":  86.0,"dmgx": 107.5, "wclass":"Sniper Rifles","name":"Raptor"},
	{"mag": 3,"wi":1.75,"wx":1.00,"dmgi": 396.2,"dmgx": 515.5, "wclass":"Sniper Rifles","name":"Valiant"},
	{"mag": 6,"wi":1.25,"wx":0.70,"dmgi": 292.1,"dmgx": 365.2, "wclass":"Sniper Rifles","name":"Viper"},
	{"mag": 1,"wi":2.50,"wx":2.00,"dmgi": 997.0,"dmgx":1246.3, "wclass":"Sniper Rifles","name":"Widow"},

	// Earth DLC
	{"mag":100,"wi":2.5,"wx":2.0,"dmgi": 44.5,"dmgx": 55.5,"wclass":"Assault Rifles", "name":"N7 Typhoon","mod":[1.5,1.5,1.5]},
	{"mag":  3,"wi":0.5,"wx":0.2,"dmgi":378.0,"dmgx":441.0,"wclass":"Heavy Pistols", "name":"Acolyte","mod":[5,5,1]},
	{"mag":  6,"wi":1.5,"wx":0.9,"dmgi":493.6,"dmgx":616.8,"wclass":"Shotguns", "name":"N7 Piranha"},

	{"mag":100,"wi":2.00,"wx":1.40,"dmgi": 76.8,"dmgx": 103.2,"wclass":"Assault Rifles","name":"Particle Rifle"},
	{"mag": 21,"wi":2.00,"wx":1.40,"dmgi":164.8,"dmgx": 206.0,"wclass":"Assault Rifles","name":"Argus Assault Rifle"},
	{"mag":  2,"wi":2.00,"wx":1.40,"dmgi":800.0,"dmgx":1000.0,"wclass":"Shotguns","name":"AT-12 Raider"},

	// Retaliation DLC
	{"mag":45,"wi":2.0, "wx":1.4, "dmgi": 73.0, "dmgx": 91.4, "wclass":"Sniper Rifles", "name":"Collector SR"},
	{"mag":40,"wi":0.85, "wx":0.45, "dmgi": 41.2, "dmgx": 51.5, "wclass":"SMGs", "name":"Collector SMG","mod":[1,1,1.5]},
	
	{"mag":16,"wi":1.5, "wx":1.25, "dmgi": 119.9, "dmgx": 149.9, "wclass":"Assault Rifles", "name":"N7 Valkyrie"},
	
	// Reckoning DLC
	{"mag": 40,"wi":0.85,"wx":0.45,"dmgi": 40.1, "dmgx": 50.1,"wclass":"SMGs", "name":"Blood Pack Punisher"},
	{"mag":  6,"wi":1.2, "wx":0.7, "dmgi":125.7, "dmgx":157.1, "wclass":"Heavy Pistols", "name":"M-11 Suppressor"},
	{"mag":  1,"wi":1.2, "wx":0.7, "dmgi":784.90,"dmgx":981.10,"wclass":"Heavy Pistols", "name":"Executioner"},
	{"mag": 24,"wi":2,   "wx":1.4, "dmgi":178.1, "dmgx":222.6, "wclass":"Assault Rifles", "name":"Adas Anti-Synthetic Rifle","mod":[2,2,1]},
	{"mag":220,"wi":3,   "wx":2.5, "dmgi": 62.2, "dmgx": 77.8, "wclass":"Assault Rifles", "name":"Geth Spitfire","mod":[1.75,1.75,1]},
	{"mag":  4,"wi":2,   "wx":1.4, "dmgi":630.7, "dmgx":795,   "wclass":"Shotguns","name":"Venom","mod":[1.75,1.75,1]},
	{"mag": 57,"wi":1.3, "wx":0.8, "dmgi": 67.9, "dmgx": 84.8, "wclass":"Assault Rifles","name":"Lancer"}
	
];





