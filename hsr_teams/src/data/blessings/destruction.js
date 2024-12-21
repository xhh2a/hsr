import { Blessing } from "@data/blessings/blessing"
import { Paths } from "@data/path"

// Okay
export const PrimordialBlackHole = create({
    name: "Priomordial Black Hole",
    rarity: 3,
    path: Paths.DESTRUCTION,
    description: `When attacks reduce an enemy's HP that is lower than 50% for the first time this battle, 
    there is a 70/100% base chance to Freeze the enemy for 1 turn(s).`,
    enhanced: true
})
