import { Blessing } from "@data/blessings/blessing"
import { Paths } from "@data/path"

// Good
export const RainOfTruth = create({
    name: "Rain of Truth",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `For each Abundance Blessing, increase allies' respective Max HP by 5/7%. 
    This effect can stack up to a max of 6/9 times. (30/63).`,
    enhanced: true
})

export const SweetDew = create({
    name: "Sweet Dew",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `Increase Incoming Healing by 12/18%.`,
    enhanced: false
})

export const ExtendedLife = create({
    name: "ExtendedLife",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `Upon entering battle, characters restore HP equal to 24/36% of their Max HP.`,
    enhanced: false
})

// Good
export const Seal = create({
    name: "Seal",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `After a character inflicts Weakness Break on an enemy, 
    restores HP to the character equal to 16/24% of their Max HP.`,
    enhanced: false
})

export const DispelDisaster = create({
    name: "Dispel Disaster",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `After a character is healed, increases their DEF by 24/36% for 1 turn(s).`,
    enhanced: false
})

export const Rebirth = create({
    name: "Rebirth",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `After a character provides healing, they resotre HP equal to 12/18% of their Max HP. 
    This effect can only trigger once per action.`,
    enhanced: false
})

// Okay
export const VictoriousForce = create({
    name: "VictoriousForce",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `After a character is healed, increases their SPD by 10/15% for 1 turn(s).`,
    enhanced: false
})

// Good
export const Blessing = create({
    name: "Blessing",
    rarity: 3,
    path: Paths.ABUNDANCE,
    description: `After a character provides healing, there is a 30/45% fixed chance to recover 1 Skill Point. 
    This effect can only trigger once per action.`,
    enhanced: true
})

export const GoodDeedsComeAfterOldSins = create({
    name: "Good Deeds Come After Old Sins",
    rarity: 4,
    path: Paths.ABUNDANCE,
    description: `Restores HP equal to 20$ of the Charge value when Dewdrop ruptures, 
    up to 18/24% of the character's Max HP (enhanced: false less than 12% of their Max HP).`,
    enhanced: false
})

export const MortalsOfBuddah = create({
    name: "Mortals of the Buddah-Field",
    rarity: 4,
    path: Paths.ABUNDANCE,
    description: `When a character's HP is full, increases the CHarging Efficiency for Dewdrop by 80/120%`,
    enhanced: false
})

export const SalvationFromDamnation = create({
    name: "SalvationFromDamnation",
    rarity: 4,
    path: Paths.ABUNDANCE,
    description: `When a Dewdrop breaks, there is a 65%/100% chance to remove 1 debuff on the character`,
    enhanced: false
})

// Good
export const PreciousMoonCandlelight = create({
    name: "Precious Moon-Like Candlelight",
    rarity: 4,
    path: Paths.ABUNDANCE,
    description: `When a character provides healing to allies, increases the ATK of one/all allies by 50% for 1 turn(s)`,
    enhanced: true
})

// Okay
export const AversionToSuffering = create({
    name: "Aversion to Suffering",
    rarity: 4,
    path: Paths.ABUNDANCE,
    description: `After launching attacks, characters deal additional DMG equal to 36/42% of the character's Max HP (~1000-3000 dmg)`,
    enhanced: false
})

// Good
export const ClearLuciteBody = create({
    name: "Clear Lucite Body",
    rarity: 4,
    path: Paths.ABUNDANCE,
    description: `When a character's HP is full, reduces their DMG taken by 36% (enhanced: and increases their Effect RES by 27%)`,
    enhanced: true
})

// Okay
export const PrajnaBoat = create({
    name: "Pragna Boat",
    rarity: 4,
    path: Paths.ABUNDANCE,
    description: `When being healed by an ally, characters restore extra HP equal to 30/45% of the amount of HP healed`,
    enhanced: false
})

export const ProsperityLongevity = create({
    name: "Prosperity, Longevity",
    rarity: 5,
    path: Paths.ABUNDANCE,
    description: `Charges Dewdrop when a character's HP is restored. The Charge value is equal to 100% of the amount of healing received (enchanced: and increases the DMG of Dewdrop by 40%)`,
    enhanced: false
})


export const MudraOfBlessing = create({
    name: "Mudra of Blessing",
    rarity: 5,
    path: Paths.ABUNDANCE,
    description: `Charges Dewdrop at the beginning of a character's turn. 
    The Charge value is equal to 60/70% of their current/Max HP.`,
    enhanced: false
})

// I guess if nothing else to get
export const BeingOfAbundance = create({
    name: "Being of Abundance, Becoming One Mind",
    rarity: 5,
    path: Paths.ABUNDANCE,
    description: `When a character provides healing, 
    allies other than the healed target will also gain HP eqaul to 30% of the Outgoing Healing. 
    (enhanced: Increases the ATK of all allies by 15% of the amount healed, 
    stacking up to no more than 80% of each ally's respective Base ATK and lasts until the end of the next turn.)`,
    enhanced: true
})