// JavaScript source code
let attributeList = [{ name: 'Agility', score: 4 }, { name: 'Smarts', score: 4 }, { name: 'Spirit', score: 4 }, { name: 'Strength', score: 4 }, { name: 'Vigor', score: 4 }];

let skillList = [{ name: "Academics(Sma)", score: 0 }, { name: "Athletics(Agi)", score: 4 }, { name: "Battle(Sma)", score: 0 }, { name: "Boating(Agi)", score: 0 }, { name: "Common Knowledge(Sma)", score: 4 },
{ name: "Driving(Agi)", score: 0 }, { name: "Electronics(Sma)", score: 0 }, { name: "Fighting(Agi)", score: 0 }, { name: "Gambling(Sma)", score: 0 }, { name: "Hacking(Sma)", score: 0 },
{ name: "Healing(Sma)", score: 0 }, { name: "Intimidation(Spi)", score: 0 }, { name: "Language(Sma)", score: 0 }, { name: "Notice(Sma)", score: 4 }, { name: "Occult(Sma)", score: 0 },
{ name: "Performance(Spi)", score: 0 }, { name: "Persuasion(Spi)", score: 4 }, { name: "Piloting(Agi)", score: 0 }, { name: "Repair(Sma)", score: 0 }, { name: "Research(Sma)", score: 0 },
{ name: "Riding(Agi)", score: 0 }, { name: "Science(Sma)", score: 0 }, { name: "Shooting(Agi)", score: 0 }, { name: "Stealth(Agi)", score: 4 }, { name: "Survival(Sma)", score: 0 }, { name: "Taunt(Sma)", score: 0 },
{ name: "Thievery(Agi)", score: 0 }, { name: "Arcane Skill()", score: 0 }];

let herosJourneyList = [];

let gearList = [];

let showInfo = '';
let showType = '';
let showHindrance = '';

let strain = null;
let pace = null;
let parry = null;
let toughness = null;
let ppe = null;
let isp = null;
let hindrancePoints = 4;
let pointsFromH = 0;
let selectedRace = '';
let selectedArceType = '';
let selectedHindrances = [];
let selectedEdges = [];
let attributePoints = 5;
let skillPoints = 15;