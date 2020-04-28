




/*
     FILE ARCHIVED ON 14:13:55 Jun 27, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:26:26 Nov 12, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
	Format of skills array in pseudo-BNF:
	All values are decimal, e.g. 100% => 1.0
	'array of' means a JSON array, see /web/20130627141355/http://json.org
	skills = array of SKILL
	SKILL = {"name":$name_of_skill,"desc":$description_of_skill,"evos":array[9] of EVO}
	EVO = {"name":$name_of_evo,"effects":array of EFFECT}
	EFFECT = {"type":"Power","attributes":array of ATTRIBUTE}
		| {"type":"Special","details":$special_description_text}
		| {"type":"Power+","attribute":"Special","details":$ability_special_description_text}
		| {"type":"Power+","attribute":$power_attribute,"mult":$attribute_multiplier}
		| {"type":"Power*","attribute":ATTRIBUTE}
		| {"type":"Weapon Weight Reduction","mult":$weapon_weight_reduction_value,"wclass":$weapon_class}]},
		| {"type":BONUS,"mult":$bonus}
	BONUS = 'Weapon Damage Bonus' | 'Health & Shields Bonus' | 'Weapon Damage Bonus' | 'Power Damage Bonus' | 'Headshot Damage Bonus' | 'Melee Damage Bonus'
	ATTRIBUTE = {"name":$name,"unit":$attribute_unit,"base":$attribute_base_value}
*/

//dmg mod is [shields,barriers,armor]
// /web/20130627141355/http://social.bioware.com/forum/1/topic/343/index/12853150

var skills = [
	/* Core. */
	{"name":"Singularity","desc":"Create a sphere of dark energy that traps and dangles enemies caught in its field.","type":"Biotic","evos":[
		{"name":"Singularity","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Duration","unit":"s","base":8},
			{"name":"Radius","unit":"m","base":1.5},
			{"name":"Damage Per Second","unit":"","base":100}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.20}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":1.50}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.35}]},

		{"name":"Lift Damage","effects":[{"type":"Power*","attribute":{"name":"Lift Damage","unit":"","base":50}}]}, // "Special","details":"Inflict 50 damage per second to lifted targets.'
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.50}]},
		{"name":"Detonate","effects":[
			{"type":"Power+","attribute":"Special","details":"Detonate Singularity when the field dies to inflict damage across 7 meters."},
			{"type":"Power*","attribute":{"name":"Explosion Damage","unit":"","base":500}}]}]},
	{"name":"Biotic Charge","desc":"Smash into a target while encased in this biotic barrier, leveling your oponents.\nInvulnerable while this power is in effect.","type":"Biotic","mod":[1,1.5,1],"evos":[
		{"name":"Biotic Charge","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Damage","unit":"","base":400},
			{"name":"Barrier Restored","unit":"%","base":0.50},
			{"name":"Force","unit":"N","base":650}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.30},{"type":"Power+","attribute":"Damage","mult":0.30}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.40},{"type":"Power+","attribute":"Damage","mult":0.40}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Special","details":"Hit up to 2 additional targets within 2 meters of the impact point."}]},

		{"name":"Weapon Synergy","effects":[{"type":"Power+","attribute":"Special","details":"Increase weapon damage by 25% for 5s after a successful biotic charge."},{"type":"Power*","attribute":{"name":"Weapon Damage Bonus","unit":"%","base":0.25}}]},
		{"name":"Power Synergy","effects":[{"type":"Power+","attribute":"Special","details":"Increase power damage and force by 40% for 10s after a successful biotic charge."},{"type":"Power*","attribute":{"name":"Power Damage Bonus","unit":"%","base":0.40}}]},

		{"name":"Bonus Power","effects":[{"type":"Power+","attribute":"Special","details":"Give biotic charge a 50% chance of not triggering a cooldown."}]},
		{"name":"Barrier","effects":[{"type":"Power+","attribute":"Barrier Restored","mult":0.50}]}]},
	{"name":"Biotic Charge (K)","desc":"Smash into a target while encased in this biotic barrier, leveling your oponents.\nInvulnerable while this power is in effect.","type":"Biotic","mod":[1,1.5,1],"evos":[
		{"name":"Biotic Charge","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":14},
			{"name":"Damage","unit":"","base":500},
			{"name":"Barrier Restored","unit":"%","base":0.50},
			{"name":"Force","unit":"N","base":750}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.30},{"type":"Power+","attribute":"Damage","mult":0.30}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.40},{"type":"Power+","attribute":"Damage","mult":0.40}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Special","details":"Hit up to 2 additional targets within 2 meters of the impact point."}]},

		{"name":"Weapon Synergy","effects":[{"type":"Power+","attribute":"Special","details":"Increase weapon damage by 25% for 5s after a successful biotic charge."},{"type":"Power*","attribute":{"name":"Weapon Damage Bonus","unit":"%","base":0.25}}]},
		{"name":"Melee Synergy","effects":[{"type":"Power+","attribute":"Special","details":"Increase melee damage by 40% for 5 seconds after a successful biotic charge."},{"type":"Power*","attribute":{"name":"Melee Damage Bonus","unit":"%","base":0.40}}]},

		{"name":"Bonus Power","effects":[{"type":"Power+","attribute":"Special","details":"Give biotic charge a 50% chance of not triggering a cooldown."}]},
		{"name":"Barrier","effects":[{"type":"Power+","attribute":"Barrier Restored","mult":0.50}]}]},
	{"name":"Shockwave","desc":"Topple a row of enemies with this cascading shockwave.","type":"Biotic","mod":[1,1.5,1],"evos":[
		{"name":"Shockwave","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":300},
			{"name":"Force","unit":"N","base":700},
			{"name":"Radius","unit":"m","base":2},
			{"name":"Range","unit":"m","base":16}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.25},{"type":"Power+","attribute":"Damage","mult":0.25}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.30},{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Detonate","effects":[{"type":"Power+","attribute":"Special","details":"Increase force and damage of biotic detonations by 65%."}]},
		{"name":"Reach","effects":[{"type":"Power+","attribute":"Range","mult":0.50}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.40}]},
		{"name":"Lifting Shockwave","effects":[{"type":"Power+","attribute":"Special","details":"Suspend targets in the air for a short time."}]}]},
	{"name":"Throw","desc":"Toss your enemy through the air with this biotic blast.","type":"Biotic","evos":[
		{"name":"Throw","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":4},
			{"name":"Force","unit":"N","base":600}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Force","effects":[{"type":"Power+","attribute":"Force","mult":0.30}]},

		{"name":"Force ","effects":[{"type":"Power+","attribute":"Force","mult":0.40}]},
		{"name":"Radius","effects":[{"type":"Power*","attribute":{"name":"Radius","unit":"m","base":2}}]}, // "Special","details":"Increase impact radius by 2 meters."

		{"name":"Detonate","effects":[{"type":"Power+","attribute":"Special","details":"Increase force and damage of biotic detonations by 50%."}]},
		{"name":"Recharge Combo","effects":[{"type":"Power+","attribute":"Special","details":"Reset recharge time after a biotic combo detonates."}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.50},{"type":"Power*","attribute":{"name":"Damage","unit":"","base":200}}/*{"type":"Power+","attribute":"Special","details":"Increase force by 50%, and do an additional 200 damage on impact."}*/]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.60}]}]},
	{"name":"Alliance Training","type":"","evos":[
		{"name":"Alliance Training","effects":[{"type":"Weapon Damage Bonus","mult":0.05},{"type":"Power Damage Bonus","mult":0.05},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.20,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Drell Assassin","type":"","evos":[
		{"name":"Drell Assassin","effects":[{"type":"Weapon Damage Bonus","mult":0.05},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.15},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.20}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.30}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Heavy Pistols"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.125}]}]},
	{"name":"Nova","desc":"Transfer the energy of your biotic barrier to charge and spark this deadly blast.\nBarrier strength determines blast intensity.","type":"Biotic","mod":[1,1.5,1],"evos":[
		{"name":"Nova","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":350},
			{"name":"Force","unit":"N","base":450},
			{"name":"Radius","unit":"m","base":4}]}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.25}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.30},{"type":"Power+","attribute":"Damage","mult":0.30}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.40},{"type":"Power+","attribute":"Damage","mult":0.40}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.40}]},

		{"name":"Power Recharge","effects":[{"type":"Power*","attribute":{"name":"Power Recharge","unit":"%","base":0.25}},{"type":"Power+","attribute":"Special","details":"Increase recharge speed of all powers by 25% for 15 seconds."}]},
		{"name":"Half Blast","effects":[
			{"type":"Power+","attribute":"Special","details":"Gain the option to use nova two times in a row by reducing its barrier consumption by 50% but at the cost of reducing damage and force by 40%."},
			{"type":"Power+","attribute":"Force","mult":-0.40},
			{"type":"Power+","attribute":"Damage","mult":-0.40}]},

		{"name":"Pierce","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[1,1,1]}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to barriers, shields, and armored targets by 100%."}
		{"name":"Sustain","effects":[{"type":"Power+","attribute":"Special","details":"Nova gains a 25% chance of not using up barriers."}]}]},
	{"name":"Fitness (A/Q/S/Vs)","desc":"???","type":"","evos":[
		{"name":"Fitness","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Power Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase power damage bonus by 25% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Power Damage Bonus","mult":0.25}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},
	{"name":"Fitness (B/T)","desc":"???","type":"","evos":[
		{"name":"Fitness","effects":[{"type":"Health & Shields Bonus","mult":0.25},{"type":"Melee Damage Bonus","mult":0.25}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.20}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.
// TODO:
		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase weapon damage bonus by 25% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Weapon Damage Bonus","mult":0.25}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.30}]}]},
	{"name":"Fitness (H)","desc":"???","type":"","evos":[
		{"name":"Fitness","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase weapon damage bonus by 25% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Weapon Damage Bonus","mult":0.25}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},
	{"name":"Fitness (D)","desc":"???","type":"","evos":[
		{"name":"Fitness","effects":[{"type":"Health & Shields Bonus","mult":0.20},{"type":"Melee Damage Bonus","mult":0.15},{"type":"Movement Speed Bonus","mult":0.10}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.20}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase weapon damage bonus by 25% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Weapon Damage Bonus","mult":0.25}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25},{"type":"Movement Speed Bonus","mult":0.10}]}]},
	{"name":"Rage","desc":"Boost health, shields, melee damage, and durability. \nMelee and kill 3 enemies within 30 seconds to send the krogan into a frenzy, increasing melee damage and reducing damage taken for 30 seconds.","type":"","evos":[
		{"name":"Rage","effects":[
			{"type":"Health & Shields Bonus","mult":0.20},
			{"type":"Melee Damage Bonus","mult":0.20},
			{"type":"Power","attributes":[
				{"name":"Damage Reduction","unit":"%","base":0.20},
				{"name":"Melee Damage Bonus","unit":"%","base":0.50}]}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.25}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.20},{"type":"Power+","attribute":"Damage Reduction","mult":0.05}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Pure Rage","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Power+","attribute":"Special","details":"Reduce the number of melee kills required to trigger Rage to 2 within 30 seconds."}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.30},{"type":"Power+","attribute":"Damage Reduction","mult":0.05}]}]},
	{"name":"Adrenaline Rush","desc":"Accelerate reflexes, granting the time to line up the perfect shot.","type":"","evos":[
		{"name":"Adrenaline Rush","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":6},
			{"name":"Duration","unit":"s","base":4},
			{"name":"Weapon Damage Bonus","unit":"%","base":0.50}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Hardening","effects":[{"type":"Power+","attribute":"Special","details":"Decrease Health and Shield damage taken by 40%."}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Weapon Damage Bonus","mult":0.20}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.40}]},
		{"name":"Melee Damage","effects":[{"type":"Power*","attribute":{"name":"Melee Damage Bonus","unit":"%","base":0.50}}]},//Increase melee damage by 50%.

		{"name":"Shield Boost","effects":[{"type":"Power+","attribute":"Special","details":"Increase shield strength by 100%."}]},
		{"name":"Power Use","effects":[{"type":"Power+","attribute":"Special","details":"Use 1 offensive power while Adrenaline Rush is active."}]}]},
	{"name":"Marksman","desc":"Boost weapon accuracy and firing rate for a short time.","type":"Tech","evos":[
		{"name":"Marksman","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":6},
			{"name":"Duration","unit":"s","base":6},
			{"name":"Rate-of-Fire Bonus","unit":"%","base":0.25},
			{"name":"Accuracy Bonus","unit":"%","base":0.35}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Accuracy","effects":[{"type":"Power+","attribute":"Accuracy Bonus","mult":0.15}]},
		{"name":"Firing Rate","effects":[{"type":"Power+","attribute":"Rate-of-Fire Bonus","mult":0.15}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.40}]},
		{"name":"Headshots","effects":[{"type":"Power+","attribute":"Special","details":"Increase headshot damage by 25%."}]},

		{"name":"Accuracy & Firing Rate","effects":[{"type":"Power+","attribute":"Rate-of-Fire Bonus","mult":0.10},{"type":"Power+","attribute":"Accuracy Bonus","mult":0.10}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.40}]}]},
	{"name":"Fortification","desc":"Reinforce armor using protective Foucault currents. Purge the current and send its charge to your gauntlets for increased melee damage. \nSlows power use by 50%.","type":"Biotic","evos":[
		{"name":"Fortification","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":5},
			{"name":"Damage Reduction","unit":"%","base":0.25},
			{"name":"Melee Damage Bonus","unit":"%","base":0.50},
			{"name":"Melee Damage Duration","unit":"s","base":20},
			{"name":"Power Recharge","unit":"%","base":-0.50}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Melee Damage","effects":[{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Durability","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.05}]},
		{"name":"Melee Damage","effects":[{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.30}]},

		{"name":"Recharge Speed","effects":[{"type":"Power*","attribute":{"name":"Shield Recharge Delay Bonus","unit":"%","base":0.15}}]}, // Increase shield recharge rate by 15%.
		{"name":"Power Synergy","effects":[{"type":"Power*","attribute":{"name":"Power Damage Bonus","unit":"%","base":0.30}}]},// {"type":"Power+","attribute":"Special","details":"Increase power damage and force by 20% while Fortification is active."}

		{"name":"Power Recharge","effects":[{"type":"Power+","attribute":"Power Recharge","mult":0.30}]}, // {"type":"Power+","attribute":"Special","details":"Reduce power speed penalty by 30%."}
		{"name":"Durability","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]}]},
	{"name":"Concussive Shot","desc":"Flatten your enemy with a precise blast at short or long range.\nEffective against barriers.","type":"Tech","mod":[1,4,1],"evos":[
		{"name":"Concussive Shot","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":5},
			{"name":"Damage","unit":"","base":200},
			{"name":"Force","unit":"N","base":300}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.20},{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.30},{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power*","attribute":{"name":"Radius","unit":"m","base":1.5}}]}, // "Special","details":"Increase impact radius by 1.5 meters."

		{"name":"Shatter","effects":[{"type":"Power+","attribute":"Special","details":"Increase force and damage to frozen targets by 100%."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Hammer","effects":[{"type":"Power+","attribute":"Damage","mult":0.50},{"type":"Power+","attribute":"Special","details":"Increase impact radius by 1 meter."}]},
		{"name":"Shredder","effects":[{"type":"Power+","attribute":"Force","mult":0.50},{"type":"Power+","attribute":"Special","details":"Increase damage to organics by 200% over 10 seconds."}]}]},
	{"name":"Carnage","desc":"Rip a target into shreds with this vicious blast.\nMajor collateral damage to enemies nearby. Effective against armor.","type":"Tech","mod":[0.5,0.5,1.5],"evos":[
		{"name":"Carnage","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Damage","unit":"","base":350},
			{"name":"Radius","unit":"m","base":1}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.50}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},

		{"name":"Incapacitate","effects":[{"type":"Power+","attribute":"Special","details":"Incapacitate enemies by knocking them down."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.65]}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to armored units by 65%."}
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.50}]}]},
	{"name":"Incinerate","desc":"Burn your enemies and incinerate their armor.\nHeavy damage to health and armor. Make an enemy panic, stopping health regeneration.","type":"Tech","mod":[0.5,0.5,1.5],"evos":[
		{"name":"Incinerate","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":330}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power*","attribute":{"name":"Impact Radius","unit":"m","base":1.5}}]}, // "Special","details":"Increase impact radius by 1.5 meters."

		{"name":"Burning Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage by an additional 50% over 8 seconds."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},

		{"name":"Freeze Combo","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage to frozen and chilled targets by an additional 100%."}]},
		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.5]}]}]},// {"type":"Power+","attribute":"Special","details":"Increase damage to armored targets by 50%."}
	{"name":"Cryo Blast","desc":"Flash-freeze and shatter unprotected enemies. Slow down the rest.\nWeaken armor. Frozen targets won\'t regenerate health.","type":"Tech","evos":[
		{"name":"Cryo Blast","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":5},
			{"name":"Freeze Duration","unit":"s","base":4},
			{"name":"Movement Speed","unit":"%","base":-0.15}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Freeze Duration","mult":0.40}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Freeze Duration","mult":0.60}]},
		{"name":"Radius","effects":[{"type":"Power*","attribute":{"name":"Impact Radius","unit":"m","base":2}}]}, // "Special","details":"Increase impact radius by 2 meters."

		{"name":"Speed Reduction","effects":[{"type":"Power+","attribute":"Movement Speed","mult":-0.30}]},
		{"name":"Cryo Explosion","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage to chilled and frozen targets by 10%."}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":1}]},
		{"name":"Frozen Vulnerability","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage to frozen and chilled targets by 15%. Weaken armored targets by an additional 25%."}]}]},
	{"name":"Overload","desc":"Overload electronics with this power surge, stunning your enemy.\nEffective against shields, barriers and synthetics. Not as effective against organics.","type":"Tech","mod":[3,3,1],"evos":[
		{"name":"Overload","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":220}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Chain Overload","effects":[{"type":"Power+","attribute":"Special","details":"Hit up to one additional target within 8 meters with 60% less damage."}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},

		{"name":"Neural Shock","effects":[{"type":"Power+","attribute":"Special","details":"Incapacitate weaker organic enemies for a short duration."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},

		{"name":"Chain Overload","effects":[{"type":"Power+","attribute":"Damage","mult":0.15},{"type":"Power+","attribute":"Special","details":"Hit up to one additional target within 8 meters with 60% less damage."}]},
		{"name":"Shield Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[1,1,0]}]}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to barriers and shields by an additional 100%."}
	{"name":"Frag Grenade","desc":"Rip your enemies apart with this shrapnel-packed grenade.","type":"Tech","evos":[
		{"name":"Frag Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":900},
			{"name":"Radius","unit":"m","base":6.5}]}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":2.00}]},
		{"name":"Bleed Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage to organics by 50% over 5 seconds."}]},

		{"name":"Armor-Piercing","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.75]}]},// Increase damage to armor by 75%.
		{"name":"Shield Overload","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.75,0,0]}]}]},// Increase damage to shields by 75%.
	{"name":"Lift Grenade","desc":"Lob this grenade into a group of enemies to send them flying. \nDeal high damage.","type":"Biotic","mod":[1,1.5,1],"evos":[
		{"name":"Lift Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":900},
			{"name":"Radius","unit":"m","base":5},
			{"name":"Duration","unit":"","base":4}]}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":2.00}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.50}]},

		{"name":"Slam","effects":[{"type":"Power+","attribute":"Special","details":"Slam floating targets to the ground as Lift wears off, stunning them for 3 seconds."}]},
		{"name":"Damage & Radius","effects":[{"type":"Power+","attribute":"Damage","mult":0.30},{"type":"Power+","attribute":"Radius","mult":0.30}]}]},
	{"name":"Cluster Grenade","desc":"Lob this biotic grenade at enemies and watch them fly.","type":"Biotic","mod":[1,1.5,1],"evos":[
		{"name":"Cluster Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":500},
			{"name":"Force","unit":"N","base":1000},
			{"name":"Radius","unit":"m","base":4}]}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.20},{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.30},{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.35}]},

		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":2.00}]},
		{"name":"Damage Combo","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage to already lifted targets by 100%."}]},

		{"name":"Shrapnel","effects":[{"type":"Power+","attribute":"Special","details":"Increase shrapnel count by 1."}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.50},{"type":"Power+","attribute":"Damage","mult":0.50}]}]},
	{"name":"Sticky Grenade","desc":"Stick this grenade to your oponent and the explosion will tear apart the target and the shrapnel will damage other targets caught in the blast.","type":"Tech","evos":[
		{"name":"Sticky Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":1100},
			{"name":"Radius","unit":"m","base":2}]}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":3.00}]},
		{"name":"Armor-Piercing","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.50]}]},// Increase damage to armored units by 50%.

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.40}]},
		{"name":"Proximity Trap","effects":[{"type":"Power+","attribute":"Special","details":"Grenades stay active for 15 seconds when attached to a wall or surface, exploding when an enemy approaches."},{"type":"Power+","attribute":"Radius","mult":0.50}]}]},
	{"name":"Inferno Grenade","desc":"Cluster-bomb a small area with incendiary munitions.","type":"Tech","mod":[1,1,1.5],"evos":[
		{"name":"Inferno Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage Per Second","unit":"","base":150},
			{"name":"Duration","unit":"s","base":8},
			{"name":"Radius","unit":"m","base":5}]}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":2.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.40}]},

		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.5]}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to armor by 50%."}
		{"name":"Radius & Shrapnel","effects":[{"type":"Power+","attribute":"Special","details":"Increase Shrapnel by 1 fragment."},{"type":"Power+","attribute":"Radius","mult":0.50}]}]},
	{"name":"Proximity Mine","desc":"Fire this sticky mine into traffic. It will detonate when an enemy steps within range.","type":"Tech","evos":[
		{"name":"Proximity Mine","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Damage","unit":"","base":400},
			{"name":"Radius","unit":"m","base":3}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.50}]},

		{"name":"Damage Taken","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage dealt to target from all sources by 20% for 8 seconds."}]},
		{"name":"Slow","effects":[{"type":"Power+","attribute":"Special","details":"Slow target's movement speed by 30% for 8 seconds."}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.50}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.40}]}]},
	{"name":"Tactical Cloak","desc":"Become invisible.\nGain a massive damage boost when breaking from cloak to attack.","type":"Tech","evos":[
		{"name":"Tactical Cloak","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Duration","unit":"s","base":4},
			{"name":"Damage Bonus","unit":"%","base":0.40}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":1.50}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.40}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.30}]},
		{"name":"Melee Damage","effects":[{"type":"Power*","attribute":{"name":"Melee Damage Bonus","unit":"%","base":0.50}}]}, // {"type":"Power+","attribute":"Special","details":"Increase melee damage by 50% while cloaked."}

		{"name":"Bonus Power","effects":[{"type":"Power+","attribute":"Special","details":"Fire one power while cloaked and remain hidden."}]},
		{"name":"Sniper Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase sniper rifle damage by 25% while cloaked."}]}]},
	{"name":"Stasis","desc":"Stop an enemy in its tracks with this powerful mass effect field. No effect on armored targets.\nEnemies eventually break out of stasis after taking major damage.","type":"Biotic","evos":[
		{"name":"Stasis","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Duration","unit":"s","base":6}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.40}]},
		{"name":"Stasis Strength","effects":[{"type":"Power+","attribute":"Special","details":"Deal 150% more damage to targets before Stasis breaks."}]},

		{"name":"Bonus Power","effects":[{"type":"Power+","attribute":"Special","details":"Use two powers in a row by giving the first power a 30% chance to cause no cooldown."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Bubble","effects":[{"type":"Power+","attribute":"Special","details":"Unleash a Stasis bubble to trap enemies that walk into it."}]},
		{"name":"Vulnerability","effects":[{"type":"Power+","attribute":"Special","details":"Increase all damage done to target by 50%.	Deal 35% more damage to targets before Stasis breaks."}]}]},
	{"name":"Energy Drain","desc":"Hit an enemy with this energy pulse to inflict damage and to steal barrier and shield power.","type":"Tech","mod":[3,3,0.5],"evos":[
		{"name":"Energy Drain","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":220},
			{"name":"Radius","unit":"m","base":1.5},
			{"name":"Shields Restored","unit":"%","base":0.50}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":1.00}]},

		{"name":"Drain","effects":[{"type":"Power+","attribute":"Special","details":"Increase shield restoration rate by 50% when draining shields, barriers, or power from synthetic enemies."},{"type":"Power+","attribute":"Shields Restored","mult":0.50}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.40}]},
		{"name":"Armor Boost","effects":[{"type":"Power+","attribute":"Special","details":"Reduce damage taken by 40% for 10 seconds by gaining a temporary layer of armor by draining shields, barriers, or energy from synthetics."}]}]},
	{"name":"Tech Armor","desc":"Protect yourself with this holographic armor or detonate it to damage nearby enemies.\nSlows power use.","type":"Tech","mod":[1,1.5,1],"evos":[
		{"name":"Tech Armor","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":6},
			{"name":"Damage Reduction","unit":"%","base":0.35},
			{"name":"Explosion Damage","unit":"","base":400},
			{"name":"Explosion Radius","unit":"m","base":3},
			{"name":"Power Recharge","unit":"%","base":-0.50}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage & Radius","effects":[{"type":"Power+","attribute":"Explosion Damage","mult":0.20},{"type":"Power+","attribute":"Explosion Radius","mult":0.20}]},

		{"name":"Damage & Radius","effects":[{"type":"Power+","attribute":"Explosion Damage","mult":0.30},{"type":"Power+","attribute":"Explosion Radius","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.05}]},

		{"name":"Power Damage","effects":[{"type":"Power*","attribute":{"name":"Power Damage Bonus","unit":"%","base":0.30}}]}, // {"type":"Power+","attribute":"Special","details":"Increase power damage and force by 30% while armor is active."}
		{"name":"Melee Damage","effects":[{"type":"Power*","attribute":{"name":"Melee Damage Bonus","unit":"%","base":0.40}}]}, // {"type":"Power+","attribute":"Special","details":"Increase melee damage 40% while armor is active."}

		{"name":"Power Recharge","effects":[{"type":"Power+","attribute":"Power Recharge","mult":0.30}]}, // {"type":"Power+","attribute":"Special","details":"Reduce power speed penalty by 30%."}
		{"name":"Durability","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]}]},
	{"name":"Reave (DA)","desc":"Drain a target's health and disrupt their resistances, receiving increased damage protection while this power is in effect.","type":"Biotic","mod":[0.5,2,1.5],"evos":[
		{"name":"Reave","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage Per Second","unit":"","base":70},
			{"name":"Duration","unit":"s","base":4},
			{"name":"Damage Reduction","unit":"%","base":0.15}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.35}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.40}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Special","details":"Increase impact radius by 3 meters."}]},

		{"name":"Damage Reduction","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Barriers & Armor","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0.75,0.75]}]},
		{"name":"Damage & Duration","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.30},{"type":"Power+","attribute":"Duration","mult":0.30},{"type":"Power+","attribute":"Damage Reduction","mult":0.15}]}]},
	{"name":"Reave (AJA)","desc":"Drain a target's health and disrupt their resistances, receiving increased damage protection while this power is in effect.","type":"Biotic","mod":[0.5,2,1.5],"evos":[
		{"name":"Reave","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage Per Second","unit":"","base":100},
			{"name":"Duration","unit":"s","base":4},
			{"name":"Damage Reduction","unit":"%","base":0.15}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.35}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.40}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Special","details":"Increase impact radius by 3 meters."}]},

		{"name":"Damage Reduction","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Barriers & Armor","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0.75,0.75]}]},
		{"name":"Damage & Duration","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.30},{"type":"Power+","attribute":"Duration","mult":0.30},{"type":"Power+","attribute":"Damage Reduction","mult":0.15}]}]},
	{"name":"Warp","desc":"Rip your enemy apart at a molecular level.\nStop targeted enemy from regenerating health. Weaken armor.","type":"Biotic","mod":[0.5,2,1.5],"evos":[ // TODO: UNCLEAR
		{"name":"Warp","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":250},
			{"name":"Duration","unit":"s","base":10}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Detonate","effects":[{"type":"Power+","attribute":"Special","details":"Increase force, damage and impact radius of combo detonations by 50%."}]},

		{"name":"Lasting Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.40},{"type":"Power+","attribute":"Duration","mult":0.60}]},
		{"name":"Expose","effects":[{"type":"Power+","attribute":"Special","details":"Increase weapon damage taken by a target by 15%. Increase power damage taken by a target by 15% for 10 seconds."}]},

		{"name":"Pierce","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0.5,0.5]},{"type":"Power+","attribute":"Special","details":"Weaken armored targets by an additional 25%"}]},// {"type":"Power+","attribute":"Special","details":"Increase damage to barriers and armor by 50%. Weaken armored targets by an additional 25%"}
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]}]},
	{"name":"Combat Drone","desc":"Deploy this attack drone to stun targets and draw enemy fire.","type":"Tech","evos":[
		{"name":"Combat Drone","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":5},
			{"name":"Drone Damage","unit":"","base":40},
			{"name":"Drone Shields","unit":"","base":500}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Shields & Damage","effects":[
			{"type":"Power+","attribute":"Rocket Damage","mult":0.30},
			{"type":"Power+","attribute":"Explosion Damage","mult":0.30},
			{"type":"Power+","attribute":"Drone Damage","mult":0.30},
			{"type":"Power+","attribute":"Drone Shields","mult":0.30}]},

		{"name":"Shields & Damage","effects":[
			{"type":"Power+","attribute":"Rocket Damage","mult":0.40},
			{"type":"Power+","attribute":"Explosion Damage","mult":0.40},
			{"type":"Power+","attribute":"Drone Damage","mult":0.40},
			{"type":"Power+","attribute":"Drone Shields","mult":0.40}]},
		{"name":"Detonate","effects":[
			{"type":"Power+","attribute":"Special","details":"Drone explodes when destroyed, dealing damage across a 5 meter radius."},
			{"type":"Power*","attribute":{"name":"Explosion Damage","unit":"","base":400}}]},

		{"name":"Shock","effects":[{"type":"Power+","attribute":"Special","details":"Upgrade drone's short-range attack to deal 130 points of damage across a 2.50 meter radius. Drone stuns enemies for a short duration."}]},
		{"name":"Shields & Damage","effects":[
			{"type":"Power+","attribute":"Rocket Damage","mult":0.50},
			{"type":"Power+","attribute":"Explosion Damage","mult":0.50},
			{"type":"Power+","attribute":"Drone Damage","mult":0.50},
			{"type":"Power+","attribute":"Drone Shields","mult":0.50}]},

		{"name":"Rockets","effects":[
			{"type":"Power+","attribute":"Special","details":"Upgrade drone with long-range rockets that deal damage across a 2 meter radius."},
			{"type":"Power*","attribute":{"name":"Rocket Damage","unit":"","base":300}}]},
		{"name":"Chain Lightning","effects":[{"type":"Power+","attribute":"Special","details":"Upgrade drone's electrical pulse to jump and hit 3 additional targets."}]}]},
	{"name":"Decoy","desc":"Distract opponents with this decoy.","type":"Tech","evos":[
		{"name":"Decoy","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Duration","unit":"","base":15},
			{"name":"Decoy Shields","unit":"","base":1000}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.40}]},
		{"name":"Durability","effects":[{"type":"Power+","attribute":"Decoy Shields","mult":0.40}]},

		{"name":"Shock","effects":[{"type":"Power+","attribute":"Special","details":"Shock enemies for 100 points within a 2.50 meter radius of the decoy."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Exploding Decoy","effects":[
			{"type":"Power+","attribute":"Special","details":"Decoy explodes on destruction."},
			{"type":"Power*","attribute":{"name":"Explosion Damage","unit":"","base":300}},
			{"type":"Power*","attribute":{"name":"Explosion Radius","unit":"m","base":4}}/*{"type":"Power+","attribute":"Special","details":"Decoy explodes on destruction, causing 300 damage across 4 meters."}*/]},
		{"name":"Shield & Duration","effects":[{"type":"Power+","attribute":"Decoy Shields","mult":0.50},{"type":"Power+","attribute":"Duration","mult":0.50}]}]},
	{"name":"Sentry Turret","desc":"Deploy this heavy-weapon turret for cover fire. Fires 3-round bursts.","type":"Tech","evos":[
		{"name":"Sentry Turret","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":5},
			{"name":"Turret Damage","unit":"","base":75},
			{"name":"Turret Shields","unit":"","base":1000}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Shields & Damage","effects":[
			{"type":"Power+","attribute":"Turret Damage","mult":0.30},
			{"type":"Power+","attribute":"Rocket Damage","mult":0.30},
			{"type":"Power+","attribute":"Flamethrower Damage","mult":0.30},
			{"type":"Power+","attribute":"Turret Shields","mult":0.30}]},

		{"name":"Shields & Damage","effects":[
			{"type":"Power+","attribute":"Turret Damage","mult":0.40},
			{"type":"Power+","attribute":"Rocket Damage","mult":0.40},
			{"type":"Power+","attribute":"Flamethrower Damage","mult":0.40},
			{"type":"Power+","attribute":"Turret Shields","mult":0.40}]},
		{"name":"Shock","effects":[{"type":"Power+","attribute":"Special","details":"Upgrade turret with shock attack to stun enemies."}]},

		{"name":"Cryo Ammo","effects":[{"type":"Power+","attribute":"Special","details":"Upgrade turret with cryo ammo, giving it a chance to freeze enemies for 3 seconds."}]},
		{"name":"Armor-Piercing Ammo","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,1]}]},

		{"name":"Rockets","effects":[
			{"type":"Power+","attribute":"Special","details":"Upgrade turret with long-range rockets that deal damage across a 2.5 meter radius."},
			{"type":"Power*","attribute":{"name":"Rocket Damage","unit":"","base":300}}]},
		{"name":"Flame-thrower","effects":[ // actually "Flamethrower"
			{"type":"Power+","attribute":"Special","details":"Upgrade turret with a close-range flamethrower."},
			{"type":"Power*","attribute":{"name":"Flamethrower Damage","unit":"","base":65}}]}]},
	{"name":"Pull","desc":"Yank an enemy helplessly off the ground.","type":"Biotic","evos":[
		{"name":"Pull","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":4},
			{"name":"Duration","unit":"s","base":4}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.50}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":1}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Special","details":"Increase impact radius by 2.5 meters."}]},

		{"name":"Lift Damage","effects":[{"type":"Power*","attribute":{"name":"Damage Per Second","unit":"","base":75}}]},
		{"name":"Expose","effects":[{"type":"Power+","attribute":"Special","details":"Increase all damage to targets lifted by Pull by 30%."}]},

		{"name":"Duration & Combos","effects":[{"type":"Power+","attribute":"Duration","mult":0.50},{"type":"Power+","attribute":"Special","details":"Increase the duration by 50%, and increase the force and damage of biotic detonations on affected targets by 75%."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":1.5}]}]},
	{"name":"Sabotage","desc":"Sabotage weapons and hack synthetics. \nCompromised synthetics fight on your side. Affected weapons overheat.","type":"Tech","mod":[2,1,1],"evos":[
		{"name":"Sabotage","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Hack Duration","unit":"s","base":10},
			{"name":"Radius","unit":"m","base":2.50},
			{"name":"Backfire","unit":"","base":250}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Hack Duration","mult":0.50}]},
		{"name":"Backfire","effects":[{"type":"Power+","attribute":"Backfire","mult":0.60}]},

		{"name":"Explosive Hack","effects":[ // {"type":"Power+","attribute":"Special","details":"Synthetics explode when destroyed, dealing 350 points of damage across a 4 meter radius."}
			{"type":"Power+","attribute":"Special","details":"Synthetics explode when destroyed."},
			{"type":"Power*","attribute":{"name":"Explosion Damage","unit":"","base":350}},
			{"type":"Power*","attribute":{"name":"Explosion Radius","unit":"m","base":4}}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Berserk","effects":[{"type":"Power+","attribute":"Special","details":"Hacked synthetics fighting on your side move faster and do 50% more damage."}]},
		{"name":"Tech Vulnerability","effects":[{"type":"Power+","attribute":"Special","details":"Increase all tech power damage done to target by 50% for 10 seconds."}]}]},
	{"name":"Salarian Operative","type":"","evos":[
		{"name":"Salarian Operative","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Sniper Rifles","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Sniper Rifles"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Turian Veteran","type":"","evos":[
		{"name":"Turian Veteran","effects":[{"type":"Weapon Damage Bonus","mult":0.10},{"type":"Weapon Stability Bonus","mult":0.20},{"type":"Weight Capacity Bonus","mult":0.15}]},
		{"name":"Weapon Stability","effects":[{"type":"Weapon Stability Bonus","mult":0.15}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Damage & Stability","effects":[{"type":"Weapon Damage Bonus","mult":0.10},{"type":"Weapon Stability Bonus","mult":0.10}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.15},{"type":"Weight Capacity Bonus","mult":0.25}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.20}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.30}]},

		{"name":"Assault Rifles","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Assault Rifles"}]},
		{"name":"Damage & Stability","effects":[{"type":"Weapon Damage Bonus","mult":0.125},{"type":"Weapon Stability Bonus","mult":0.10}]}]},
	{"name":"Quarian Defender","type":"","evos":[
		{"name":"Quarian Defender","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"SMGs","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"SMGs"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Krogan Berserker","type":"","evos":[
		{"name":"Krogan Berserker","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.025},{"type":"Weight Capacity Bonus","mult":0.20}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.05},{"type":"Weight Capacity Bonus","mult":0.30}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Shotguns","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Shotguns"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Asari Adept","type":"","evos":[ // actually "Asari Justicar",but doesn't make much sense and it's different to the Asari Justicar Adept skill class anyway.
		{"name":"Asari Justicar","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Pistols","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Heavy Pistols"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	/* Resurgence. */
	{"name":"Asari Justicar","type":"","evos":[
		{"name":"Asari Justicar","effects":[{"type":"Weapon Damage Bonus","mult":0.05},{"type":"Power Duration Bonus","mult":0.15},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Power Damage","effects":[{"type":"Power Duration Bonus","mult":0.20}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Duration Bonus","mult":0.25},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Assault Rifles","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Assault Rifles"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Advanced Hardware","desc":"","type":"","evos":[
		{"name":"Advanced Hardware","effects":[
			{"type":"Health & Shields Bonus","mult":0.15},
			{"type":"Melee Damage Bonus","mult":0.15},
			{"type":"Shield Recharge Delay Bonus","mult":0.1}]}, // "Decrease shield recharge delay by 10%."
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Power Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase power damage bonus by 30% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Power Damage Bonus","mult":0.30}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},
	{"name":"Ballistic Blades","desc":"Fire a salvo of blades to impale your enemies, inflicting massive bleed damage.\nThe closer your target is, the more damage you deal.","type":"Tech","evos":[
		{"name":"Ballistic Blades","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":900},
			{"name":"Duration","unit":"s","base":10},
			{"name":"Radius","unit":"m","base":12}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Cone Spread","effects":[{"type":"Power+","attribute":"Special","details":"Increase cone spread by 20 degrees."}]},

		{"name":"Range","effects":[{"type":"Power+","attribute":"Radius","mult":0.50}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Damage & Bleed","effects":[{"type":"Power+","attribute":"Damage","mult":0.50},{"type":"Power+","attribute":"Duration","mult":0.50}]},
		{"name":"Explosive Blades","effects":[
			{"type":"Power+","attribute":"Special","details":"Blades explode after 3 seconds, doing damage but ending the bleed effect."},
			{"type":"Power*","attribute":{"name":"Explosion Damage","unit":"","base":400}}]}]},
	{"name":"Barrier","desc":"Reinforce armor with this biotic field. Detonate the field to lift and dangle nearby enemies. Reduce all forms of damage taken.\nSlows power use by 60%.","type":"Biotic","mod":[1,1.5,1],"evos":[
		{"name":"Barrier","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Damage Reduction","unit":"%","base":0.25},
			{"name":"Blast Damage","unit":"","base":500},
			{"name":"Blast Radius","unit":"m","base":3},
			{"name":"Power Recharge","unit":"%","base":-0.50}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25},{"type":"Power+","attribute":"Blast Damage","mult":0.30},{"type":"Power+","attribute":"Blast Radius","mult":0.30}]},
		{"name":"Blast Effect","effects":[{"type":"Power+","attribute":"Blast Damage","mult":0.20},{"type":"Power+","attribute":"Blast Radius","mult":0.20}]},

		{"name":"Blast Effect","effects":[{"type":"Power+","attribute":"Blast Damage","mult":0.30},{"type":"Power+","attribute":"Blast Radius","mult":0.30}]},
		{"name":"Barrier Strength","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.05}]},

		{"name":"Shield Recharge","effects":[{"type":"Power*","attribute":{"name":"Shield Recharge Delay Bonus","unit":"%","base":0.15}}]}, // Increase shield recharge rate by 15% while Barrier is active.
		{"name":"Power Synergy","effects":[{"type":"Power*","attribute":{"name":"Power Damage Bonus","unit":"%","base":0.30}}]},

		{"name":"Power Recharge","effects":[{"type":"Power+","attribute":"Power Recharge","mult":0.30}]}, // {"type":"Power+","attribute":"Special","details":"Reduce power speed penalty by 30%."}
		{"name":"Barrier Strength","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]}]},
	{"name":"Batarian Enforcer","type":"","evos":[ // todo: fix this
		{"name":"Batarian Enforcer","effects":[
			{"type":"Weapon Damage Bonus","mult":0.025},
			{"type":"Power Damage Bonus","mult":0.075},
			{"type":"Special","details":"Spare Ammo Bonus: 10%"},
			//{"name":"Spare Ammo Bonus","unit":"%","base":0.10},
			{"type":"Weight Capacity Bonus","mult":0.15}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075},
			{"type":"Special","details":"Spare Ammo Bonus: +5%"}/*, {"type":"Power+","attribute":"Spare Ammo Bonus","mult":0.05}*/]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.25}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Sniper & Shotguns","effects":[{"type":"Weapon Weight Reduction","mult":0.25,"wclass":["Sniper Rifles","Shotguns"]}]},
		{"name":"Damage & Ammo","effects":[{"type":"Weapon Damage Bonus","mult":0.10},
			{"type":"Special","details":"Spare Ammo Bonus: +10%"}/*, {"type":"Power+","attribute":"Spare Ammo Bonus","mult":0.10}*/]}]},
	{"name":"Biotic Sphere","desc":"Create a defensive shield that surrounds the caster and nearby allies.\nMore damage to enemies entering the shielded area.","type":"Biotic","evos":[
		{"name":"Biotic Sphere","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":6},
			{"name":"Duration","unit":"s","base":30},
			{"name":"Radius","unit":"m","base":3},
			{"name":"Damage Reduction","unit":"%","base":0.20},
			{"name":"Damage Taken Increase","unit":"%","base":0.10}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Shield Regen-eration","effects":[{"type":"Power*","attribute":{"name":"Shield Recharge Delay Bonus","unit":"%","base":0.15}}]}, // actually "Shield Regeneration", Keep allies within the shield to decrease shield-recharge delay by 15%.
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Damage Reduction","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]},
		{"name":"Enemy Weakness","effects":[{"type":"Power+","attribute":"Damage Taken Increase","mult":0.15}]},

		{"name":"Allied Protection","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]},
		{"name":"Warp Effect","effects":[{"type":"Power+","attribute":"Special","details":"Hit enemies inside the shield with Warp, dealing 50 damage per second and reducing armor by 25%.\nAffect up to 3 enemies at a time.\nSet an enemy up for biotic detonation."}]}]},
	{"name":"Blade Armor","desc":"Reinforce Armor with razor-sharp blades that damage enemies that melee.","type":"Tech","evos":[
		{"name":"Blade Armor","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":3},
			{"name":"Damage Reduction","unit":"%","base":0.25},
			{"name":"Melee Damage Bonus","unit":"%","base":0.15},
			{"name":"Melee Damage Returned","unit":"%","base":1},
			{"name":"Power Recharge","unit":"%","base":-0.50}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Melee Damage","effects":[{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.10}]},

		{"name":"Durability","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.05}]},
		{"name":"Melee Damage","effects":[{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.15}]},

		{"name":"Recharge Speed","effects":[{"type":"Power*","attribute":{"name":"Shield Recharge Delay Bonus","unit":"%","base":0.15}}]}, // Increase shield recharge rate by 15%.
		{"name":"Damage Returned","effects":[{"type":"Power+","attribute":"Melee Damage Returned","mult":1.50}]},

		{"name":"Power Recharge","effects":[{"type":"Power+","attribute":"Power Recharge","mult":0.30}]}, // {"type":"Power+","attribute":"Special","details":"Reduce power speed penalty by 30%."}
		{"name":"Durability","effects":[{"type":"Power+","attribute":"Damage Reduction","mult":0.10}]}]},
	{"name":"Geth Turret","desc":"Deploy this heavy-weapon turret for cover fire.","type":"Tech","evos":[
		{"name":"Geth Turret","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":5},
			{"name":"Turret Damage","unit":"","base":150},
			{"name":"Turret Shields","unit":"","base":1000},
			{"name":"Allied Shields Restored","unit":"","base":350}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Shields & Damage","effects":[
			{"type":"Power+","attribute":"Turret Damage","mult":0.30},
			{"type":"Power+","attribute":"Flamethrower Damage","mult":0.30},
			{"type":"Power+","attribute":"Turret Shields","mult":0.30}]},

		{"name":"Shields & Damage","effects":[
			{"type":"Power+","attribute":"Turret Damage","mult":0.40},
			{"type":"Power+","attribute":"Flamethrower Damage","mult":0.40},
			{"type":"Power+","attribute":"Turret Shields","mult":0.40}]},
		{"name":"Shield Restore","effects":[{"type":"Power+","attribute":"Allied Shields Restored","mult":0.50}]},

		{"name":"Armor damage","effects":[
			{"type":"Power+","attribute":"Turret Damage","mult":0.30},
			{"type":"Power+","attribute":"Flamethrower Damage","mult":0.30},
			{"type":"Power+","attribute":"Special","mod":[0,0,0.5]}]},//Increase damage done to armor by 50%.
		{"name":"Restore Range","effects":[
			{"type":"Power+","attribute":"Allied Shields Restored","mult":0.50},
			{"type":"Power+","attribute":"Special","details":"Increase the range of this ability by 40%."}]},

		{"name":"Flame-thrower","effects":[
			{"type":"Power+","attribute":"Special","details":"Upgrade with a close-range flamethrower."},
			{"type":"Power*","attribute":{"name":"Flamethrower Damage","unit":"","base":55}}]}, // {"type":"Power+","attribute":"Special","details":"Upgrade with a close-range flamethrower that deals 71.5 points of damage per second."}
		{"name":"Restore Frequency","effects":[{"type":"Power+","attribute":"Special","details":"Increase the frequency of restoring shields by 60%."}]}]},
	{"name":"Hunter Mode","desc":"Advanced diagnostics redirect power into offensive systems, boosting combat capabilities.\nFaster Movement.\nSee through smoke and objects.\nMore weapon, power, and melee damage.\nGreater weapon accuracy.\nShields reduced by 50%","type":"Tech","evos":[
		{"name":"Hunter Mode","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":3},
			{"name":"Enhanced Vision Range","unit":"m","base":15},
			{"name":"Damage Bonus","unit":"%","base":0.05},
			{"name":"Accuracy Bonus","unit":"%","base":0.10},
			{"name":"Movement Speed Bonus","unit":"%","base":0.05},
			{"name":"Shield Bonus","unit":"%","base":-0.5}]}]},
		{"name":"Movement Speed","effects":[{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.05}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.025}]},

		{"name":"Power Recharge","effects":[{"type":"Power*","attribute":{"name":"Power Recharge","unit":"%","base":0.20}},{"type":"Power+","attribute":"Special","details":"Increase recharge speed of all powers by 20% while active."}]},
		{"name":"Weapon Accuracy","effects":[{"type":"Power+","attribute":"Accuracy Bonus","mult":0.15}]},

		{"name":"Power Damage","effects":[{"type":"Power*","attribute":{"name":"Power Damage Bonus","unit":"%","base":0.15}}]}, // {"type":"Power+","attribute":"Special","details":"Increase damage of all powers by 15% while active."}
		{"name":"Rate of Fire","effects":[{"type":"Power+","attribute":"Special","details":"Increase rate of fire of all weapons by 15% while active."}]},

		{"name":"Speed & Vision","effects":[{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.10},{"type":"Power+","attribute":"Enhanced Vision Range","mult":0.60}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.10}]}]},
	{"name":"Krogan BM","desc":"Battle-skills hardened on unforgiving Tuchanka come into play.\nMore power damage. More weapon damage. More strength.","type":"","evos":[ // actually "Krogan Battlemaster"
		{"name":"Krogan Battlemaster","effects":[{"type":"Weapon Damage Bonus","mult":0.05},{"type":"Power Damage Bonus","mult":0.05},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Shotguns","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Shotguns"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Networked AI","desc":"Advanced combat platform fine-tunes powers and weapons, especially geth weapons.\More power damage. More weapon damage. More geth weapon damage. More strength.","type":"","evos":[
		{"name":"Networked AI","effects":[
			{"type":"Weapon Damage Bonus","mult":0.025},
			{"type":"Geth Weapon Damage Bonus","mult":0.05},
			{"type":"Power Damage Bonus","mult":0.05},
			{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"ARs & SRs","effects":[{"type":"Weapon Weight Reduction","mult":0.25,"wclass":["Assault Rifles","Sniper Rifles"]}]}, // actually "Assault Rifles & Sniper Rifles"
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10},{"type":"Geth Weapon Damage Bonus","mult":0.05}]}]},
	{"name":"Submission Net","desc":"Entangle opponents in an electrified net, dealing massive damage to armored targets and incapacitating unarmored targets as they break free. Targets build up resistance to the grappling effects of the net.","type":"Tech","evos":[
		{"name":"Submission Net","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":6},
			{"name":"Grapple Duration","unit":"s","base":6},
			{"name":"Incapacitate Duration","unit":"s","base":4},
			{"name":"Damage","unit":"","base":600}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage & Duration","effects":[{"type":"Power+","attribute":"Damage","mult":0.30},{"type":"Power+","attribute":"Grapple Duration","mult":0.30}]},

		{"name":"Incapacitate","effects":[{"type":"Power+","attribute":"Incapacitate Duration","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.40}]},

		{"name":"Damage & Slow","effects":[{"type":"Power+","attribute":"Special","details":"Slow armored targets by 30% for 10 seconds."},{"type":"Power+","attribute":"Damage","mult":0.40}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.45}]},

		{"name":"Shield & Barrier","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.5,0.5,0]}]},// Increase damage to shields & barriers by 50%.
		{"name":"Electric Field","effects":[
			{"type":"Power+","attribute":"Special","details":"Deal damage across 6 meters every 1.00 seconds."},
			{"type":"Power*","attribute":{"name":"Electric Field Damage","unit":"","base":150}}]}]},

	/* Rebellion DLC */
	{"name":"Smash","desc":"Drive the lash into the ground to cause area-of-effect damage and devastating direct damage.","type":"Biotic","mod":[1.5,1.5,1.5],"evos":[
		{"name":"Smash","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":550},
			{"name":"Range","unit":"m","base":8},
			{"name":"Force","unit":"N","base":450},
			{"name":"Radius","unit":"m","base":1.5}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20},{"type":"Power+","attribute":"Force","mult":0.20}]},

		{"name":"Force & Damage","effects":[
			{"type":"Power+","attribute":"Special","details":"Add a biotic effect to a target that can be detonated."},
			{"type":"Power+","attribute":"Damage","mult":0.30},
			{"type":"Power+","attribute":"Force","mult":0.30}]},
		{"name":"Electrical Damage","effects":[{"type":"Power+","attribute":"Special","details":"Add an electric effect to a target that can be detonated. Increase damage by 50% for an additional 7.5 seconds."}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.40},{"type":"Power+","attribute":"Force","mult":0.40}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.40}]},

		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0.75,0.75]}]}, // Increase effectiveness against armor and barriers by 75%.
		{"name":"Impact Radius","effects":[
			{"type":"Power+","attribute":"Radius","mult":0.50},
			{"type":"Power+","attribute":"Special","details":"Increase the number of targets hit by 1."}]}]},

	{"name":"Lash","desc":"Latch this biotic field onto enemies to jerk them towards you, doing massive damage in the process.","type":"Biotic","evos":[
		{"name":"Lash","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":6},
			{"name":"Damage","unit":"","base":150},
			{"name":"Force","unit":"N","base":1200}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Detonate","effects":[{"type":"Power+","attribute":"Special","details":"Increase force and damage of biotic detonations by 50%."}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},
		{"name":"Damage Over Time","effects":[{"type":"Power+","attribute":"Special","details":"Do an additional 100% damage over 10 seconds."}]},

		{"name":"Fast recharge","effects":[{"type":"Power+","attribute":"Special","details":"Give the power a 35% chance of not causing a cooldown. Increase the time lifted targets can be detonated by 100%."}]},
		{"name":"Shield Penetration","effects":[{"type":"Power+","attribute":"Special","details":"Penetrate through shields and barriers, lifting any target without armor but with reduced force."}]}]},
	{"name":"Phoenix Training","type":"","evos":[
		{"name":"Phoenix Training","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Pistols & Shotguns","effects":[{"type":"Weapon Weight Reduction","mult":0.25,"wclass":["Heavy Pistols","Shotguns"]}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Fitness (Ex-C)","desc":"???","type":"","evos":[
		{"name":"Fitness","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase power damage bonus by 30% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Power Damage Bonus","mult":0.30}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},
	{"name":"Fitness (QM/V)","desc":"???","type":"","evos":[
		{"name":"Fitness","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.20}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase weapon damage bonus by 30% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Weapon Damage Bonus","mult":0.30}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},
	{"name":"Tactical Scan","desc":"Reveal weaknesses in defences, increasing all damage done to target and slowing it's movement speed.\nProvide the entire squad with a tactical readout. Only one scan can be active on a target.","type":"Tech","evos":[
		{"name":"Tactical Scan","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":4},
			{"name":"Duration","unit":"s","base":20},
			{"name":"Damage Taken Bonus","unit":"%","base":0.15},
			{"name":"Movement Speed Penalty","unit":"%","base":0.15}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.50}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Weapon Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase all weapon damage done to the target by 7.5%."}]},
		{"name":"Power Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase all power damage done to the target by 7.5%."}]},

		{"name":"Headshots","effects":[{"type":"Power+","attribute":"Special","details":"Increase all headshot damage by 25%."}]},
		{"name":"Movement Speed","effects":[{"type":"Power+","attribute":"Movement Speed Penalty","mult":0.15},{"type":"Power+","attribute":"Recharge Speed","mult":0.15}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Taken Bonus","mult":0.10}]},
		{"name":"Area Scan","effects":[{"type":"Power+","attribute":"Duration","mult":1.00},{"type":"Power+","attribute":"Special","details":"Momentarily reveal enemies withn 20m of the target with an inital scanning pulse."}]}]},
	{"name":"Arc Grenade","desc":"Stun and electrocute your enemies with an EMP-packed grenade.\nEffective against shields and barriers.","type":"Tech","mod":[2,2,1],"evos":[
		{"name":"Arc Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":400},
			{"name":"Radius","unit":"m","base":8}]}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Bleed Damage","effects":[{"type":"Power+","attribute":"Special","details":"Add an electric effect that does 40% additional damage over 10 seconds."}]},

		{"name":"Armor-Piercing","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.75]}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to armor by 75%."}
		{"name":"Shield Overload","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.75,0,0]}]}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to shields by 75%."}
	{"name":"Quarian Defender (M)","type":"","evos":[
		{"name":"Quarian Defender","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.20,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},
	{"name":"Quarian Defender (MQS)","type":"","evos":[
		{"name":"Quarian Defender","effects":[{"type":"Weapon Damage Bonus","mult":0.075},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.20,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.125}]}]},
	{"name":"Bloodlust","desc":"The vorcha flies into a frenzy, increasing movement speed, health regeneration, and melee damage. Each kill intensifies these effects and can stack up to three times. \nAdditional stacks last for 15 seconds. \nSlows power use by 60% Lasts until deactivated.","type":"","evos":[
		{"name":"Bloodlust Stack 1","effects":[
			{"type":"Power","attributes":[
				{"name":"Recharge Speed","unit":"s","base":4.0},
				{"name":"Duration","unit":"s","base":15.0},
				{"name":"Movement Speed Bonus","unit":"%","base":0.05},
				{"name":"Health Regeneration","unit":"","base":50.0},
				{"name":"Melee Damage Bonus","unit":"%","base":0.10},
				{"name":"Power Recharge","unit":"%","base":-0.60}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Health Regen-eration","effects":[{"type":"Power+","attribute":"Health Regeneration","mult":0.3}]},

		{"name":"Melee Damage","effects":[
			{"type":"Special","details":"Increase melee damage of each stack by 10%."},
			{"type":"Melee Damage Bonus","mult":0.2}]},
		{"name":"Health Regen-eration","effects":[
			{"type":"Special","details":"Increase health regeneration of each stack by 50%."},
			{"type":"Power+","attribute":"Health Regeneration","mult":0.5}]},

		{"name":"Power Damage","effects":[
			{"type":"Special","details":"Increase power damage bonus of each stack by 5%."},
			{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[
			{"type":"Special","details":"Increase weapon damage bonus of each stack by 5%."},
			{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Movement & Melee","effects":[
			{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.1},
			{"type":"Melee Damage Bonus","mult":0.1}]},
		{"name":"Health Regen-eration","effects":[
			{"type":"Special","details":"Increase health regeneration of each stack by an additional 100%."},
			{"type":"Power+","attribute":"Health Regeneration","mult":1.0}]}]},
	{"name":"Flamer","desc":"Fire a powerful short-range flame attack. The flames will persist for a max duration and can be canceled early for a faster recharge.\nHighly effective against armor. ","type":"Tech","mod":[1,1,1.5],"evos":[
		{"name":"Flamer","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8.0},
			{"name":"Damage Per Second","unit":"","base":200.0},
			{"name":"Duration","unit":"s","base":5.0},
			{"name":"Range","unit":"m","base":10.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.2}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.3}]},
		{"name":"Reach","effects":[{"type":"Power+","attribute":"Range","mult":0.5}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.4}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.6}]},
		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.5]}]},// Increase damage to armor by 50%.
		{"name":"Shield Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.5,0.5,0]}]}]},// Increase damage to shields and barriers by 50%.
	{"name":"Vorcha Resilience","desc":"A vorcha's adaptable nature gives them advantages in combat. More power damage. More weapon damage. More strength. ","type":"","evos":[
		{"name":"Vorcha Resilience","effects":[
			{"type":"Weapon Damage Bonus","mult":0.05},
			{"type":"Power Damage Bonus","mult":0.05},
			{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[
			{"type":"Power Damage Bonus","mult":0.1},
			{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.2}]},

		{"name":"Shotguns & Assault Rifles","effects":[{"type":"Weapon Weight Reduction","mult":0.25,"wclass":["Shotguns","Assault Rifles"]}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.1}]}]},
	{"name":"Supply Pylon","desc":"Deploy an immobile pylon that supplies ammo and grenades. A built-in tech generator also increases maximum shields for nearby allies. Only one pylon can be active at a time.","type":null,"evos":[
		{"name":"Supply Pylon","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":30.0},
			{"name":"Ammo Drop Frequency","unit":"s","base":17.5},
			{"name":"Grenade Drop Frequency","unit":"s","base":24.0},
			{"name":"Shield Bonus","unit":"%","base":0.25}, // actually "Max Shield Increase"
			{"name":"Radius","unit":"m","base":4.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Resupply Frequency","effects":[{"type":"Power+","attribute":"Ammo Drop Frequency","mult":0.15},{"type":"Power+","attribute":"Grenade Drop Frequency","mult":0.15}]},

		{"name":"Resupply Frequency","effects":[{"type":"Power+","attribute":"Ammo Drop Frequency","mult":0.25},{"type":"Power+","attribute":"Grenade Drop Frequency","mult":0.25}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.4}]},

		{"name":"Weapon Damage","effects":[{"type":"Power+","attribute":"Special","details":"Upgrade the tech generator to also increase allied weapon damage."},{"type":"Power*","attribute":{"name":"Weapon Damage Bonus","unit":"%","base":0.10}}]}, // Upgrade the tech generator to also increase allied weapon damage by 10%.
		{"name":"Power Damage","effects":[{"type":"Power+","attribute":"Special","details":"Upgrade the tech generator to also increase allied power damage."},{"type":"Power*","attribute":{"name":"Power Damage Bonus","unit":"%","base":0.10}}]}, // Upgrade the tech generator to also increase allied power damage by 10%.

		{"name":"Extra Grenade","effects":[{"type":"Power+","attribute":"Special","details":"Increase the number of grenades generated by 1."}]},
		{"name":"Max Shields","effects":[{"type":"Power+","attribute":"Shield Bonus","mult":0.25}]}]},

	{"name":"Homing Grenade","desc":"Launch this seeking grenade to track down a target, causing a massive explosion on impact.","type":null,"evos":[
		{"name":"Homing Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":800.0},
			{"name":"Radius","unit":"m","base":2.0}]}]},
		{"name":"Capacity","effects":[{"type":"Grenade Capacity","mult":1.0}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.5}]},
		{"name":"Capacity","effects":[{"type":"Grenade Capacity","mult":1.0}]},
		{"name":"Fire Damage","effects":[{"type":"Power+","attribute":"Special","details":"Add a fire effect to targets, dealing 50% additional damaage over 6 seconds."}]},
		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.6]},{"type":"Power+","attribute":"Special","details":"Decrease weapon damage mitigation of armored targets by 50% for 8 seconds."}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to armor by 60%."}
		{"name":"Split Grenade","effects":[{"type":"Power+","attribute":"Special","details":"Split a grenade in half to seek two targets that do 60% damage each."}]}]},

	{"name":"N7 Demolisher","desc":"Combat skills are perfected to an art with N7 training. More power damage, more weapon damage, more strength.","type":null,"evos":[
		{"name":"N7 Demolisher","effects":[
			{"type":"Weapon Damage Bonus","mult":0.025},
			{"type":"Grenade Capacity","mult":1.0}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.1}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Max Grenades","effects":[{"type":"Power Damage Bonus","mult":0.1},{"type":"Grenade Capacity","mult":1.0}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.2}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.2}]},
		{"name":"Weapon Dmg & Max Grenades","effects":[{"type":"Weapon Damage Bonus","mult":0.1},{"type":"Grenade Capacity","mult":1.0}]}]},

	{"name":"Devastator Mode","desc":"Turn into a powerful turret with the T5-V Battlesuit. Increase weapon damage, rate of fire, and magazine size. \nSlows movement speed. Stays active until disabled.","type":null,"evos":[
		{"name":"Devastator Mode","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":3.0},
			{"name":"Weapon Damage Bonus","unit":"%","base":0.1},
			{"name":"Rate-of-Fire Bonus","unit":"%","base":0.10},
			{"name":"Magazine Size Bonus","unit":"%","base":0.15}]}]},
		{"name":"Magazine Size","effects":[{"type":"Power+","attribute":"Magazine Size Bonus","mult":0.05}]},
		{"name":"Damage Bonus","effects":[{"type":"Power+","attribute":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Shield Recharge Delay","effects":[{"type":"Power*","attribute":{"name":"Shield Recharge Delay Bonus","unit":"%","base":0.15}}]}, // Reduce the delay before shields start regenerating by 15%.
		{"name":"Weapon Accuracy","effects":[{"type":"Power+","attribute":"Special","details":"Increase weapon accuracy by 25% while active."}]},

		{"name":"Magazine Size","effects":[{"type":"Power+","attribute":"Magazine Size Bonus","mult":0.15}]},
		{"name":"Rate of Fire","effects":[{"type":"Power+","attribute":"Rate-of-Fire Bonus","mult":0.15}]},

		{"name":"Max Shields","effects":[{"type":"Power+","attribute":"Special","details":"Increase max shields by 40%."},{"type":"Power*","attribute":{"name":"Shield Bonus","unit":"%","base":0.4}}]},
		{"name":"Damage Bonus","effects":[{"type":"Power+","attribute":"Weapon Damage Bonus","mult":0.15}]}]},

	{"name":"Missile Launcher","desc":"Rip a target into shreds with the T5-V's autofiring shoulder cannon. Lock onto a target to launch a stinger missile.\nStays active until disabled.","type":null,"evos":[
		{"name":"Missile Launcher","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":3.0},
			{"name":"Missile Recharge Speed","unit":"s","base":4.0},
			{"name":"Damage","unit":"","base":200.0},
			{"name":"Force","unit":"N","base":200.0},
			{"name":"Radius","unit":"m","base":0.5},
			{"name":"Shield Bonus","unit":"%","base":-0.5}]}]},//{"name":"Shield Penalty","unit":"%","base":0.5}
		{"name":"Refire Time","effects":[{"type":"Power+","attribute":"Missile Recharge Speed","mult":0.1}]},
		{"name":"Missile Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},

		{"name":"Shield Penalty","effects":[{"type":"Power+","attribute":"Shield Bonus","mult":0.40}]},//{"type":"Power+","attribute":"Shield Penalty","mult":-0.40}
		{"name":"Damage & Force","effects":[{"type":"Power+","attribute":"Damage","mult":0.4},{"type":"Power+","attribute":"Force","mult":0.4}]},

		{"name":"Refire Time","effects":[{"type":"Power+","attribute":"Missile Recharge Speed","mult":0.35}]},
		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.5]}]},

		{"name":"Hydra Missiles","effects":[{"type":"Power+","attribute":"Special","details":"Upgrade missile housing to fire 2 extra seeking projectiles. Decreases the payload of each missile by 25%."},{"type":"Power+","attribute":"Force","mult":0.25}]},
		{"name":"Cobra Missiles","effects":[
			{"type":"Power+","attribute":"Damage","mult":1.5},
			{"type":"Power+","attribute":"Force","mult":1.5},
			{"type":"Power+","attribute":"Radius","mult":3}]}]},

	{"name":"Multi-Frag Grenade","desc":"Launch this seeking grenade to track down a target, causing a massive explosion on impact.","type":null,"evos":[
		{"name":"Multi-Frag Grenade","effects":[{"type":"Power","attributes":[
		{"name":"Damage","unit":"","base":350.0},
		{"name":"Force","unit":"N","base":1000.0},
		{"name":"Radius","unit":"m","base":4.0}]}]},
		{"name":"Capacity","effects":[{"type":"Grenade Capacity","mult":1.0}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2},{"type":"Power+","attribute":"Force","mult":0.2}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3},{"type":"Power+","attribute":"Force","mult":0.2}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.35}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":2.0}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.4},{"type":"Power+","attribute":"Force","mult":0.4}]},
		{"name":"Grenade Count","effects":[{"type":"Power+","attribute":"Special","details":"Increase the number of grenades launched by 2."}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.5},{"type":"Power+","attribute":"Force","mult":0.5}]}]},

	{"name":"T5-V Battlesuit","desc":"Upgrade the cutting-edge T5-V Battlesuit. More power damage. More weapon damage. More strength.","type":null,"evos":[
		{"name":"T5-V Battlesuit","effects":[{"type":"Weapon Damage Bonus","mult":0.05},{"type":"Power Damage Bonus","mult":0.05},{"type":"Weight Capacity Bonus","mult":0.1}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.1},{"type":"Weapon Weight Reduction","mult":0.2,"wclass":"all weapons"}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.2}]},
		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.2,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.1}]}]},

	{"name":"T5-V Internal Systems","desc":"Upgrade the T5-V's internal systems to boost health, shields, melee damage, and durability.","type":null,"evos":[
		{"name":"T5-V Internal Systems","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.1}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.2}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.3}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds after an enemy is killed by a heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge & Speed","effects":[
			{"type":"Shield Recharge Delay Bonus","mult":0.15}, // Decrease shield recharge delay by 15%.
			{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.1}]},
		{"name":"Melee Synergy","effects":[{"type":"Special","details":"Increase weapon damage by 25% for 20 seconds after an enemy is killed by a heavy melee."},{"type":"Melee Damage Bonus","mult":0.3},{"type":"Weapon Damage Bonus","mult":0.25}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},

	{"name":"Annihilation Field","desc":"Spin this fiery effect around you to burn nearby enemies. When active, the field can be recast to blast a short-range area and to detonate combos.","type":"Biotic","mod":[1,1.5,1.5],"evos":[
		{"name":"Annihilation Field","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8.0},
			{"name":"Duration","unit":"s","base":45.0},
			{"name":"Damage Per Second","unit":"","base":100.0},
			{"name":"Radius","unit":"m","base":4.0},
			{"name":"Blast Damage","unit":"","base":500.0},
			{"name":"Movement Speed Bonus","unit":"%","base":0.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.2},{"type":"Power+","attribute":"Blast Damage","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.3},{"type":"Power+","attribute":"Blast Damage","mult":0.3}]},
		{"name":"Impact Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.3}]},

		{"name":"Damage Taken","effects":[{"type":"Power+","attribute":"Special","details":"Targets caught in the field take 15% additional damage from all sources."}]},
		{"name":"Movement Speed","effects":[{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.65},{"type":"Power+","attribute":"Blast Damage","mult":0.65}]},
		{"name":"Drain","effects":[{"type":"Power+","attribute":"Duration","mult":1.0},{"type":"Power+","attribute":"Special","details":"Drain 100% of the damage done to enemy shields/barriers to restore your own shields."}]}]},

	{"name":"Dark Channel","desc":"Plague and opponent with a persistent, damaging biotic field. Effect transfers to a second target if the first is killed.\nEffect's length depends on Dark Channel's duration. Only one field may be active at a time.","type":"Biotic","mod":[0.5,2,1.5],"evos":[
		{"name":"Dark Channel","effects":[{"type":"Power","attributes":[
		{"name":"Recharge Speed","unit":"s","base":8.0},
		{"name":"Duration","unit":"s","base":30.0},
		{"name":"Damage Per Second","unit":"","base":75.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.2}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.3}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.4}]},
		{"name":"Slow","effects":[{"type":"Power+","attribute":"Special","details":"Slows target's movement speed by 30%."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.5}]},
		{"name":"Pierce","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0.75,0.75]}]}]},//{"type":"Power+","attribute":"Special","details":"Increase damage to barriers and armor by 75%."}

	{"name":"Snap Freeze","desc":"Flash-freeze unprotected enemies and slow down the rest with a wave of ice damage. Frozen targets don't regenerate health. Weaken armor by 25%.","type":"Tech","evos":[
		{"name":"Snap Freeze","effects":[{"type":"Power","attributes":[
		{"name":"Recharge Speed","unit":"s","base":8.0},
		{"name":"Freeze Duration","unit":"s","base":6.0},
		{"name":"Movement Speed Penalty","unit":"%","base":0.15},
		{"name":"Range","unit":"m","base":10.0},
		{"name":"Damage","unit":"","base":250.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Reach","effects":[{"type":"Power+","attribute":"Range","mult":0.5}]},
		{"name":"Duration and Slow","effects":[{"type":"Power+","attribute":"Freeze Duration","mult":0.5},{"type":"Power+","attribute":"Movement Speed Penalty","mult":0.2}]},
		{"name":"Cryo Explosion","effects":[{"type":"Special","details":"Increase damage to chilled and frozen targets by 10%."}]},
		{"name":"Damage and Weakness","effects":[{"type":"Power+","attribute":"Damage","mult":0.4},{"type":"Special","details":"Weaken armored targets by an additional 25%."}]},
		{"name":"Tech Combo","effects":[{"type":"Special","details":"Increase the damage of tech combos by 100%."},{"type":"Power+","attribute":"Health Regeneration","mult":1.0}]}]},

	{"name":"N7 Paladin/Fury","desc":"Combat skills are perfected to an art with training. More power damage, more weapon damage, more strength.","type":null,"evos":[
		{"name":"N7 Paladin/Fury","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.1},{"type":"Weight Capacity Bonus","mult":0.1}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.1}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.1},{"type":"Weight Capacity Bonus","mult":0.2}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.2}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.2,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.1}]}]},

	{"name":"Shield Mastery","desc":"Combat skills are perfected to an art with N7 training. More power damage, more weapon damage, more strength.","type":null,"evos":[
		{"name":"Shield Mastery","effects":[
			{"type":"Health & Shields Bonus","mult":0.15},
			{"type":"Melee Damage Bonus","mult":0.15},
			{"type":"Special","details":"Base Omni-Shield Health: 3000"}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.1},{"type":"Power+","attribute":"Omni-Shield Health","mult":0.1}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.2}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.3}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Power+","attribute":"Omni-Shield Health","mult":0.15}]},

		{"name":"Shield Durability","effects":[{"type":"Power+","attribute":"Omni-Shield Health","mult":0.5}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Fire Shield","effects":[{"type":"Special","details":"Add a flame effect to your omni-shield. Your shield melees will burn enemies and are highly effective against armor.\nAdds a fire effect to impacted targets that does 50% more damage over 5 seconds."}]},
		{"name":"Cryo Shield","effects":[{"type":"Special","details":"Add a freezing effect to your omni-shield that can chill or freeze enemies. Snap freeze unprotected enemies.\nSlow shielded and armored targets by 30%. Weaken enemy armor by 50% for 5 seconds."}]}]},

	{"name":"Electric Slash","desc":"Unleash a wave of electrical energy from your sword to stun and damage all enemies in a cone.\nHighly effective against shields/barriers. Considered a power attack. Receives damage bonuses from power upgrades.","type":"Tech","mod":[1.5,1.5,1],"evos":[
		{"name":"Electric Slash","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8.0},
			{"name":"Damage","unit":"","base":550.0},
			{"name":"Radius","unit":"m","base":2.0},
			{"name":"Range","unit":"m","base":20.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.3}]},
		{"name":"Detonate","effects":[{"type":"Power+","attribute":"Special","details":"Increase force and damage of tech detonations by 100%."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.4}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.5}]},
		{"name":"Range","effects":[{"type":"Power+","attribute":"Range","mult":0.5}]}]},
	{"name":"Shadow Strike","desc":"Cloak and sneak behind your target to unleash a vicious sword attack. Receives damage bonuses from sword upgrades.\nConsidered a melee attack.","type":"Melee","evos":[
		{"name":"Shadow Strike","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8.0},
			{"name":"Damage","unit":"","base":600.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Damage Protection","effects":[{"type":"Special","details":"Reduce all damage taken by 40% for 5 seconds after decloaking."}]},

		{"name":"Electric Damage","effects":[{"type":"Power+","attribute":"Special","details":"Hit your opponent with an electrical attack that does 40% additional damage over 5 seconds.\nDetonate this effect with other powers."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.5}]},
		{"name":"Shield Drain","effects":[{"type":"Power+","attribute":"Special","details":"Strike shields or barriers to drain their energy to refill your shields. \nIncrease movement speed by 15% for 4 seconds after decloaking."}]}]},
	{"name":"N7 Shadow","desc":"Combat skills are perfected to an art with N7 training. More power damage, more weapon damage, more strength.","type":null,"evos":[
		{"name":"N7 Shadow","effects":[{"type":"Weapon Damage Bonus","mult":0.05},{"type":"Power Damage Bonus","mult":0.05},{"type":"Weight Capacity Bonus","mult":0.1}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.1},{"type":"Weight Capacity Bonus","mult":0.2}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.2}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.2,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.1}]}]},
	{"name":"Sword Mastery","desc":"Boost health, shields, melee damage, durability, and movement speed.","type":null,"evos":[
		{"name":"Sword Mastery","effects":[
			{"type":"Health & Shields Bonus","mult":0.2},
			{"type":"Melee Damage Bonus","mult":0.15},
			{"type":"Movement Speed Bonus","mult":0.1}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Sword Damage","effects":[{"type":"Melee Damage Bonus","mult":0.2}]},

		{"name":"Sword Damage","effects":[{"type":"Melee Damage Bonus","mult":0.3}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.2}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase sword damage by 50% for 20 seconds after an enemy is killed by a sword attack."},{"type":"Melee Damage Bonus","mult":0.50}]},
		{"name":"Shield Recharge & Speed","effects":[
			{"type":"Shield Recharge Delay Bonus","mult":0.10}, // Decrease shield recharge delay by 10%.
			{"type":"Movement Speed Bonus","mult":0.1}]},

		{"name":"Shield Damage","effects":[{"type":"Special","details":"Increase sword damage to shields/barriers by 50%."}]},
		{"name":"Armor Damage","effects":[{"type":"Special","details":"Increase sword damage to armor by 50%."}]}]},
	{"name":"Phase Disruptor","desc":"Focus the energy of your barrier to fire a high-powered beam at a target from afar. Firing the beam consumes 50% of max barriers.","type":"Biotic","evos":[
		{"name":"Phase Disruptor","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":400.0},
			{"name":"Radius","unit":"m","base":4.0},
			{"name":"Barrier Cost","unit":"% ","base":40}]}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.3}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.5}]},

		{"name":"Knockdown","effects":[{"type":"Power+","attribute":"Special","details":"Knock weaker enemies to the ground."}]},
		{"name":"Efficient Blast","effects":[{"type":"Power+","attribute":"Barrier Cost","mult":-0.50}]},

		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.75]}]},// Increase damage to armor by 75%.
		{"name":"Shield Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.75,0.75,0]}]}]},// Increase damage to shields/barriers by 75%.

	{"name":"Biotic Slash","desc":"Charge your sword with biotic energy and slash nearby enemies in a wide swath, flattening unshielded opponents.","type":"Biotic","mod":[1,1.5,1.5],"evos":[
		{"name":"Biotic Slash","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8.0},
			{"name":"Damage","unit":"","base":550.0},
			{"name":"Range","unit":"m","base":20.0},
			{"name":"Radius","unit":"m","base":2.0}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.3}]},

		{"name":"Detonate","effects":[{"type":"Special","details":"Increase the force and damage of biotic\ndetonations by 50%."}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.4}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.5}]},
		{"name":"Range","effects":[{"type":"Power+","attribute":"Range","mult":0.5}]}]},
	{"name":"N7 Slayer","desc":"Combat skills are perfected to an art with N7 training. More power damage, more weapon damage, more strength.","type":null,"evos":[
		{"name":"N7 Slayer","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.1},{"type":"Weight Capacity Bonus","mult":0.1}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.1}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[
			{"type":"Power Damage Bonus","mult":0.1},
			{"type":"Weight Capacity Bonus","mult":0.2}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.2}]},
		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.2,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.1}]}]},
	{"name":"Arc Grenade (Earth)","desc":"Stun and electrocute your enemies with an EMP-packed grenade.\nEffective against shields and barriers.","type":"Tech","evos":[
		{"name":"Arc Grenade","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":400},
			{"name":"Radius","unit":"m","base":6}]}]},
		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Max Grenades","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Bleed Damage","effects":[{"type":"Power+","attribute":"Special","details":"Add an electric effect that does 40% additional damage over 10 seconds."}]},

		{"name":"Armor-Piercing","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.75]}]},// Increase damage to armor by 75%.
		{"name":"Shield Overload","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.75,0,0]}]}]},// Increase damage to shields by 75%.

	// Retaliation DLC
	{"name":"Biotic Orbs","desc":"Summon 3 orbs to float around you use it again to launch an orb at a target, each orb increases your recharge speed by 10%. <strong>Note: Power Recharge is for 3 orbs.</strong>","type":"Biotic","mod":[1,1.5,1.5],"evos":[
		{"name":"Biotic Orbs","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":24},
			{"name":"Damage","unit":"","base":250.0},
			{"name":"Recharge Speed per Orb","unit":"%","base":0.1},
			{"name":"Radius","unit":"m","base":1.5},
			{"name":"Power Recharge","unit":"%","base":0.3}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":1}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.4}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed per Orb","mult":0.05},{"type":"Power+","attribute":"Power Recharge","mult":0.15}]},

		{"name":"Expose","effects":[{"type":"Power+","attribute":"Damage","mult":0.5}]},
		{"name":"Orb Count","effects":[{"type":"Power+","attribute":"Special","details":"Increase number of orbs by 1."}]}]},

	{"name":"Shield Boost","desc":" Repair your shields and those of nearby allies, providing a large initial boost to shields then restoring shields every second for 3 seconds.","type":"Tech","evos":[
		{"name":"Shield Boost","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":12},
			{"name":"Radius","unit":"m","base":5},
			{"name":"Initial Shield Boost","unit":"","base":400},
			{"name":"Shields per Sec","unit":"","base":100},
			{"name":"Restore Duration","unit":"s","base":3}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Shields","effects":[{"type":"Power+","attribute":"Initial Shield Boost","mult":0.30},{"type":"Power+","attribute":"Shields per Sec","mult":0.30}]},

		{"name":"Impact Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.4}]},
		{"name":"Shields","effects":[{"type":"Power+","attribute":"Initial Shield Boost","mult":0.40},{"type":"Power+","attribute":"Shields per Sec","mult":0.40}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},
		{"name":"Regen-eration","effects":[{"type":"Power+","attribute":"Special","details":"Reduce the delay before shields start regenerating by 20% for 12 sec for you and affected allies."}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Restore Duration","mult":1}]},
		{"name":"Protection","effects":[{"type":"Power+","attribute":"Special","details":"Increase shield restoration by 50%, causing you and affected allies to take 50% less damage for 6 seconds."}]}]},

	{"name":"Havoc Strike","desc":"Use the propulsion pack to launch a devastating strike on multiple targets.","type":"Tech","evos":[
		{"name":"Havoc Strike","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Damage","unit":"","base":600},
			{"name":"Force","unit":"N","base":650}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.25},{"type":"Power+","attribute":"Damage","mult":0.25}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.35},{"type":"Power+","attribute":"Damage","mult":0.35}]},
		{"name":"Cooldown","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},

		{"name":"Weapon Synergy","effects":[{"type":"Power+","attribute":"Special","details":"Increase weapon damage by 25% for 5s after a successful charge."},{"type":"Weapon Damage Bonus","mult":0.25}]},
		{"name":"Melee Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase melee damage by 40% for 5 seconds after a successful charge."},{"type":"Melee Damage Bonus","mult":0.40}]},

		{"name":"Force & Damage","effects":[{"type":"Power+","attribute":"Force","mult":0.55},{"type":"Power+","attribute":"Damage","mult":0.55}]},
		{"name":"Incendiary Strikes","effects":[{"type":"Power+","attribute":"Special","details":"Expand the spread of the flame to hit up to 2 additional targets within 3 meters of the impact point."}]}]},

	{"name":"Stimulant Pack","desc":"A specifically designed Ops Survival Pack that temporarily increases suvivability and all damage output.\nA limited number of these packs can be carried.","type":"Tech","evos":[
		{"name":"Stimulant Pack","effects":[{"type":"Power","attributes":[
			{"name":"Max Shields","unit":"","base":1200},
			{"name":"Damage Bonus","unit":"%","base":0.05},
			{"name":"Duration","unit":"s","base":6}]}]},
		{"name":"Pack Capacity","effects":[{"type":"Grenade Capacity","mult":1}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.025}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.05}]},
		{"name":"Max Shields","effects":[{"type":"Power+","attribute":"Max Shields","mult":0.4}]},

		{"name":"Pack Capacity","effects":[{"type":"Grenade Capacity","mult":1}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.50}]},

		{"name":"Weapon Damage","effects":[{"type":"Power*","attribute":{"name":"Weapon Damage Bonus","unit":"%","base":0.08}}]},
		{"name":"Survival","effects":[{"type":"Power+","attribute":"Max Shields","mult":0.6},{"type":"Power*","attribute":{"name":"Melee Damage Bonus","unit":"%","base":0.25}}]}]},


	{"name":"Armiger Legion","type":"","evos":[ // Exactly the same as Turian Vet wtf.
		{"name":"Armiger Legion","effects":[{"type":"Weapon Damage Bonus","mult":0.075},{"type":"Weapon Stability Bonus","mult":0.20},{"type":"Weight Capacity Bonus","mult":0.15}]},
		{"name":"Weapon Stability","effects":[{"type":"Weapon Stability Bonus","mult":0.15}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Damage & Stability","effects":[{"type":"Weapon Damage Bonus","mult":0.075},{"type":"Weapon Stability Bonus","mult":0.10}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.25}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Assault Rifles","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Assault Rifles"}]},
		{"name":"Damage & Stability","effects":[{"type":"Weapon Damage Bonus","mult":0.10},{"type":"Weapon Stability Bonus","mult":0.10}]}]},

	{"name":"Fitness (TH/TGI)","desc":"???","type":"","evos":[
		{"name":"Fitness","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Increase weapon damage bonus by 30% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Weapon Damage Bonus","mult":0.30}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},

	{"name":"Recon Mine","desc":"","type":"Tech","evos":[
		{"name":"Proximity Mine","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":20.7},
			{"name":"Damage","unit":"","base":700},
			{"name":"Explosion Radius","unit":"m","base":6},
			{"name":"Scan Radius","unit":"m","base":8}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Explosion Radius","mult":0.50},{"type":"Power+","attribute":"Scan Radius","mult":0.50}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.40}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.75]}]},// Increase damage to armored targets by 75%.
		{"name":"Invasive Scan","effects":[{"type":"Power+","attribute":"Special","details":"Scanned enemmies take 25% more damage from all sources and move 30% more slowly."}]}]},

	{"name":"Volus Training","type":"","evos":[
		{"name":"Volus Training","effects":[{"type":"Weapon Damage Bonus","mult":0.025},{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Shield Boost","effects":[{"type":"Special","details":"Increase amount of shields restored by shield boosts by 30%."}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.20,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},

	{"name":"Tactical Cloak (TGI)","desc":"Become invisible.\nGain a massive damage boost when breaking from cloak to attack.","type":"Tech","evos":[
		{"name":"Tactical Cloak","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Duration","unit":"s","base":4},
			{"name":"Damage Bonus","unit":"%","base":0.40}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":1.50}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.40}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.30}]},
		{"name":"Melee Damage","effects":[{"type":"Power*","attribute":{"name":"Melee Damage Bonus","unit":"%","base":0.50}}]}, // {"type":"Power+","attribute":"Special","details":"Increase melee damage by 50% while cloaked."}

		{"name":"Bonus Power","effects":[{"type":"Power+","attribute":"Special","details":"Fire one power while cloaked and remain hidden."}]},
		{"name":"Asssault Rifle Damage","effects":[{"type":"Power+","attribute":"Special","details":"When Tactical Cloak is activated, assault rifles do 20% more damage for 10 seconds."}]}]},

	{"name":"Tactical Cloak (AHI)","desc":"Become invisible.\nGain a massive damage boost when breaking from cloak to attack.","type":"Tech","evos":[
		{"name":"Tactical Cloak","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Duration","unit":"s","base":4},
			{"name":"Melee Damage Bonus","unit":"%","base":0.60},
			{"name":"Power Damage Bonus","unit":"%","base":0.60}]}]}, // {"name":"Damage Bonus","unit":"%","base":0.40}
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":1.50}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.60},{"type":"Power+","attribute":"Power Damage Bonus","mult":0.60}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.30}]},
		{"name":"Melee Damage","effects":[{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.50}]}, // {"type":"Power+","attribute":"Special","details":"Increase melee damage by 50% while cloaked."}

		{"name":"Bonus Power","effects":[{"type":"Power+","attribute":"Special","details":"Fire one power while cloaked and remain hidden."}]},
		{"name":"Power Damage","effects":[{"type":"Power+","attribute":"Power Damage Bonus","mult":0.40}]}]}, // {"type":"Power*","attribute":{"name":"Power Damage Bonus","unit":"%","base":0.40}}


// Reckoning DLC
	{"name":"Biotic Hammer","desc":"Charge your hammer with biotic energy, drastically increasing direct damage and force. Your melee attacks will expend these charges. Highly effective against armor and barriers.","mod":[1,1.5,1.5],"type":"Biotic","evos":[
		{"name":"Biotic Hammer","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":18},
			{"name":"Damage Bonus","unit":"","base":750},
			{"name":"Force Bonus","unit":"N","base":500},
			{"name":"Charges","unit":"","base":1}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage & Force","effects":[{"type":"Power+","attribute":"Force Bonus","mult":0.20},{"type":"Power+","attribute":"Damage Bonus","mult":0.20}]},

		{"name":"Damage & Force","effects":[{"type":"Power+","attribute":"Force Bonus","mult":0.40},{"type":"Power+","attribute":"Damage Bonus","mult":0.30}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Biotic Combos","effects":[{"type":"Power+","attribute":"Special","details":"Increase force and damage of biotic detonations by 50%."}]},
		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.5]}]},

		{"name":"Power Hammer","effects":[{"type":"Power+","attribute":"Force Bonus","mult":1},{"type":"Power+","attribute":"Special","details": "Increase the force of impacts by 100%. Impact passes through armor shields, or barriers to knock down humanoid targets."}]},
		{"name":"Number of Charges","effects":[{"type":"Power+","attribute":"Charges","mult":1}]}]},

	{"name":"Electrical Hammer","desc":"Charge your hammer with electric energy, making all hammer impacts do electrical damage in a large area while stunning enemies. Your melee attacks will expend these charges. Highly effective against shields and barriers.","type":"Tech","mod":[3,3,1],"evos":[
		{"name":"Electrical Hammer","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":18},
			{"name":"Damage Bonus","unit":"","base":250},
			{"name":"Impact Radius","unit":"m","base":4},
			{"name":"Charges","unit":"","base":2}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Impact Radius","mult":0.20}]},

		{"name":"Shields & Barrier","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.75,0.75,0]}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Impact Radius","mult":0.40}]},

		{"name":"Fire Damage","effects":[{"type":"Power+","attribute":"Special","details":"Add a fire effect to impacted targets to do 200 damage over 5 seconds."}]},
		{"name":"Chill","effects":[{"type":"Power+","attribute":"Special","details":" Add a chill effect to impacted targets that decreases movement speed by 30% and increases all damage by 20%. This effect lasts 5 seconds."}]},

		{"name":"Radius & Combo","effects":[{"type":"Power+","attribute":"Impact Radius","mult":0.30},{"type":"Power+","attribute":"Special","details":"Increase the damage of tech combo detonations by 65%."}]},
		{"name":"Number of Charges","effects":[{"type":"Power+","attribute":"Charges","mult":1}]}]},

	{"name":"Krogan Warlord","type":"","evos":[
		{"name":"Krogan Warlord","effects":[
			{"type":"Weapon Damage Bonus","mult":0.025},
			{"type":"Power Damage Bonus","mult":0.025},
			{"type":"Weight Capacity Bonus","mult":0.20}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.05},{"type":"Weight Capacity Bonus","mult":0.30}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Assault Rifles","effects":[{"type":"Weapon Weight Reduction","mult":0.30,"wclass":"Shotguns"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},

	{"name":"Warlord Rage","desc":"Boost health, shields, melee damage, and durability. This krogan regenerates health slowly during combat, restoring 75 health per second.\nMelee and kill 2 enemies within 45 seconds to go into a frenzy to increase melee damage, reduce damage taken, and to boost health regeneration for 45 seconds.","type":"","evos":[
		{"name":"Rage","effects":[
			{"type":"Health & Shields Bonus","mult":0.10},
			{"type":"Melee Damage Bonus","mult":0.20},
			{"type":"Power","attributes":[
				{"name":"Damage Reduction","unit":"%","base":0.20},
				{"name":"Melee Damage Bonus","unit":"%","base":0.50},
				{"name":"Health Regeneration","unit":"","base":100}]}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.25}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.20},{"type":"Power+","attribute":"Damage Reduction","mult":0.05},{"type":"Power+","attribute":"Health Regeneration","mult":0.40}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Pure Rage","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Power+","attribute":"Special","details":"Reduce the number of melee kills required to trigger Rage to 1 within 45 seconds."}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.30},{"type":"Power+","attribute":"Damage Reduction","mult":0.05},{"type":"Power+","attribute":"Health Regeneration","mult":0.60}]}]},

	{"name":"Hex Shield","desc":"???","type":"Tech","mod":[1.5,1.5,1],"evos":[
		{"name":"Hex Shield","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Shield Strength","unit":"","base":2000},
			{"name":"Duration","unit":"s","base":18}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Shield Strength","effects":[{"type":"Power+","attribute":"Shield Strength","mult":0.20}]},

		{"name":"Pulse","effects":[{"type":"Power+","attribute":"Special","details":"Upon spawning, an electric pulse is emitted that does damage in a 3 meter radius."},{"type":"Power*","attribute":{"name":"Pulse Damage","unit":"","base":400}}]},
		{"name":"Shield Strength","effects":[{"type":"Power+","attribute":"Shield Strength","mult":0.30}]},

		{"name":"Shock","effects":[{"type":"Power+","attribute":"Special","details":"Enemies passing through the shield are electrified, taking damage over 5 seconds.\nThis effect can be detonated."},{"type":"Power*","attribute":{"name":"Shock Damage","unit":"","base":500}}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":1.00}]},

		{"name":"Damage Synergy","effects":[{"type":"Power+","attribute":"Special","details":"When active, generate additional energy for all your systems to increase damage."},{"type":"Power*","attribute":{"name":"Damage Bonus","unit":"%","base":0.1}}]},
		{"name":"Large Shield","effects":[{"type":"Power+","attribute":"Special","details":"Spawn a wider shield."},{"type":"Power+","attribute":"Shield Strength","mult":0.40}]}]},


	{"name":"Siege Pulse","desc":"Generate 3 electric charges that are stored in your platform's batteries. Use the power again to consume a charge to launch a long-range pulse that blasts a massive area. Each shot has a chance of incapacitating unarmored enemies.","type":"Biotic","mod":[1.35,1.35,1.35],"evos":[
		{"name":"Siege Pulse","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":24},
			{"name":"Damage","unit":"","base":600.0},
			{"name":"Impact Radius","unit":"m","base":1.5},
			{"name":"Knockdown Chance","unit":"%","base":0.25},
			{"name":"Number of Charges","unit":"","base":3}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Impact Radius","mult":0.6}]},

		{"name":"Damage Protection","effects":[{"type":"Power+","attribute":"Damage","mult":0.4}]}, // TODO?
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.40}]},

		{"name":"Number of Shots","effects":[{"type":"Power+","attribute":"Number of Charges","mult":1/3}]},
		{"name":"Resistance Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0.6,0.6,0.6]}]}]},

	{"name":"Poison Strike","desc":"Slash through an enemy line while encased in this biotic barrier causing instant biotic damage and applying a poison effect that does damage over time to every hit enemy.","type":"Biotic","evos":[
		{"name":"Poison Strike","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8},
			{"name":"Range","unit":"m","base":12},
			{"name":"Biotic Damage","unit":"","base":500},
			{"name":"Poison Damage Per Second","unit":"","base":75},
			{"name":"Poison Duration","unit":"s","base":5}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Biotic Damage","mult":0.20},{"type":"Power+","attribute":"Poison Damage Per Second","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Biotic Damage","mult":0.30},{"type":"Power+","attribute":"Poison Damage Per Second","mult":0.30}]},
		{"name":"Range","effects":[{"type":"Power+","attribute":"Range","mult":0.40}]},

		{"name":"Poison Duration","effects":[{"type":"Power+","attribute":"Poison Duration","mult":0.60}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Poison Strength","effects":[{"type":"Power+","attribute":"Poison Damage Per Second","mult":0.50},{"type":"Power+","attribute":"Special","details":"Paralyze up to 2 unshielded enemies for 4 seconds."}]},
		{"name":"Double Dash","effects":[{"type":"Power+","attribute":"Range","mult":-0.40},{"type":"Power+","attribute":"Special","details":"Only every other dash triggers a cooldown."}]}]},

	{"name":"Nightshade Blades","desc":"Launch a short-range volley of venom tipped blades to paralyze non-shielded targets. These blades cause instant damage and poison the target, causing damage over time.\nBlade damage is most effective at close range. A limited number of these blades can be carried. <strong>Note: uses Grenade Capacity</strong>","type":"Tech","evos":[
		{"name":"Nightshade Blades","effects":[{"type":"Power","attributes":[
			{"name":"Blade Damage","unit":"","base":1200},
			{"name":"Poison Damage Per Second","unit":"","base":50},
			{"name":"Poison Duration","unit":"s","base":8},
			{"name":"Paralysis Duration","unit":"s","base":5},
			{"name":"Range","unit":"m","base":15}]}]},
		{"name":"Capacity","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Blade Damage","mult":0.20},{"type":"Power+","attribute":"Poison Damage Per Second","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Blade Damage","mult":0.30},{"type":"Power+","attribute":"Poison Damage Per Second","mult":0.30}]},
		{"name":"Capacity","effects":[{"type":"Grenade Capacity","mult":1.00}]},

		{"name":"Range","effects":[{"type":"Power+","attribute":"Range","mult":0.50}]},
		{"name":"Poison Duration","effects":[{"type":"Power+","attribute":"Poison Duration","mult":0.40},{"type":"Power+","attribute":"Paralysis Duration","mult":0.40}]},

		{"name":"Enhanced Blades","effects":[{"type":"Power+","attribute":"Blade Damage","mult":0.40},{"type":"Power+","attribute":"Poison Damage Per Second","mult":0.60}]}, // TODO: what does capacity mean?
		{"name":"Exploding Blades","effects":[{"type":"Power+","attribute":"Special","details":"Blades explode after 3 seconds, doing 400 poisonous area damage."}]}]},

	{"name":"Biotic Focus","desc":"Launch a short-range volley of venom tipped blades to paralyze non-shielded targets. These blades cause instant damage and poison the target, causing damage over time.\nBlade damage is most effective at close range. A limited number of these blades can be carried. <strong>Note: uses Grenade Capacity</strong>","type":"Tech","evos":[
		{"name":"Biotic Focus","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":8}, // TODO
			{"name":"Duration","unit":"s","base":12},
			{"name":"Damage Taken","unit":"%","base":-0.15},
			{"name":"Melee Damage Bonus","unit":"%","base":0.15},
			{"name":"Movement Speed Bonus","unit":"%","base":10}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Damage Taken","effects":[{"type":"Power+","attribute":"Damage Taken","mult":-0.1}]},
		{"name":"Movement Speed Bonus","effects":[{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.075}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.40}]},
		{"name":"Melee Damage Bonus","effects":[{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.30}]},

		{"name":"Biotic Shield","effects":[{"type":"Power+","attribute":"Special","details":"Activate to regenerate barriers by 40% and to gain an invulnerability effect for 0.50 seconds."}]},
		{"name":"Heightened Focus","effects":[{"type":"Power+","attribute":"Damage Taken","mult":-0.20},{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.075},{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.30}]}]},

	{"name":"Venom Gauntlets","desc":"Boost health, shields, melee damage, and durability.\n30% of melee damage is applied as poison damage over 5 seconds. ","type":"","evos":[
		{"name":"Venom Gauntlets","effects":[
			{"type":"Health & Shields Bonus","mult":0.25},
			{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.20}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Power+","attribute":"Special","details":"Increase weapon damage by 25% for 20 seconds after an enemy is killed by a heavy melee."}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.30}]}]},

	{"name":"Geth Juggernaut","type":"","evos":[
		{"name":"Geth Juggernaut","effects":[
			{"type":"Weapon Damage Bonus","mult":0.05},
			{"type":"Weapon Stability Bonus","mult":0.25},
			{"type":"Spare Ammo Bonus","mult":0.10},
			{"type":"Weight Capacity Bonus","mult":0.20}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Stability and Ammo","effects":[{"type":"Weapon Stability Bonus","mult":0.05},{"type":"Spare Ammo Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Stability and Ammo","effects":[{"type":"Weapon Stability Bonus","mult":0.15},{"type":"Spare Ammo Bonus","mult":0.15}]},

		{"name":"Weapon Weight","effects":[{"type":"Weapon Weight Reduction","mult":0.20,"wclass":"all weapons"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10},{"type":"Geth Weapon Damage Bonus","mult":0.05}]}]},

	{"name":"Hardened Platform","desc":"???","type":"","evos":[
		{"name":"Hardened Platform","effects":[{"type":"Health & Shields Bonus","mult":0.20},{"type":"Melee Damage Bonus","mult":0.15},{"type":"Heavy Melee Shield Restore","mult":500}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Heavy Melee Shield Restore","mult":0.15}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.20},{"type":"Heavy Melee Shield Restore","mult":0.20}]},

		{"name":"Shield Boost","effects":[{"type":"Special","details":"Increase Movement Speed after heavy melee kill by 15%."}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Squad Command","effects":[{"type":"Melee Damage Bonus","mult":0.30},{"type":"Special","details":"Allies within 4m deal +10% damage (does not affect self)."}]},
		{"name":"Power Transfer","effects":[{"type":"Health & Shields Bonus","mult":0.75},{"type":"Heavy Melee Shield Restore","mult":0.50},{"type":"Damage Bonus","mult":-0.15}]}]},

	{"name":"Dark Sphere","desc":"Launch a slow-moving sphere of dark energy to cause damage over time to any target it passes over. The sphere can be detonated at any time to cause massive damage. This power only has a cooldown when detonated.","type":"Biotic","evos":[ // TODO: type?, check evo names
		{"name":"Dark Sphere","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":24},
			{"name":"Explosion Damage","unit":"","base":1100},
			{"name":"Radius","unit":"m","base":5},
			{"name":"Damage Over Time","unit":"","base":275},
			{"name":"Damage Duration","unit":"s","base":5}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.15}]},
		{"name":"Explosion Damage","effects":[{"type":"Power+","attribute":"Explosion Damage","mult":0.20},{"type":"Power+","attribute":"Damage Per Second","mult":0.15}]},

		{"name":"Explosion Damage","effects":[{"type":"Power+","attribute":"Explosion Damage","mult":0.30},{"type":"Power+","attribute":"Damage Per Second","mult":0.20}]},
		{"name":"Explosion Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.40}]},

		{"name":"Damage over Time","effects":[{"type":"Power+","attribute":"Damage Per Second","mult":0.40},{"type":"Power+","attribute":"Damage Duration","mult":0.40}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.35}]},

		{"name":"Dark Matter","effects":[{"type":"Power+","attribute":"Explosion Damage","mult":1},{"type":"Power+","attribute":"Radius","mult":-0.50}]},
		{"name":"Unstable Dark Sphere","effects":[{"type":"Power+","attribute":"Radius","mult":0.40},{"type":"Power+","attribute":"Damage Per Second","mult":0.40},{"type":"Power+","attribute":"Damage Duration","mult":0.40}]}]},

	{"name":"Seeker Swarm","desc":"???","type":"Biotic","mod":[1,1.5,1.5],"evos":[
		{"name":"Seeker Swarm","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":14},
			{"name":"Damage","unit":"","base":165},
			{"name":"Movement Speed Bonus","unit":"%","base":-0.1},
			{"name":"Speed Reduction Duration","unit":"m","base":1.5}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.15}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Slow","effects":[{"type":"Power+","attribute":"Speed Reduction Duration","mult":0.4}]},

		{"name":"Damage Reduction","effects":[{"type":"Power+","attribute":"Recharge Speed per Orb","mult":0.05},{"type":"Power+","attribute":"Power Recharge","mult":0.15}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.4}]},

		{"name":"Expose","effects":[{"type":"Power+","attribute":"Damage","mult":0.5}]},
		{"name":"Orb Count","effects":[{"type":"Power+","attribute":"Special","details":"Increase number of orbs by 1."}]}]},

	{"name":"Cain Trip Mine","desc":"Attach C4 proximity explosive to any surface that arms after 1.50 seconds. Decimate the defences of enemies that trip the sensor. Only 3 mines can be armed at a time.\nHighly effective versus armour, shields and barriers.\nConsumes a grenade","type":"Tech","mod":[1.5,1.5,1.5],"evos":[
		{"name":"Cain Trip Mine","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":1200},
			{"name":"Radius","unit":"m","base":5},
			{"name":"Duration","unit":"s","base":8}]}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.20}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.30}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.30}]},

		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Damage Modifier","mod":[0,0,0.5]}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":2.00}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.50}]},
		{"name":"Radius","effects":[{"type":"Power+","attribute":"Radius","mult":0.50}]}]},

	{"name":"Concussive Arrows","desc":"Load 3 concussive charges into your omni-bow to increase impact force, to knock down unarmoured enemies, and to increase the number of arrows fired simultaneously. When you run out of concussive charges, you will fire normal arrows again.\nHighly effective against barriers.\nConsumes a grenade.","type":"Combat","mod":[1,1.5,1],"evos":[
		{"name":"Concussive Arrows","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":25.0},
			{"name":"Force","unit":"N","base":450},
			{"name":"Arrows per Shot","unit":"","base":5}]}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage & Force","effects":[{"type":"Power+","attribute":"Damage","mult":0.2},{"type":"Power+","attribute":"Force","mult":0.2}]},

		{"name":"Damage & Force","effects":[{"type":"Power+","attribute":"Damage","mult":0.3},{"type":"Power+","attribute":"Force","mult":0.3}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":1.00}]},

		{"name":"Shock","effects":[{"type":"Power+","attribute":"Special","details":"Add an electrical effect to do an additional 100% damage over 5 seconds while briefly stunning the targets. This effect can be detonated."}]},
		{"name":"Chill","effects":[{"type":"Power+","attribute":"Special","details":"Add a chill effect to each arrow that slows enemy movement by 10% and increases all damage done to it by 5%. This effect lasts for 8 seconds and can stack 3 times."}]},

		{"name":"Arrow Count","effects":[{"type":"Power+","attribute":"Arrows per Shot","mult":1/5}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":2.00}]}]},

	{"name":"Armor-Piercing Arrows","desc":"Load 3 armor-piercing charges into your omni-bow to increase damage and the number of arrows frired simultaneously. When you run out of these armor-piercing charges, you will fire normal arrows again.\nHighly effective against armor.\nConsumes a grenade.","type":"Combat","mod":[1,1,1.5],"evos":[
		{"name":"Armor-Piercing Arrows","effects":[{"type":"Power","attributes":[
			{"name":"Damage","unit":"","base":75},
			{"name":"Force","unit":"N","base":450},
			{"name":"Arrows per Shot","unit":"","base":5}]}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":1.00}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.2}]},

		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage","mult":0.3}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":1.00}]},

		{"name":"Shred","effects":[{"type":"Power+","attribute":"Special","details":"Shreds targets, doing an additional 50% damage over 5 seconds."}]},
		{"name":"Armor Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase damage done to armour by 35% to weaken the target's armor resistance to weapons by 50% for 8 seconds."}]},

		{"name":"Arrow Count","effects":[{"type":"Power+","attribute":"Arrows per Shot","mult":1/5}]},
		{"name":"Grenade Capacity","effects":[{"type":"Grenade Capacity","mult":2.00}]}]},

	{"name":"Elite Mercenary","desc":"Years of experience working for hire have honed your combat abilities.\nIncrease power and weapon damage. Your battery pack also slowly regenerates a charge that can be consumed to lay Cain Trip Mines or to equip Concussive or Armor-Piercing Arrows. (Base recharge speed = 60s)","type":"","evos":[
		{"name":"Elite Mercenary","effects":[{"type":"Weapon Damage Bonus","mult":0.05},{"type":"Power Damage Bonus","mult":0.05},{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.05}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.125}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Charge Generation","effects":[{"type":"Special","details":"Increase the rate that charges are regenerated by 100%. (= 30s)"}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},

	{"name":"Omni-Bow Mastery","desc":"Boost health, shields and omni-bow damage. Your omni-bow attacks are considered melee attacks and receive bonuses from melee upgrades. Concussive and Armour-Piercing arrows are considered power attacks and receive bonuses from power upgrades. While active, Concussive and Armor-Piercing arrow damage supplements the base omni-bow damage.","type":"","evos":[
		{"name":"Omni-Bow Mastery","effects":[
			{"type":"Health & Shields Bonus","mult":0.15},
			{"type":"Omni-Bow Damage Bonus","mult":0.10}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Omni-Bow Damage","effects":[{"type":"Omni-Bow Damage Bonus","mult":0.20}]},

		{"name":"Omni-Bow Damage","effects":[{"type":"Omni-Bow Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},

		{"name":"Killing Spree","effects":[{"type":"Special","details":"Increase omni-bow damage by 50% for 8 seconds after an enemy is killed by your omni-bow."},{"type":"Omni-Bow Damage Bonus","mult":0.50}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Omni-Bow Damage","effects":[{"type":"Omni-Bow Damage Bonus","mult":0.40}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},

	{"name":"Unshackled AI","type":"","evos":[
		{"name":"Unshackled AI","effects":[
			{"type":"Weapon Damage Bonus","mult":0.025},
			{"type":"Power Damage Bonus","mult":0.10},
			{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.05}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Pistols & Shotguns","effects":[{"type":"Weapon Weight Reduction","mult":0.25,"wclass":"Shotguns"},{"type":"Weapon Weight Reduction","mult":0.25,"wclass":"Heavy Pistols"}]},
		{"name":"Weapons Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10}]}]},

	{"name":"Repair Matrix","desc":"Reinforce armor with metal-repelling Foucault currents to increase movement speed, decrease damage taken, and to regenerate shields for a short duration. When activated, the fallen caster instantly gets back on their feet. This can only occur once, and a limited number of charges can be carried for this power.","type":"Tech","evos":[
		{"name":"Repair Matrix","effects":[{"type":"Power","attributes":[
			{"name":"Shields Restored Per Second","unit":"","base":75},
			{"name":"Duration","unit":"s","base":8},
			{"name":"Damage Taken","unit":"%","base":-0.15},
			{"name":"Movement Speed Bonus","unit":"%","base":0.1}]}]},
		{"name":"Charge Capacity","effects":[{"type":"Grenade Capacity","mult":1}]},
		{"name":"Shields Restored","effects":[{"type":"Power+","attribute":"Shields Restored Per Second","mult":0.20}]},

		{"name":"Survivability","effects":[{"type":"Power+","attribute":"Damage Taken","mult":-0.05},{"type":"Power+","attribute":"Movement Speed Bonus","mult":0.10}]},
		{"name":"Shields Restored","effects":[{"type":"Power+","attribute":"Shields Restored Per Second","mult":0.30}]},

		{"name":"Charge Capacity","effects":[{"type":"Grenade Capacity","mult":1}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.50}]},


		{"name":"Lasting Repair Matrix","effects":[{"type":"Power+","attribute":"Special","details":"When getting back up from a downed state, take 75% less damage for 5 seconds."}]},
		{"name":"Enhanced Repair Matrix","effects":[{"type":"Power+","attribute":"Shields Restored Per Second","mult":0.35},{"type":"Power+","attribute":"Damage Taken","mult":-0.10}]}]},

	{"name":"Fitness Module","desc":"Boost health, shields/barriers, melee damage, and durability. ","type":"","evos":[
		{"name":"Fitness Module","effects":[{"type":"Health & Shields Bonus","mult":0.15},{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.15}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},

		{"name":"Martial Artist","effects":[{"type":"Special","details":"Increase melee damage by 75% for 30 seconds when an enemy is killed by heavy melee."},{"type":"Melee Damage Bonus","mult":0.75}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.10}]}, // Decrease shield recharge delay by 10%.

		{"name":"Melee Synergy","effects":[{"type":"Melee Damage Bonus","mult":0.10},{"type":"Special","details":"Increase weapon damage bonus by 25% for 20 seconds after an enemy is killed by heavy melee."},{"type":"Weapon Damage Bonus","mult":0.25}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.20}]}]},

	{"name":"Ancient Warrior","desc":"Utilize heavy melee to switch to the powerful Ascension Stance to increase damage and power recharge speed at the expense of increasing the damage taken. This stance lasts 30 seconds.","type":"","evos":[
		{"name":"Ancient Warrior","effects":[
			{"type":"Health & Shields Bonus","mult":0.15},
			{"type":"Melee Damage Bonus","mult":0.15},
			{"type":"Power","attributes":[
				{"name":"Duration","unit":"s","base":45},
				{"name":"Recharge Speed","unit":"s","base":5},
				{"name":"Damage Bonus","unit":"%","base":0.10},
				{"name":"Damage Taken","unit":"%","base":1.15}]}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.10}]},
		{"name":"Melee Damage","effects":[{"type":"Melee Damage Bonus","mult":0.20}]},

		{"name":"Ascension Damage Bonus","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.05},{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Durability","effects":[{"type":"Health & Shields Bonus","mult":0.15}]},

		{"name":"Ascension Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.10},{"type":"Power+","attribute":"Melee Damage Bonus","mult":0.30}]},
		{"name":"Shield Recharge","effects":[{"type":"Shield Recharge Delay Bonus", "mult":0.15}]}, // Decrease shield recharge delay by 15%.

		{"name":"Ascension Mastery","effects":[{"type":"Power+","attribute":"Damage Taken","mult":0.10},{"type":"Power+","attribute":"Recharge Speed","mult":0.10},{"type":"Power+","attribute":"Damage Taken","mult":0.10}]},
		{"name":"Fitness Expert","effects":[{"type":"Health & Shields Bonus","mult":0.25}]}]},

	{"name":"Vengeful Ancient","type":"","evos":[
		{"name":"Vengeful Ancient","effects":[
			{"type":"Weapon Damage Bonus","mult":0.025},
			{"type":"Ancient Weapon Damage Bonus","mult":0.05}, // actually "Collector/Prothean Weapon Damage"
			{"type":"Power Damage Bonus","mult":0.10},
			{"type":"Weight Capacity Bonus","mult":0.10}]},
		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.025}]},
		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.10}]},

		{"name":"Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.075}]},
		{"name":"Damage & Capacity","effects":[{"type":"Power Damage Bonus","mult":0.10},{"type":"Weight Capacity Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.15}]},
		{"name":"Headshots","effects":[{"type":"Headshot Damage Bonus","mult":0.20}]},

		{"name":"Power Damage","effects":[{"type":"Power Damage Bonus","mult":0.20}]},
		{"name":"Ancient Weapon Damage","effects":[{"type":"Weapon Damage Bonus","mult":0.10},{"type":"Ancient Weapon Damage Bonus","mult":0.05}]}]},


	{"name":"Tactical Cloak (AIU)","desc":"Become invisible.\nGain a massive damage boost when breaking from cloak to attack.","type":"Tech","evos":[
		{"name":"Tactical Cloak","effects":[{"type":"Power","attributes":[
			{"name":"Recharge Speed","unit":"s","base":10},
			{"name":"Duration","unit":"s","base":4},
			{"name":"Damage Bonus","unit":"%","base":0.40}]}]},
		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.25}]},
		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":0.30}]},

		{"name":"Duration","effects":[{"type":"Power+","attribute":"Duration","mult":1.50}]},
		{"name":"Damage","effects":[{"type":"Power+","attribute":"Damage Bonus","mult":0.40}]},

		{"name":"Recharge Speed","effects":[{"type":"Power+","attribute":"Recharge Speed","mult":0.30}]},
		{"name":"Melee Damage","effects":[{"type":"Power*","attribute":{"name":"Melee Damage Bonus","unit":"%","base":0.50}}]}, // {"type":"Power+","attribute":"Special","details":"Increase melee damage by 50% while cloaked."}

		{"name":"Bonus Power","effects":[{"type":"Power+","attribute":"Special","details":"Fire one power while cloaked and remain hidden."}]},
		{"name":"Shotgun Damage","effects":[{"type":"Power+","attribute":"Special","details":"Increase shotgun damage by 25% while cloaked."}]}]}
];