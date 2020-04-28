




/*
     FILE ARCHIVED ON 14:32:43 Jun 27, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:26:40 Nov 12, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var selected = new Array();
var selectedClass, selectedRace;
var charSkills;
var tables = {};
var chr;
var tips = new Array();
var sel = {'wamps':{'id':-1,'lvl':0}
          ,'aamps':{'id':-1,'lvl':0}
		  ,'gear': {'id':-1,'lvl':0}};
var sel_weap_ids = [-1, -1];
var sel_weap_lvls = [0, 0];
var sel_mod_ids = [[-1, -1], [-1, -1]];
var sel_mod_lvls = [[0, 0], [0, 0]];
var selecting_weapon = 0;
var selecting_mod = 0;

Array.implement({
	equalTo: function(arr){
		if(this.length !== arr.length){
			return false;
		}
		for(var i = this.length - 1; i >= 0; i--){
			if(this[i] !== arr[i]){
				return false;
			}
		}
		return true;
	},
	findFirst: function (checker) {
		for(var i = 0; i <= this.length; i++){
			if (checker(this[i])) {
				return i;
			}
		}
		return undefined;
	}
});
function intToBase26(n) {
	return String.fromCharCode('A'.charCodeAt() + Math.floor(n / 26)) + String.fromCharCode('A'.charCodeAt() + (n % 26));
}
function base26ToInt(chars) {
	return (chars[0].charCodeAt() - 'A'.charCodeAt()) * 26 + chars[1].charCodeAt() - 'A'.charCodeAt();
}

function sgn(x) {
	if (0 > x) {
		return x;
	} else {
		return ('+' + x);
	}
}
function sgn2(x) {
	return sgn(rnd2(x));
}
var possibilities = [
	[false, false, false, false, false, false, false, false, false],
	[true, false, false, false, false, false, false, false, false],
	[true, true, false, false, false, false, false, false, false],
	[true, true, true, false, false, false, false, false, false],

	[true, true, true, true, false, false, false, false, false],
	[true, true, true, false, true, false, false, false, false],

	[true, true, true, true, false, true, false, false, false],
	[true, true, true, true, false, false, true, false, false],
	[true, true, true, false, true, true, false, false, false],
	[true, true, true, false, true, false, true, false, false],

	[true, true, true, true, false, true, false, true, false],
	[true, true, true, true, false, true, false, false, true],
	[true, true, true, true, false, false, true, true, false],
	[true, true, true, true, false, false, true, false, true],
	[true, true, true, false, true, true, false, true, false],
	[true, true, true, false, true, true, false, false, true],
	[true, true, true, false, true, false, true, true, false],
	[true, true, true, false, true, false, true, false, true]
];
function selToInt(sel) {
	for (var i = 0; i < 18; i++) {
		if (possibilities[i].equalTo(sel)) {
			return i;
		}
	}
}
function intToSel(i) {
	return possibilities[i];
}

function effectDescription(effect) {
	var types = ["<span class='shields'>shields</span>", "<span class='barriers'>barriers</span>", "<span class='armor'>armor</span>"];
	switch (effect.type) {
		case 'Power':
			return 'New Ability: ' + skillName(effect.skill);
		case 'Weapon Weight Reduction':
			var str = langString('Reduce the weight of WCLASS by VALUE.');
			return str.replace('WCLASS', langString(effect.wclass)).replace('VALUE', (effect.mult * 100)+'%');
		case 'Special':
			return langString(effect.details);
		case 'Power+':
			if ('Special' == effect.attribute) {
				return skillName(effect.skill) + ': ' + langString(effect.details);
			} else if ('Damage Modifier' == effect.attribute) {
				return effect.mod
					.map(function (item, itemId) {if (0 != item) return skillName(effect.skill) + ': ' + "Increase damage to "+types[itemId]+" by "+(item*100)+"%."; else return ""})
					.filter(function (item) {return "" != item})
					.join("<br />");
			} else {
				return skillName(effect.skill) + ': ' + langString(effect.attribute) + ': ' + sgn(effect.mult * 100) + '%';
			}
		case 'Power*':
			var percent = ('%' == effect.attribute.unit) ? 100 : 1;
			return skillName(effect.skill) + ': ' + attributeName(effect.attribute) + ': ' + (effect.attribute.base * percent) + effect.attribute.unit;
		default:
			return langString(effect.type) + ': ' + sgn(effect.mult * 100) + '%';
	}
}
function description(skillId, evoNo) {
	var result = ''
	charSkills[skillId].evos[evoNo].effects.each(function (effect) {
		effect.skill = charSkills[skillId];
		result += effectDescription(effect) + '<br />';
	});
	return result;
}

function onSkillEvoClick(event) {
	var skillId = event.target.skillId;
	var evoNo = event.target.evoNo;
	selected[skillId] = newSelected(selected[skillId], event.target.evoNo);
	highlightSkillEvoSelected(skillId);
	highlightSkillEvoChange(skillId, evoNo);
	tally();
}
function highlightSkillEvoSelected(skillId) {
	for (var evoNo = 0; evoNo < 9; ++evoNo) {
		if (selected[skillId][evoNo])
			$('skill'+skillId+'evo'+evoNo).addClass('selected');
		else
			$('skill'+skillId+'evo'+evoNo).removeClass('selected');
	}
}
function onSkillEvoMouseOver(event) {
	highlightSkillEvoChange(event.target.skillId, event.target.evoNo);
}
function highlightSkillEvoChange(skillId, evoNo) {
	var newsel = newSelected(selected[skillId], evoNo);
	for (var evoNo = 0; evoNo < 9; ++evoNo) {
		if (selected[skillId][evoNo] != newsel[evoNo])
			$('skill'+skillId+'evo'+evoNo).addClass('hover');
		else
			$('skill'+skillId+'evo'+evoNo).removeClass('hover');
	}
}
function onSkillEvoMouseOut(event) {
	var skillId = event.target.skillId;
	for (var i = 0; i < 9; ++i) {
		$('skill'+skillId+'evo'+i).removeClass('hover');
	}
}

function getEvoLevel(evoNo) {
	return [1, 2, 3, 4, 4, 5, 5, 6, 6][evoNo];
}
function other (i) {
	if (0 == i % 2) {
		return i - 1;
	} else {
		return i + 1;
	}
}
function evoString(skill, evoNo) {
	return "<em class='evobonus'>" + skillName(skill) + ' ' + getEvoLevel(evoNo) /*+ ': ' + evoName(skill.evos[evoNo])*/+'</em>';
}
function abbAttStr(ability, attribute) {
	return "<em class='attribute'>" +langString(ability.name) + ': ' + attributeName(attribute)+'</em>';
}

function newSelected(current, evoNo) {
	var newsel = Array.clone(current);

	if (current[evoNo]) {
		for (var i = evoNo; i < 9; ++i) {
			newsel[i] = false;
		}
	} else {
		if (evoNo < 3) {
			for (var i = 0; i <= evoNo; ++i) {
				newsel[i] = true;
			}
		} else {
			// hovering on a disabled button > 2
			// 0-2 set to enabled
			for (var i = 0; i < 3; ++i) {
				newsel[i] = true;
			}

			// other button set to disabled
			newsel[other(evoNo)] = false;

			if (evoNo > 4) {
				// if 3 or 4 is set, do nothing, else enable the same one
				if (!current[3] && !current[4]) {
					newsel[4 - (evoNo % 2)] = true;
				}
			}
			if (evoNo > 6) {
				// if 5 or 6 is set, do nothing, else enable the same one
				if (!current[5] && !current[6]) {
					newsel[6 - (evoNo % 2)] = true;
				}
			}
			newsel[evoNo] = true;
		}
	}
	return newsel;
}

function modvalue2(value, mod) {

	if (mod) {
		return [1].append(mod)
			.map(function (item,itemId) {return "<span class='"+['health','shields','barriers','armor'][itemId]+"'>"+rnd2(item * value)+"</span>"})
			.join("/");
	} else {
		return rnd2(value);
	}
}
function rnd2(x) {
	return Math.round(x * 100) / 100;
}
function tally() {
	//window.location.hash = makehash();
	var hash = makehash();
	window.location.replace(window.location.toString().replace(/#.*$/,'') + hash);
	$('frenchlink').href = "?lang=fr"+hash;

	var htmls = new Object();
	var weight = 2 + chr.enc;

	var hp = chr.hp;
	var shields = chr.shields;
	var abilities = new Array();
	var spentPoints = 0;
	var melee = chr.melee;
	var hmelee_base = chr.hmelee;
	var melee_boni = [];
	var grenade_cap = 1;
	var current_ability;
	var sel_weapons = new Array();
	var wdb_geth = 0, wdb_ancient = 0;
	var srdb = 0;

	function add(key, text) {
		if (htmls[key]) {
			htmls[key] += '<br />' + text;
		} else {
			htmls[key] = String(text);
		}
	}

	function applyEffect(effect, src) {
		switch (effect.type) {
			case 'Power':
				attBoni = new Object();
				effect.attributes.each(function (attribute) {
					attBoni[attribute.name] = new Array();
				});
				var mod = effect.skill.mod ? effect.skill.mod.clone() : [1,1,1];
				current_ability = {'name': effect.skill.name, 'desc': effect.skill.desc, 'attributes': effect.attributes.clone(), 'specials': new Array(), 'attBoni': attBoni, 'type': effect.skill.type,'mod':mod};
				abilities.push(current_ability);
				break;
			case 'Power+':
				if ('Special' == effect.attribute) {
					current_ability.specials.push({'details': effect.details, 'src': src});
				} if ('Damage Modifier' == effect.attribute) {
					effect.mod.each(function (item, itemId) {
						current_ability.mod[itemId] *= (1+item);
					});
				} else {
					if (!current_ability.attBoni[effect.attribute]) {
						// The attribute may not exist yet, e.g. if rocket damage has not been chosen in sentry turret
						current_ability.attBoni[effect.attribute] = new Array();
					}
					current_ability.attBoni[effect.attribute].push({'mult': effect.mult, 'src': src});
				}
				break;
			case 'Power*':
				current_ability.attributes.push(effect.attribute);
				if (!current_ability.attBoni[effect.attribute.name]) {
					// bonus array may already have been created, e.g. by rocket damage bonus
					current_ability.attBoni[effect.attribute.name] = new Array();
				}
				break;
			case 'Power Duration Bonus':
				abilities.each(function (ability) {
					for (var attName in ability.attBoni) {
						if ('Duration' == attName) {
							ability.attBoni[attName].push({'mult': effect.mult, 'src': src});
						}
					}
				});
				break;
			case 'Shield Bonus':
			case 'Health & Shields Bonus':
				if ('Health & Shields Bonus' == effect.type) {
					// apply health bonus
					hp += chr.hp * effect.mult;
					add('health_bonus', '+'+(effect.mult * 100)+'% (' + (effect.mult * chr.hp)+') ' + src);
				}
				// definitely apply shield bonus
				shields += chr.shields * effect.mult;
				add('shields_bonus', sgn2(effect.mult * 100)+'% (' + rnd2(effect.mult * chr.shields)+') ' + src);
				break;
			case 'Shield Recharge Delay Bonus':
				srdb += effect.mult;
				mult = -effect.mult;
				add('srdb', rnd2(mult * 100)+'% ('+rnd2(mult * 3.5)+'/'+rnd2(mult * 4)+'/'+rnd2(mult * 4)+'/'+rnd2(mult * 4.5)+') '+src);
				break;
			case 'Weight Capacity Bonus':
				weight += effect.mult;
				add('wcb_bonus', sgn(effect.mult * 100)+'% ' + src);
				break;
			case 'Mod Weight Reduction':
				var weapon = sel_weapons[effect.wslot];
				weight += weapon.weight * (-1 * effect.mult);
				add('wcb_bonus', sgn2(-1 *weapon.weight* effect.mult * 100)+'% ' + src);
				break;
			case 'Weapon Weight Reduction':
				for (var i = 0; i < 2; i++) {
					var weapon = sel_weapons[i];
					if (weapon && ('all weapons' == effect.wclass || Array.from(effect.wclass).contains(weapon.wclass))) {
						weight += effect.mult;
						add('wcb_bonus', '+'+(effect.mult * 100)+'% ' + src);
					}
				}
				break;
			case 'Grenade Capacity':
				grenade_cap += effect.mult;
				add('grenade_cap_bonus', '+'+effect.mult+' '+src);
				/*alert(src);
				abilities.each(function (ability) {
					for (var attName in ability.attBoni) {
						if ('Capacity' == attName) {
							ability.attBoni[attName].push({'mult': effect.mult, 'src': src});
						}
					}
				});*/
				break;

			case 'Weapon Stability Bonus':
			case 'Headshot Damage Bonus':
			case 'Movement Speed Bonus':
			case 'Shield Regen':
			case 'Shield Recharge Delay':
			case 'Shield Recharge Speed Bonus':
			case 'Special':
				add('specials', effectDescription(effect)+' '+src);
				break;
			case 'Geth Weapon Damage Bonus':
				wdb_geth += effect.mult;
				break;
			case 'Ancient Weapon Damage Bonus':
				wdb_ancient += effect.mult;
				break;
			case 'Damage Bonus':
			case 'Weapon Damage Bonus':
			case 'Melee Damage Bonus':
			case 'Power Damage Bonus':
			case 'Omni-Bow Damage Bonus':
			case 'Tech Power Damage Bonus':
			case 'Biotic Power Damage Bonus':
				// apply to weapons
				if ('Damage Bonus' == effect.type || 'Weapon Damage Bonus' == effect.type) {

					for (var i = 0; i < 2; i++) {
						var weapon = sel_weapons[i];
						if (weapon && (!(effect.wclass) || effect.wclass == weapon.wclass)) {
							var dmg = weapon.dmg_base * effect.mult;
							weapon.dmg += dmg;
							add('weapon'+i+'bonuses', '+'+rnd2(effect.mult * 100)+'% ('+modvalue2(dmg, weapon.mod)+') '+src);
						}
					}
				}
				if ('Damage Bonus' == effect.type || 'Melee Damage Bonus' == effect.type || 'Omni-Bow Damage Bonus'  == effect.type) {
					// apply to melee damage
					effect.src = src;
					melee_boni.push(effect);
				}

				// apply to abilities
				abilities.each(function (ability) {
					if ('Damage Bonus' == effect.type
						|| (effect.type == 'Power Damage Bonus'/* && 'Melee' != ability.type*/)
						|| (effect.type == 'Melee Damage Bonus' && 'Melee' == ability.type)
						|| (effect.type == 'Tech Power Damage Bonus' && 'Tech' == ability.type)
						|| (effect.type == 'Biotic Power Damage Bonus' && 'Biotic' == ability.type)) {
						for (var attName in ability.attBoni) {
							if (['Backfire', 'Force', 'Damage', 'Damage Per Second', 'Drone Damage', 'Turret Damage', 'Explosion Damage', 'Rocket Damage', 'Flamethrower Damage', 'Electric Field Damage', 'Blast Damage', 'Blade Damage', 'Poison Damage Per Second', 'Biotic Damage'].contains(attName)) {
								ability.attBoni[attName].push({'mult': effect.mult, 'src': src});
							}
						}
					}
				});
				break;
			case 'Power Recharge':
				abilities.each(function (ability) {
					for (var attName in ability.attBoni) {
						if ('Recharge Speed' == attName) {
							ability.attBoni[attName].push({'mult': effect.mult, 'src': src});
						}
					}
				});
				break;
			case 'Heavy Melee Base':
				hmelee_base = effect.mult;
				break;
			default:
				// alert(effect.type);
		}
	}
	add('wcb_bonus', '= 200% + '+Math.round(chr.enc * 100)+'% '+baseValue());

	var mod_melee_bonus = null;

	// WEAPONS
	for (var i = 0; i < 2; ++i) {
		var weaponId = sel_weap_ids[i];
		if (-1 != weaponId) {
			var weapon = weapons[weaponId];
			var lvl = sel_weap_lvls[i];

			var weap_weight = weapon.wi + (weapon.wx - weapon.wi) * lvl / 9;
			var weap_dmg_base = weapon.dmgi + (weapon.dmgx - weapon.dmgi) * lvl / 9;
			sel_weapons[i] = {'weight': weap_weight, 'dmg': weap_dmg_base, 'dmg_base': weap_dmg_base, 'name': weapon.name, 'wclass': weapon.wclass};
			if (weapon.mod) {
				sel_weapons[i].mod = weapon.mod;
			}

			add('weapon'+i+'bonuses', '= '+modvalue2(weap_dmg_base, weapon.mod)+' (base value)');
			$('weapon'+i+'name').set('text', langString(weapon.name)+' '+roman[lvl]);
			$('weapon'+i+'info').setStyle('display', 'block');

			weight -= weap_weight;
			add('wcb_bonus', sgn(rnd2(-weap_weight * 100))+'% ' + langString(weapon.name));


		} else {
			sel_weapons[i] = null;
			$('weapon'+i+'info').setStyle('display', 'none');
		}
	}
	//TODO: lol
	charSkills.each(function (skill, skillId) {
		skill.evos.each(function (evo, evoNo) {
			if (selected[skillId][evoNo]) {
				spentPoints += getEvoLevel(evoNo);

				evo.effects.each(function(effect, effectId) {
					effect.skill = skill;
					applyEffect(effect, evoString(skill, evoNo));
				});
			}
		});
	});

	for (var i = 0; i < 2; ++i) {
		var weapon = sel_weapons[i];

		// weapon mods
		for (var j = 0; j < 2; ++j) {
			var modId = sel_mod_ids[i][j];
			var modLvl = sel_mod_lvls[i][j];
			if (-1 != modId) {
				var mod = mods[modId];

				Array.from(mod.effects).each(function (effect) {

					effect.mult = effect.y[modLvl];
					effect.wclass = mod.wclass;
					effect.wslot = i;

					// exception for melee mod, as it has multiplicative damage
					var src = langString(mod.name)+' '+roman[modLvl];
					if ("Melee Damage Bonus" == effect.type) {
						mod_melee_bonus = {'effect': effect, 'src': src};
					} else {
						applyEffect(effect, src);
					}
				});
			}
		}
	}

	['wamps','aamps','gear'].each(function (str) {
		var amp = window[str][sel[str].id];
		if (amp) {
			var amp_lvl = sel[str].lvl;
			var src_string = "<em class='gear'>"+langString(amp.name)+' '+roman[amp_lvl]+'</em>';
			Array.from(amp.effects).each(function (effect) {
				effect.mult = undefined !== effect.x ? x[effect.x][amp_lvl] : effect.y[amp_lvl];
				applyEffect(effect, src_string);
			});
		}
	});

	// limit weapon weight;
	if (weight > 2) {
		weight = 2;
	} else if (weight < -2) {
		weight = -2;
	}
	applyEffect({'type': 'Power Recharge', 'mult': weight}, 'Weight Cooldown Bonus');

	var abilityCount;

	function modvalue(base, mod, mult) {
		return "<span class='modtip' title='health/&lt;span class=&quot;shields&quot;&gt;shields&lt;/span&gt;/&lt;span class=&quot;barriers&quot;&gt;barriers&lt;/span&gt;/&lt;span class=&quot;armor&quot;&gt;armor&lt;/span&gt;'>"
		+ [base * mult].append(mod.map(function (item,itemId) {return "<span class='"+['shields','barriers','armor'][itemId]+"'>"+rnd2(item * base * mult)+"</span>"})).join("/")
		+ "</span>";
	}

	function tally_abilities (firstpass) {

		abilityCount = 0;
		abilities.each(function (ability) {
			// display ability
			$('ability'+abilityCount).setStyle('display', 'inline-block');
			$('ability'+abilityCount+'name').set('text', langString(ability.name));
			$('ability'+abilityCount+'desc').set('html', langString(ability.desc));

			// iterate over attributes
			var attCount = 0;
			ability.attributes.each(function (attribute, index) {
				if (firstpass == (['Power Recharge', 'Power Damage Bonus', 'Damage Bonus'].contains(attribute.name))) {
					$('ability'+abilityCount+'att'+index).setStyle('display', 'block');
					if (['Ammo Drop Frequency', 'Grenade Drop Frequency','Recharge Speed', 'Missile Recharge Speed'].contains(attribute.name)) {
						var cdr = 0;
						ability.attBoni[attribute.name].each(function (attBonus) {
							cdr += attBonus.mult;
							add('ability'+abilityCount+'att'+index+'bonus', ''+sgn(rnd2(attBonus.mult))+' '+attBonus.src);
						});

						// and finally calculate the actual value:
						var attvalue;
						if (cdr > 0) {
							attvalue = attribute.base / (1 + cdr);
							$('ability'+abilityCount+'att'+index+'base').set('html', '= ' + attribute.base + '<sub>'+baseValue()+'</sub> / (1 + ' + rnd2(cdr) + ')<br />' + rnd2(cdr) + ' = ');
						} else {
							attvalue = attribute.base * (1 - cdr);
							$('ability'+abilityCount+'att'+index+'base').set('html', '= ' + attribute.base + '<sub>'+baseValue()+'</sub> * (1 + ' + (-rnd2(cdr)) + ')<br />' + rnd2(cdr) + ' = ');
						}
						$('ability'+abilityCount+'att'+index+'name').set('text', attributeName(attribute) + ': ' + rnd2(attvalue) + attribute.unit);
					} else if ('%' == attribute.unit) {
						$('ability'+abilityCount+'att'+index+'base').set('text', '= ' + (attribute.base * 100) + attribute.unit+' '+baseValue());
						var attvalue = attribute.base;
						// iterate over attribute boni
						ability.attBoni[attribute.name].each(function (attBonus) {
							attvalue += attBonus.mult;
							add('ability'+abilityCount+'att'+index+'bonus', sgn(attBonus.mult * 100)+'% '+attBonus.src);
						});
						attvalue *= 100;
						$('ability'+abilityCount+'att'+index+'name').set('text', attributeName(attribute) + ': ' + rnd2(attvalue) + attribute.unit);
					} else if (!ability.mod.equalTo([1,1,1]) && ['Backfire', 'Damage', 'Damage Per Second', 'Drone Damage', 'Turret Damage', 'Explosion Damage', 'Rocket Damage', 'Flamethrower Damage', 'Electric Field Damage', 'Blast Damage'].contains(attribute.name)) {

						$('ability'+abilityCount+'att'+index+'base').set('html', '= ' + modvalue(attribute.base, ability.mod, 1) + attribute.unit+' '+baseValue());
						var attvalue = attribute.base;
						// iterate over attribute boni
						ability.attBoni[attribute.name].each(function (attBonus) {
							attvalue += attribute.base * attBonus.mult;
							add('ability'+abilityCount+'att'+index+'bonus', sgn2(attBonus.mult * 100)+'% (' + modvalue(attribute.base, ability.mod, attBonus.mult) + attribute.unit+ ') '+attBonus.src);
						});
						$('ability'+abilityCount+'att'+index+'name').set('html', attributeName(attribute) + ': ' + modvalue(attvalue, ability.mod, 1) + attribute.unit);
					} else {
						$('ability'+abilityCount+'att'+index+'base').set('text', '= ' + attribute.base + attribute.unit+' '+baseValue());
						var attvalue = attribute.base;
						// iterate over attribute boni
						ability.attBoni[attribute.name].each(function (attBonus) {
							attvalue += attribute.base * attBonus.mult;
							add('ability'+abilityCount+'att'+index+'bonus', sgn2(attBonus.mult * 100)+'% (' + rnd2(attBonus.mult * attribute.base)  + attribute.unit+ ') '+attBonus.src);
						});
						$('ability'+abilityCount+'att'+index+'name').set('text', attributeName(attribute) + ': ' + rnd2(attvalue) + attribute.unit);
					}

					if ($('ability'+abilityCount+'enabled').checked
					  && ['Power Recharge', 'Damage Bonus', 'Weapon Damage Bonus', 'Melee Damage Bonus', 'Power Damage Bonus', 'Shield Bonus', 'Shield Recharge Delay Bonus'].contains(attribute.name)) {
						applyEffect({'type': attribute.name, 'mult': attvalue / 100}, abbAttStr(ability, attribute));
					}
				}
				attCount++;
			});
			for (; attCount < 8; attCount++) {
				$('ability'+abilityCount+'att'+attCount).setStyle('display', 'none');
			}

			// ability specials
			if (firstpass) {
				ability.specials.each(function (special) {
					add('ability'+abilityCount+'specials', langString(special.details)+' '+special.src);
				});
			}

			abilityCount++;
		});
	}

	tally_abilities(true);
	tally_abilities(false);

	$('wcb').set('text', ''+sgn(rnd2(weight * 100))+'%');
	$('health').set('text', hp);
	$('grenade_cap').set('text', grenade_cap);
	$('shields').set('text', shields);
	$('points_left').set('text', (84 - spentPoints));
	var srd = 1 - srdb;
	$('srd').set('text', rnd2(srd * 3.5)+'/'+rnd2(srd * 4)+'/'+rnd2(srd * 4)+'/'+rnd2(srd * 4.5));

	for (var i = 0; i < 2; ++i) {
		var weapon = sel_weapons[i];

		
		// Weapon Damage
		if (weapon) {
			// tac cloak sniper
			if ('Tactical Cloak' == charSkills[0].name && selected[0][8] && $('ability0enabled').checked && weapon.wclass == 'Sniper Rifles') {
				var dmg = weapon.dmg * 0.25;
				weapon.dmg += dmg;
				add('weapon'+i+'bonuses', '* 25% ('+modvalue2(dmg, weapon.mod)+') <em class="attribute">Tactical Cloak 6</em>');
			}
			// tac cloak ar
			if ('Tactical Cloak (TGI)' == charSkills[1].name && selected[1][8] && $('ability1enabled').checked && weapon.wclass == 'Assault Rifles') {
				var dmg = weapon.dmg * 0.20;
				weapon.dmg += dmg;
				add('weapon'+i+'bonuses', '* 20% ('+modvalue2(dmg, weapon.mod)+') <em class="attribute">Tactical Cloak (TGI) 6</em>');
			}
			// tac cloak sg
			if ('Tactical Cloak (AIU)' == charSkills[0].name && selected[0][8] && $('ability0enabled').checked && weapon.wclass == 'Shotguns') {
				var dmg = weapon.dmg * 0.25;
				weapon.dmg += dmg;
				add('weapon'+i+'bonuses', '* 25% ('+modvalue2(dmg, weapon.mod)+') <em class="attribute">Tactical Cloak (TGI) 6</em>');
			}
			if (0 != wdb_geth && ['GPSG', 'GPSMG', 'Javelin', 'Geth Pulse Rifle', 'Geth Spitfire'].contains(weapon.name)) {
				var dmg = weapon.dmg * wdb_geth;
				weapon.dmg += dmg;
				add('weapon'+i+'bonuses', '* '+rnd2(100 * wdb_geth)+'% ('+modvalue2(dmg, weapon.mod)+') Geth Weapon Damage Bonus');
			}
			if (0 != wdb_ancient && ['Collector AR', 'Collector SMG', 'Collector SR', 'Particle Rifle'].contains(weapon.name)) {
				var dmg = weapon.dmg * wdb_ancient;
				weapon.dmg += dmg;
				add('weapon'+i+'bonuses', '* '+rnd2(100 * wdb_ancient)+'% ('+modvalue2(dmg, weapon.mod)+') Ancient Weapon Damage Bonus');
			}
			$('weapon'+i+'dmg').set('html', modvalue2(weapon.dmg, weapon.mod));
		}
	}

	// apply melee boni
	var hmelee = hmelee_base;
	melee_boni.each(function (effect) {
		melee_bonus = effect.mult * chr.melee;
		melee += melee_bonus;
		hmelee_bonus = effect.mult * hmelee_base;
		hmelee += hmelee_bonus;
		add('melee_bonus', '+'+rnd2(effect.mult * 100)+'% (' + rnd2(melee_bonus) +'/' + rnd2(hmelee_bonus)+') ' + effect.src);
	});
	// mod_melee_bonus
	if (mod_melee_bonus) {
		var melee_dmg = melee * mod_melee_bonus.effect.mult;
		var hmelee_dmg = hmelee * mod_melee_bonus.effect.mult;
		melee += melee_dmg;
		hmelee += hmelee_dmg;
		add('melee_bonus', '* '+rnd2(mod_melee_bonus.effect.mult * 100)+'% (' + rnd2(melee_dmg) +'/' + rnd2(hmelee_dmg)+') ' + mod_melee_bonus.src);
	}
	$('melee_base').set('text', chr.melee+'/'+hmelee_base);
	$('melee').set('html', melee+'<br />'+modvalue2(hmelee, chr.meleemod));

	for (; abilityCount < 4; abilityCount++) {
		$('ability'+abilityCount).setStyle('display', 'none');
	}

	// output class clear divs
	$$('.clear').each(function (object, nr) {
		object.set('html', htmls[object.id] ? htmls[object.id] : '');
	});

	var myTips = new Tips('.modtip');
}

/*
	Set selectedRace and reset the 'selected' array.
*/
function setClassRace(classId, raceId) {
	selectedClass = classId;
	selectedRace = raceId;
}
	// set selected Array
function resetSelected() {
	selected[0] = intToSel(1);
	for (var i = 1; i < 5; ++i) {
		selected[i] = intToSel(0);
	}
	for (var i = 0; i < 5; ++i) {
		highlightSkillEvoSelected(i); // update colors
	}
}
function createClassRaceSelect() {
	// fill class selection
	var select = $('classraceselect');
	classes.each(function (meclass, classId) {
		var optgroup = new Element('optgroup', {'label': langString(meclass.name)});

		meclass.races.each(function (race, raceId) {
			optgroup.grab(new Element('option', {'text': langString(race.name)+' '+langString(meclass.name), 'value': ''+classId+raceId, 'selected': (selectedClass == classId && selectedRace == raceId)}));
		});
		select.grab(optgroup);
	});
	select.addEvent('change', onChangeSelectClassRace);
}
/*
	clears and refills the race select with the selected class races.
*/
function fillRaces() {
	if (!MOBILE) {
		var meclass = classes[selectedClass];
		meclass.races.each(function (race, i) {
			$('race'+i).set('text', langString(race.name)+' '+langString(meclass.name));
		});
	}
}

function langString(string) {
	if ('en' == LANG) {
		return string;
	} else {
		if (langs[LANG][string]) {
			return langs[LANG][string];
		} else {
			return LANG+'!!'+string+'!!';
		}
	}
}

function skillName(skill) {
	return langString(skill.name);
}
function evoName(evo) {
	return langString(evo.name);
}
function attributeName(attribute) {
	return langString(attribute.name);
}
function baseValue() {
	return langString('(base value)');
}

function calcMeleeMod(classId, raceId) {
	var race = classes[classId].races[raceId];
	if (race.mmod) {
		return race.mmod;
	} else {
		return [1,1,0.75];
	}
}

function fillSkills() {
	chr = classes[selectedClass].races[selectedRace];
	chr.meleemod = calcMeleeMod(selectedClass, selectedRace);
	charSkills = new Array();
	chr.skills.each(function (skillname) {
		skills.each(function (skill) {
			if (skill.name == skillname)
				charSkills.push(skill);
		});
	});
	charSkills.each(function (skill, skillId) {
		$('skill'+skillId+'name').set('text', skillName(skill));

		skill.evos.each(function (evo, evoNo) {
			$('skill'+skillId+'evo'+evoNo).set('text', evoName(evo));

			// Big thanks to Creakazoid for this bugfix:
			//-----------------------------BEGIN CHANGES--------------------------------------
            $('skill'+skillId+'evo'+evoNo).store('tip:title', evoString(skill, evoNo));
            $('skill'+skillId+'evo'+evoNo).store('tip:text', description(skillId, evoNo));
            tips[skillId * 9 + evoNo] = new Tips($('skill'+skillId+'evo'+evoNo), {
                    className: 'tooltip'});
            //-----------------------------END CHANGES----------------------------------------
		});
	});

	$('health_base').set('text', chr.hp);
	$('shields_base').set('text', chr.shields);
	$('classname').set('text', langString(chr.name) + ' ' + langString(classes[selectedClass].name));
}

function itoa(val, c) {
	var base = (c) ? c : 'A';
	return String.fromCharCode(base.charCodeAt() + val)
}

function makehash() {
	var result = '#';

	function add(string) {
		result += removeSpaces(string) + '/'
	}

	// class
	add(classes[selectedClass].name);
	// kit
	add(classes[selectedClass].races[selectedRace].name);

	// abilities
	for (var i = 0; i < 5; i++) {
		result += itoa(selToInt(selected[i]));
	}
	result += '/';


	// weapons
	for (var i = 0; i < 2; ++i) {
		if (-1 == sel_weap_ids[i]) {
			result += '/';
		} else {
			result += removeSpaces(weapons[sel_weap_ids[i]].name) + (sel_weap_lvls[i]+1);
			// mods
			result += intToBase26(sel_mod_ids[i][0]+1) + (sel_mod_lvls[i][0]+1);
			result += intToBase26(sel_mod_ids[i][1]+1) + (sel_mod_lvls[i][1]+1);

			result += '/';
		}
	}

	// gear
	['wamps','aamps','gear'].each(function (amp) {
		var ampId = sel[amp].id;
		if (-1 == ampId) {
			result += '/';
		} else {
			result += removeSpaces(window[amp][ampId].name) + (sel[amp].lvl+1) + '/';
		}
	});

	return encodeURI(result);
}
function makehash2() {
	var result = '' + selectedClass + selectedRace;
	for (var i = 0; i < 5; i++) {
		result += itoa(selToInt(selected[i]));
	}

	// weapons
	for (var i = 0; i < 2; ++i) {
		result += itoa(parseInt(sel_weap_ids[i]));
		result += itoa(parseInt(sel_weap_lvls[i]), '0');
	}

	// gear
	result += itoa(parseInt($('gear').value));
	result += itoa(parseInt($('gearlvl').value));

	// amps
	result += itoa(parseInt($('wamps0').value));
	result += itoa(parseInt($('wamps1').value));

	// mods
	for (var i = 0; i < 2; ++i) {
		for (var j = 0; j < 2; ++j) {
			result += itoa(parseInt(sel_mod_ids[i][j]));
			result += itoa(parseInt(sel_mod_lvls[i][j]), '0');
		}
	}

	return result;
}

function hideDialog() {
	$('dialog').setStyle('display', 'none');
}
function showDialog(content) {
	with ($('dialogcontent')) {
		getChildren().dispose();
		grab(content);
	}
	with ($('dialog')) {
		setStyle('display', 'block');
		position();
	}
}

// onclick event for gear selection table
function selectGearDialog(gearId, gearLvl) {
	sel['gear'].id = gearId;
	sel['gear'].lvl = gearLvl;
	if (-1 == gearId) {
		$("gearspan").set('html', "no gear");
	} else {
		$("gearspan").set('html', langString(gear[gearId].name) + " " + roman[gearLvl]);
	}
	hideDialog();
}
// onclick event for weapon selection table
function selectWeaponDialog(wslotid, weapid, weaplvl) {
	sel_weap_ids[wslotid] = weapid;
	sel_weap_lvls[wslotid] = weaplvl;
	if (-1 == weapid) {
		$("w"+wslotid).set('html', "no weapon");
	} else {
		$("w"+wslotid).set('html', "" + langString(weapons[weapid].name) + " " + roman[weaplvl]);
	}
	selectModDialog(wslotid, 0, -1, 0)
	selectModDialog(wslotid, 1, -1, 0)
	hideDialog();
}
// onclick event for mod selection table
function selectModDialog(wslotid, mslotid, modid, modlvl) {
	sel_mod_ids[wslotid][mslotid] = parseInt(modid);
	sel_mod_lvls[wslotid][mslotid] = parseInt(modlvl);
	if (-1 == modid) {
		$("m"+wslotid+mslotid).set('html', "no mod");
	} else {
		$("m"+wslotid+mslotid).set('html', "" + langString(mods[modid].name) + " " + roman[modlvl]);
	}
	hideDialog();
}

function createModTable(wclass) {
	var table = new HtmlTable();
	var handler = function (src) {
		selectModDialog(selecting_weapon, selecting_mod, src.target.id, src.target.lvl);
		tally();
	};
	var table = new HtmlTable();

	var cell = new Element('td', {
		'text': 'no mod',
		'class': 'clickable',
		'events': {
			'click': handler
		}});
	cell.id = -1;
	cell.lvl = 0;
	cell.inject(table);
	mods.each(function (mod, mod_id) {
		if (mod.wclass == wclass) {
			var row = new Element('tr').inject(table);
			row.grab(new Element('td', {text: langString(mod.name)}));
			for (var i = 0; i < 5; i++) {
				var cell = new Element('td', {
					'text': roman[i],
					'class': 'clickable',
					'events': {
						'click': handler
					}});
				cell.id = mod_id;
				cell.lvl = i;

				row.grab(cell);
			}
			var desc_str = Array.from(mod.effects).map(function (effect) {
				return effect.type + ': ' + (100 * effect.y[0]) + '% - ' + (100 * effect.y[4]) + '%';
				//effect.y.map(function (mult) { return '' + (100 * mult) + '%'}).join('/');
			}).join(', ');
			row.grab(new Element('td', {text: desc_str}));
		}
	});

	showDialog(table);
}

function onClickTableClassRace(classNo, raceNo) {
	selectedClass = classNo;
	selectedRace = raceNo;
	resetSelected();
	fillSkills();
	hideDialog();
	tally();
}

function createWeaponTable() {
	var handler = function (src) {
		selectWeaponDialog(selecting_weapon, src.target.weapon_id, src.target.weapon_lvl);
		tally();
	};
	var table = new HtmlTable();

	var cell = new Element('td', {
		'text': 'no weapon',
		'class': 'clickable',
		'events': {
			'click': handler
		}});
	cell.weapon_id = -1;
	cell.weapon_lvl = 0;
	cell.inject(table);
	wclasses.each(function (wclass) {
		table.grab(new Element('tr').adopt(
			new Element('th', {'text': langString(wclass.name)}),
			new Element('td', {'colspan': '10'}),
			new Element('td', {'text': 'Damage', 'colspan': '2', 'styles': {'text-align': 'center'}}),
			new Element('td', {'text': 'Weight', 'colspan': '2', 'styles': {'text-align': 'center'}}),
			new Element('td', {'text': 'Mag', 'styles': {'text-align': 'center'}})));
		wclass.weapons.each(function (weapon) {
			var row = new Element('tr').inject(table);
			row.grab(new Element('td', {text: langString(weapon.name)}));
			for (var i = 0; i < 10; i++) {
				var cell = new Element('td', {
					'text': roman[i],
					'class': 'clickable',
					'events': {
						'click': handler
					}});
				cell.weapon_id = weapon.id;
				cell.weapon_lvl = i;

				row.grab(cell);
			}
			row.grab(new Element('td', {text: weapon.dmgi.toFixed(1), 'class': 'alignright'}));
			row.grab(new Element('td', {text: weapon.dmgx.toFixed(1), 'class': 'alignright'}));
			row.grab(new Element('td', {text: weapon.wi.toFixed(2), 'class': 'alignright'}));
			row.grab(new Element('td', {text: weapon.wx.toFixed(2), 'class': 'alignright'}));
			row.grab(new Element('td', {text: weapon.mag, 'class': 'alignright'}));
		});
	});

	tables['weapon'] = table;
}
function createGearTable() {
	var handler = function (src) {
		selectGearDialog(src.target.gear_id, src.target.gear_lvl);
		tally();
	};
	var table = new HtmlTable();

	var cell = new Element('td', {
		'text': 'no gear',
		'class': 'clickable',
		'events': {
			'click': handler
		}});
	cell.gear_id = -1;
	cell.gear_lvl = 0;
	cell.inject(table);
	table.grab(new Element('tr').adopt(
		new Element('th', {'text': ""}),
		new Element('td', {'colspan': '5'})));
	gear.each(function (gear, gearId) {
		var row = new Element('tr').inject(table);
		row.grab(new Element('td', {text: langString(gear.name)}));
		for (var i = 0; i < 5; i++) {
			var cell = new Element('td', {
				'text': roman[i],
				'class': 'clickable',
				'events': {
					'click': handler
				}});
			cell.gear_id = gearId;
			cell.gear_lvl = i;

			row.grab(cell);
		}

		var desc_str = Array.from(gear.effects).map(function (effect) {
			if (undefined != effect.x) effect.y = x[effect.x];
			return langString(effect.type) + (effect.wclass ? " ("+effect.wclass+")":"")+': ' + (100 * effect.y[0]) + '% - ' + (100 * effect.y[4]) + '%';
		}).join(', ');
		row.grab(new Element('td', {text: desc_str}));
	});

	tables['gear'] = table;
}

function createWClassArray() {
	// create wclass array
	var wclasses_temp = new Object();
	weapons.each(function (weapon, i) {
		weapon.id = i;
		if (!(wclasses_temp[weapon.wclass])) {
			wclasses_temp[weapon.wclass] = new Array();
		}
		wclasses_temp[weapon.wclass].push(weapon);
	});
	wclasses = new Array();
	for (var wclass_temp in wclasses_temp) {
		wclasses_temp[wclass_temp].sort(function (a, b) {
			if(a.name == b.name) {
				return 0;
			}
			return (a.name < b.name) ? -1 : 1;
		});
		wclasses.push({'name': wclass_temp, 'weapons': wclasses_temp[wclass_temp]});
	}
}

function createWeaponSelects() {
	for (var i = 0; i < 2; ++i) {
		var select = $('weapon'+i);
		wclasses.each(function (wclass, i) {
			var optgroup = new Element('optgroup', {'label': langString(wclass.name)}).inject(select);
			wclass.weapons.each(function (weapon, j) {
				new Element('option', {'value': weapon.id, 'text': langString(weapon.name)}).inject(optgroup);
			});
		});

		// also set values
		select.value = sel_weap_ids[i];
		$('weapon'+i+'lvl').value = sel_weap_lvls[i];
		fillMods(i);
	}
}

var roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
function onChangeSelectClassRace(event) {
	var select = $('classraceselect');
	setClassRace(select.value[0], select.value[1]);
	fillSkills();
	resetSelected();
	tally();
}
function onChangeSelectGear(event) {
	sel['gear'].id = parseInt($("gear").value);
	tally();
}
function onChangeSelectWAmp(event) {
	sel['wamps'].id = Math.floor($("wamps0").value / 3);
	sel['wamps'].lvl = $("wamps0").value % 3;
	tally();
}
function onChangeSelectAAmp(event) {
	sel['aamps'].id = Math.floor($("wamps1").value / 4);
	sel['aamps'].lvl = $("wamps1").value % 4;
	tally()
}
function fillGear() {
	var select = $('gear');
	gear.each(function (gear, i) {
		new Element('option', {'value': i, 'text': langString(gear.name)}).inject(select);
	});

	[wamps, aamps].each(function (amps, ampsId) {
		var select_wamps = $('wamps'+ampsId);
		amps.each(function (amp, ampId) {
			var max = aamps == amps ? 4 : 3;
			for (var i = 0; i < max; i++) {
				new Element('option', {'value': ampId*max+i, 'text': langString(amp.name)+' '+roman[i]}).inject(select_wamps);
			}
		});
	});
}

function fillMods(wslot) {
	var select0 = $('weapon'+wslot+'mod0');
	var select1 = $('weapon'+wslot+'mod1');
	select0.getChildren().dispose();
	select1.getChildren().dispose();
	select0.grab(new Element('option', {'text': '-', 'value': -1}));
	select1.grab(new Element('option', {'text': '-', 'value': -1}));
	if (-1 != sel_weap_ids[wslot]) {
		mods.each(function (mod, modIndex) {
			if (mod.wclass == weapons[sel_weap_ids[wslot]].wclass) {
				select0.grab(new Element('option', {'text': langString(mod.name), 'value': modIndex}));
				select1.grab(new Element('option', {'text': langString(mod.name), 'value': modIndex}));
			}
		});
	}

}
function onChangeSelectWeapon(wslot) {
	sel_weap_ids[wslot] = parseInt($('weapon'+wslot).value);
	fillMods(wslot);
	tally();
}
function onChangeSelectWeaponLvl(wslot) {
	sel_weap_lvls[wslot] = parseInt($('weapon'+wslot+'lvl').value);
	tally();
}
function onChangeSelectMod(wslot, mslot) {
	sel_mod_ids[wslot][mslot] = parseInt($('weapon'+wslot+'mod'+mslot).value);
	tally();
}
function onChangeSelectModLvl(wslot, mslot) {
	sel_mod_lvls[wslot][mslot] = parseInt($('weapon'+wslot+'mod'+mslot+'lvl').value);
	tally();
}



window.onload = function () {
	// init vars
	parseHash();

	createWClassArray();
	// add handlers to skill/evo selection
	for (var skillId = 0; skillId < 5; skillId++) {
		for (var evoNo = 0; evoNo < 9; evoNo++) {
			$('skill'+skillId+'evo'+evoNo).skillId = skillId;
			$('skill'+skillId+'evo'+evoNo).evoNo = evoNo;
			$('skill'+skillId+'evo'+evoNo).addEvents({
				'click': onSkillEvoClick,
				'mouseover': onSkillEvoMouseOver,
				'mouseout': onSkillEvoMouseOut
			});
		}
	}
	// fill weapon selects
	createWeaponSelects();
	createClassRaceSelect();

	tables['classrace'] = $('tableKits').dispose();
	$('classrace').addEvent('click', function (src) {
		showDialog(tables['classrace']);
	});

	createGearTable();
	selectGearDialog(sel['gear'].id, sel['gear'].lvl);
	$('gearspan').set('events', {'click': function (src) {
		showDialog(tables['gear']);
	}});

	createWeaponTable();
	// init events for weapon selection and make sure the correct weapons are displayed
	for (var i = 0; i < 2; i++) {
		$('w'+i).wslotid = i;
		$('w'+i).set('events', {'click': function (src) {
			selecting_weapon = src.target.wslotid;
			showDialog(tables['weapon']);
		}});
		if (-1 == sel_weap_ids[i]) {
			$("w"+i).set('html', "no weapon");
		} else {
			$("w"+i).set('html', "" + langString(weapons[sel_weap_ids[i]].name) + " " + roman[sel_weap_lvls[i]]);
		}

		// mods
		for (var j = 0; j < 2; j++) {
			$('m'+i+j).wslotid = i;
			$('m'+i+j).mslotid = j;
			$('m'+i+j).set('events', {'click': function (src) {
				selecting_weapon = src.target.wslotid;
				selecting_mod = src.target.mslotid;
				if (-1 != sel_weap_ids[selecting_weapon]) {
					createModTable(weapons[sel_weap_ids[selecting_weapon]].wclass);
				}
			}});
			if (-1 == sel_mod_ids[i][j]) {
				$("m"+i+j).set('html', "no mod");
			} else {
				$("m"+i+j).set('html', "" + langString(mods[sel_mod_ids[i][j]].name) + " " + roman[sel_mod_lvls[i][j]]);
			}
		}
	}
	

	fillGear();
	$('gear').value = sel['gear'].id;
	$('gearlvl').value = sel['gear'].lvl;
	$('wamps0').value = sel['wamps'].id * 3 + sel['wamps'].lvl;
	$('wamps1').value = sel['aamps'].id * 4 + sel['aamps'].lvl;


	fillSkills();

	for (var skillId = 0; skillId < 5; ++skillId) {
		highlightSkillEvoSelected(skillId); // update colors
	}
	tally();
}

function removeSpaces (str) {
	return str.replace(/[^A-Za-z]/g, '');
}

function parseTextHash(hash) {
	//class        kit          skills      weapon     lvl      mods                  wamps/aamps/gear
	//var patt = /#([a-zA-Z]+)\/([a-zA-Z]+)\/([A-R]{5})\/((|[a-zA-Z]+[IVX]+)\/([A-Z][0-9]){2}\/){2}((|[a-zA-Z]+[IVX]+)\/){3}/
	var regexp = /#([a-zA-Z]+)\/([a-zA-Z]+)\/([A-R]{5})\/(|([a-zA-Z]+)([0-9]+)([A-Z]{2})([0-9]+)([A-Z]{2})([0-9]+))\/(|([a-zA-Z]+)([0-9]+)([A-Z]{2})([0-9]+)([A-Z]{2})([0-9]+))\/(|([a-zA-Z]+)([0-9]+))\/(|([a-zA-Z]+)([0-9]+))\/(|([a-zA-Z]+)([0-9]+))\//
	//var values = regexp.exec("#Sentinel/VolusMercenary/BFAAA/PhaestonVII/A0B0///SniperRifleRailAmpII//VulnerabilityVIIII/");
	var values = regexp.exec(hash);

	if (!values) return false;

	// at this point im assuming the hash is correct

	selectedClass = classes.findFirst(function (item) {return item.name == values[1]});

	selectedRace = classes[selectedClass].races.findFirst(function (race) {return removeSpaces(race.name) == values[2]});

	// skills
	values[3].split('').each(function (item) {selected.push(intToSel(item.charCodeAt() - 'A'.charCodeAt()).clone())});

	// weapons
	[0, 1].each(function (i) {
		if ("" != values[4 + 7 * i]) {
			sel_weap_ids[i] = weapons.findFirst(function (item) {return removeSpaces(item.name) == values[4 + 7 * i + 1]});
			sel_weap_lvls[i] = values[4 + 7 * i + 2] - 1;

			sel_mod_ids[i][0] = base26ToInt(values[4 + 7 * i + 3]) - 1;
			sel_mod_lvls[i][0] = values[4 + 7 * i + 4] - 1;
			sel_mod_ids[i][1] = base26ToInt(values[4 + 7 * i + 5]) - 1;
			sel_mod_lvls[i][1] = values[4 + 7 * i + 6] - 1;
		}
	});

	// gear
	['wamps','aamps','gear'].each(function (str, strId) {
		if ("" != values[18 + 3 * strId]) {
			sel[str].id = window[str].findFirst(function (item) {return removeSpaces(item.name) == values[18 + 3 * strId + 1]});
			sel[str].lvl = values[18 + 3 * strId + 2] - 1;
		}
	});
	return true;
	//	;


	//alert(patt.exec("#Sentinel/VolusMercenary/BFAAA/PhaestonVII/A0B0///SniperRifleRailAmpII//VulnerabilityVIIII/"));
	//alert("#Sentinel/VolusMercenary/BFAAA/PhaestonVII/A0B0///SniperRifleRailAmpII//VulnerabilityVIIII/".match(patt));
}
function parseHash() {
	var hash = decodeURIComponent(window.location.hash);

	if (!parseTextHash(hash)) {

		if (8 <= hash.length) {

			setClassRace(hash[1].charCodeAt() - '0'.charCodeAt(), hash[2].charCodeAt() - '0'.charCodeAt());
			for (var i = 3; i < 8; i++) {
				selected.push(intToSel(hash[i].charCodeAt() - 'A'.charCodeAt()).clone());
			}

			if (12 <= hash.length) {
				// select correct weapons
				for (var i = 0; i < 2; ++i) {
					sel_weap_ids[i] = hash[8 + 2 * i].charCodeAt() - 'A'.charCodeAt();
					sel_weap_lvls[i] = hash[8 + 2 * i + 1].charCodeAt() - '0'.charCodeAt();
				}

			}
			if (14 <= hash.length) {
				// select correct gear
				sel['gear'].id = hash[12].charCodeAt() - 'A'.charCodeAt();
				sel['gear'].lvl = hash[13].charCodeAt() - 'A'.charCodeAt();
			}
			if (16 <= hash.length) {
				// select correct wamp
				var _wamp = hash[14].charCodeAt() - 'A'.charCodeAt();
				sel['wamps'] = (-1 == _wamp) ? {'id': -1, 'lvl': 0} : {'id': Math.floor(_wamp / 3), 'lvl': _wamp % 3};
				_wamp = hash[15].charCodeAt() - 'A'.charCodeAt();
				sel['aamps'] = (-1 == _wamp) ? {'id': -1, 'lvl': 0} : {'id': Math.floor(_wamp / 3), 'lvl': _wamp % 3};
			}
			if (24 <= hash.length) {
				// select correct mods
				for (var i = 0; i < 2; ++i) {
					for (var j = 0; j < 2; ++j) {
						sel_mod_ids[i][j] = hash[16 + 4 * i + 2 * j].charCodeAt() - 'A'.charCodeAt();
						sel_mod_lvls[i][j] = hash[16 + 4 * i + 2 * j + 1].charCodeAt() - '0'.charCodeAt();
					}
				}
			}
		} else {
			setClassRace(0, 0);
			resetSelected();
		}
	}
}

