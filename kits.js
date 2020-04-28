




/*
     FILE ARCHIVED ON 8:26:24 Jun 27, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:26:05 Nov 12, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var classes = [
	{"name":"Adept","races":[
		{"name":"Human","hp":500,"shields":500,"melee":150,"hmelee": 500,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Singularity","Warp","Shockwave","Alliance Training","Fitness (H)"]},
		{"name":"Asari","hp":500,"shields":500,"melee":150,"hmelee": 500,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Stasis","Warp","Throw","Asari Adept","Fitness (A/Q/S/Vs)"]},
		{"name":"Drell","hp":500,"shields":250,"melee":225,"hmelee": 600,"enc":0.45,"skills":["Reave (DA)","Pull","Cluster Grenade","Drell Assassin","Fitness (D)"]},
		{"name":"Asari Justicar","hp":500,"shields":600,"melee":150,"hmelee": 500,"mmod":[1.5,1.5,1.5],"enc":0.40,"skills":["Biotic Sphere","Reave (AJA)","Pull","Asari Justicar","Fitness (A/Q/S/Vs)"]},
		{"name":"Ex-Cerberus","hp":500,"shields":500,"melee":400,"hmelee": 350,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Singularity","Smash","Lash","Phoenix Training","Fitness (Ex-C)"]},
		{"name":"N7 Fury","hp":500,"shields":500,"melee":350,"hmelee": 350,"mmod":[1.5,1.5,1],"enc":0.3,"skills":["Annihilation Field","Dark Channel","Throw","N7 Paladin/Fury","Fitness (Ex-C)"]},
		{"name":"Volus","hp":150,"shields":500,"melee":0,"hmelee": 150,"enc":0.15,"skills":["Stasis","Biotic Orbs","Shield Boost","Volus Training","Fitness (A/Q/S/Vs)"]},
		{"name":"Krogan Shaman","hp":1000,"shields":1000,"melee":300,"hmelee": 700,"enc":0.3,"skills":["Barrier","Shockwave","Warp","Krogan Berserker","Rage"]},
		{"name":"Batarian Slasher","hp":750,"shields":750,"melee":190,"hmelee":1000,"enc":0.3,"skills":["Warp","Cluster Grenade","Lash","Batarian Enforcer","Fitness (B/T)"]},
		{"name":"Awakened Collector","hp":500,"shields":750,"melee":300,"hmelee":450,"mmod":[1.5,1.5,1.5],"enc":0.3,"skills":["Dark Sphere","Seeker Swarm","Dark Channel","Vengeful Ancient","Ancient Warrior"]}]},
	{"name":"Soldier","races":[
		{"name":"Human","hp":500,"shields":500,"melee":150,"hmelee":600,"enc":0.45,"skills":["Adrenaline Rush","Concussive Shot","Frag Grenade","Alliance Training","Fitness (H)"]},
		{"name":"Krogan","hp":750,"shields":1000,"melee":300,"hmelee":700,"enc":0.60,"skills":["Fortification","Carnage","Inferno Grenade","Krogan Berserker","Rage"]},
		{"name":"Turian","hp":500,"shields":750,"melee":200,"hmelee":675,"enc":0.65,"skills":["Marksman","Concussive Shot","Proximity Mine","Turian Veteran","Fitness (B/T)"]},
		{"name":"Battlefield 3","hp":500,"shields":500,"melee":150,"hmelee":600,"enc":0.45,"skills":["Adrenaline Rush","Carnage","Frag Grenade","Alliance Training","Fitness (H)"]},
		{"name":"Batarian","hp":750,"shields":750,"melee":190,"hmelee":1000,"enc":0.30,"skills":["Ballistic Blades","Blade Armor","Inferno Grenade","Batarian Enforcer","Fitness (B/T)"]},
		{"name":"Vorcha","hp":750,"shields":250,"melee":250,"hmelee":600,"enc":0.30,"skills":["Bloodlust","Flamer","Carnage","Vorcha Resilience","Fitness (QM/V)"]},
		{"name":"N7 Destroyer","hp":500,"shields":1000.0,"melee":450,"hmelee":500.0,"mmod":[1.5,1.5,1.5],"enc":0.3,"skills":["Devastator Mode","Missile Launcher","Multi-Frag Grenade","T5-V Battlesuit","T5-V Internal Systems"]},
		{"name":"Turian Havoc","hp":500,"shields":750,"melee":200,"hmelee":600,"enc":0.30,"skills":["Cryo Blast","Havoc Strike","Stimulant Pack","Armiger Legion","Fitness (TH/TGI)"]},
		{"name":"Geth Trooper","hp":250,"shields":1000,"melee":200,"hmelee":375,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Hunter Mode","Flamer","Fortification","Networked AI","Advanced Hardware"]},
		{"name":"Quarian Marksman","hp":500,"shields":500,"melee":150,"hmelee":600,"enc":0.30,"skills":["Marksman","Tactical Scan","Sabotage","Quarian Defender (MQS)","Fitness (QM/V)"]},
		{"name":"Geth Juggernaut","hp":1000,"shields":2000,"melee":150,"hmelee":60,"mmod":[2,2,1],"enc":0.75,"skills":["Hex Shield","Siege Pulse","Geth Turret","Geth Juggernaut","Hardened Platform"]}]},
	{"name":"Engineer","races":[
		{"name":"Human","hp":500,"shields":500,"melee":150,"hmelee":600,"enc":0.30,"skills":["Combat Drone","Incinerate","Overload","Alliance Training","Fitness (H)"]},
		{"name":"Quarian","hp":500,"shields":600,"melee":150,"hmelee":600,"enc":0.30,"skills":["Sentry Turret","Incinerate","Cryo Blast","Quarian Defender","Fitness (A/Q/S/Vs)"]},
		{"name":"Salarian","hp":500,"shields":600,"melee":150,"hmelee":600,"enc":0.30,"skills":["Energy Drain","Decoy","Incinerate","Salarian Operative","Fitness (A/Q/S/Vs)"]},
		{"name":"Geth","hp":250,"shields":750,"melee":200,"hmelee":375,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Geth Turret","Hunter Mode","Overload","Networked AI","Advanced Hardware"]},
		{"name":"Quarian Male","hp":500,"shields":600,"melee":150,"hmelee":600,"enc":0.30,"skills":["Tactical Scan","Incinerate","Arc Grenade","Quarian Defender (M)","Fitness (QM/V)"]},
		{"name":"N7 Demolisher","hp":500.0,"shields":600.0,"melee":300.0,"hmelee":550.0,"mmod":[1.5,1.5,1.5],"enc":0.3,"skills":["Supply Pylon","Arc Grenade (Earth)","Homing Grenade","N7 Demolisher","Fitness (Ex-C)"]},
		{"name":"Volus","hp":150,"shields":500,"melee":0,"hmelee": 150,"enc":0.15,"skills":["Proximity Mine","Shield Boost","Recon Mine","Volus Training","Fitness (A/Q/S/Vs)"]},
		{"name":"Vorcha Hunter","hp":750,"shields":250,"melee":250,"hmelee":600,"enc":0.40,"skills":["Bloodlust","Incinerate","Submission Net","Vorcha Resilience","Fitness (QM/V)"]},
		{"name":"Turian Saboteur","hp":500,"shields":750,"melee":200,"hmelee":600,"enc":0.30,"skills":["Sabotage","Sentry Turret","Homing Grenade","Turian Veteran","Fitness (TH/TGI)"]},
		{"name":"Talon Mercenary","hp":500,"shields":500,"melee":200,"hmelee":675,"enc":0.30,"skills":["Cain Trip Mine","Concussive Arrows","Armor-Piercing Arrows","Elite Mercenary","Omni-Bow Mastery"]}]},
	{"name":"Sentinel","races":[
		{"name":"Human","hp":500,"shields":500,"melee":150,"hmelee":600,"enc":0.30,"skills":["Tech Armor","Warp","Throw","Alliance Training","Fitness (H)"]},
		{"name":"Turian","hp":500,"shields":750,"melee":200,"hmelee":675,"enc":0.50,"skills":["Tech Armor","Warp","Overload","Turian Veteran","Fitness (B/T)"]},
		{"name":"Krogan","hp":750,"shields":1000,"melee":300,"hmelee":700,"enc":0.60,"skills":["Tech Armor","Incinerate","Lift Grenade","Krogan Berserker","Rage"]},
		{"name":"Batarian","hp":750,"shields":750,"melee":190,"hmelee":1000,"enc":0.45,"skills":["Blade Armor","Shockwave","Submission Net","Batarian Enforcer","Fitness (B/T)"]},
		{"name":"Vorcha","hp":750,"shields":250,"melee":250,"hmelee":600,"enc":0.30,"skills":["Bloodlust","Flamer","Cluster Grenade","Vorcha Resilience","Fitness (QM/V)"]},
		{"name":"N7 Paladin","hp":500.0,"shields":750.0,"melee":150.0,"hmelee":400,"enc":0.3,"skills":["Energy Drain","Incinerate","Snap Freeze","N7 Paladin/Fury","Shield Mastery"]},
		{"name":"Volus Mercenary","hp":150,"shields":500,"melee":0,"hmelee":150,"enc":0.3,"skills":["Decoy","Combat Drone","Shield Boost","Volus Training","Fitness (A/Q/S/Vs)"]},
		{"name":"Asari Valkyrie","hp":500,"shields":500,"melee":150,"hmelee":500,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Tech Armor","Annihilation Field","Warp","Asari Adept","Fitness (A/Q/S/Vs)"]},
		{"name":"Krogan Warlord","hp":1000,"shields":1250,"melee":360,"hmelee":675,"mmod":[1,1,0.75],"enc":0.30,"skills":["Tech Armor","Biotic Hammer","Electrical Hammer","Krogan Warlord","Warlord Rage"]}]},
	{"name":"Infiltrator","races":[
		{"name":"Human","hp":500,"shields":500,"melee":150,"hmelee":600,"enc":0.30,"skills":["Tactical Cloak","Cryo Blast","Sticky Grenade","Alliance Training","Fitness (H)"]},
		{"name":"Salarian","hp":500,"shields":600,"melee":150,"hmelee":600,"enc":0.30,"skills":["Tactical Cloak","Proximity Mine","Energy Drain","Salarian Operative","Fitness (A/Q/S/Vs)"]},
		{"name":"Quarian","hp":500,"shields":600,"melee":150,"hmelee":600,"enc":0.30,"skills":["Tactical Cloak","Sticky Grenade","Sabotage","Quarian Defender","Fitness (A/Q/S/Vs)"]},
		{"name":"Geth","hp":250,"shields":750,"melee":200,"hmelee":375,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Tactical Cloak","Proximity Mine","Hunter Mode","Networked AI","Advanced Hardware"]},
		{"name":"Quarian Male","hp":500,"shields":600,"melee":150,"hmelee":600,"enc":0.30,"skills":["Tactical Cloak","Tactical Scan","Arc Grenade","Quarian Defender (M)","Fitness (QM/V)"]},
		{"name":"N7 Shadow","hp":500.0,"shields":500.0,"melee":250,"hmelee":700.0,"mmod":[1,1,1],"enc":0.3,"skills":["Tactical Cloak","Electric Slash","Shadow Strike","N7 Shadow","Sword Mastery"]},
		{"name":"Turian Ghost","hp":500,"shields":750,"melee":200,"hmelee":600,"enc":0.30,"skills":["Overload","Tactical Cloak (TGI)","Stimulant Pack","Armiger Legion","Fitness (TH/TGI)"]},
		{"name":"Asari Huntress","hp":500,"shields":500,"melee":150,"hmelee": 500,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Tactical Cloak (AHI)","Dark Channel","Warp","Asari Adept","Fitness (A/Q/S/Vs)"]},
		{"name":"Drell Assassin","hp":500,"shields":250,"melee":225,"hmelee":600,"enc":0.60,"skills":["Tactical Cloak","Homing Grenade","Recon Mine","Drell Assassin","Fitness (D)"]},
		{"name":"Alliance Infiltration Unit","hp":500,"shields":750,"melee":350,"hmelee":650,"mmod":[1,1,0.75],"enc":0.30,"skills":["Tactical Cloak (AIU)","Repair Matrix","Snap Freeze","Unshackled AI","Fitness Module"]}]},
	{"name":"Vanguard","races":[
		{"name":"Human","hp":500,"shields":500,"melee":150,"hmelee":500,"enc":0.30,"skills":["Biotic Charge","Shockwave","Nova","Alliance Training","Fitness (H)"]},
		{"name":"Drell","hp":500,"shields":250,"melee":225,"hmelee":600,"enc":0.60,"skills":["Biotic Charge","Pull","Cluster Grenade","Drell Assassin","Fitness (D)"]},
		{"name":"Asari","hp":500,"shields":500,"melee":150,"hmelee":500,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Biotic Charge","Stasis","Lift Grenade","Asari Adept","Fitness (A/Q/S/Vs)"]},
		{"name":"Krogan Battlemaster","hp":1000,"shields":1000,"melee":300,"hmelee":700,"enc":0.50,"skills":["Biotic Charge (K)","Carnage","Barrier","Krogan BM","Rage"]},
		{"name":"Ex-Cerberus","hp":500,"shields":500,"melee":400,"hmelee":350,"mmod":[1.5,1.5,1.5],"enc":0.30,"skills":["Biotic Charge","Smash","Lash","Phoenix Training","Fitness (Ex-C)"]},
		{"name":"N7 Slayer","hp":500.0,"shields":500.0,"melee":250.0,"hmelee":700.0,"mmod":[1,1,1],"enc":0.3,"skills":["Biotic Charge","Phase Disruptor","Biotic Slash","N7 Slayer","Fitness (Ex-C)"]},
		{"name":"Volus Protector","hp":150,"shields":500,"melee":0,"hmelee":150,"enc":0.15,"skills":["Biotic Charge","Biotic Orbs","Shield Boost","Volus Training","Fitness (A/Q/S/Vs)"]},
		{"name":"Batarian Brawler","hp":750,"shields":750,"melee":190,"hmelee":1000,"enc":0.30,"skills":["Biotic Charge","Blade Armor","Lash","Batarian Enforcer","Fitness (B/T)"]},
		{"name":"Cabal","hp":500,"shields":750,"melee":250,"hmelee":750,"enc":0.30,"skills":["Poison Strike","Nightshade Blades","Biotic Focus","Turian Veteran","Venom Gauntlets"]}]}];
