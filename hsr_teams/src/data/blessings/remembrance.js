import { Blessing } from "@data/blessings/blessing"
import { Paths } from "@data/path"

// Good
export const ExperienceLostMemory = create({
    name: "Experience: Lost Memory",
    rarity: 3,
    path: Paths.REMEMBRANCE,
    description: `When attacks reduce an enemy's HP that is lower than 50% for the first time this battle, 
    there is a 70/100% base chance to Freeze the enemy for 1 turn(s).`,
    enhanced: true
})

// Good
export const ExperienceMaverick = create({
    name: "Ultimate Experience: Maverick",
    rarity: 4,
    path: Paths.REMEMBRANCE,
    description: `Upon entering battle, there is a 150% base chance for all enemies to become Frozen for 1 turn(s) (enhanced: and have their SPD reduced by 30%, lasting for 1 turn(s))`,
    enhanced: true
})

// Conditional
export const ExperienceShudder = create({
    name: "Ultimate Experience: Shudder",
    rarity: 4,
    path: Paths.REMEMBRANCE,
    description: `After a character uses their Ultimate, there is a 70% base chance to apply Ice Weakness to a random/enemy with no ice weakness for 2 turn(s)`,
    enhanced: true
})

// Good
export const ExperienceInsensitivity = create({
    name: "Ultimate Experience: Insensitivity",
    rarity: 4,
    path: Paths.REMEMBRANCE,
    description: `After Disassociation is removed from an enemy, there is a 75% base chance to Freeze the enemy for 1 turn(s).`,
    enhanced: true
})

// Okay
export const ExperienceReticence = create({
    name: "Perfect Experience: Reticence",
    rarity: 5,
    path: Paths.REMEMBRANCE,
    description: `After an enemy is attacked 6/5 time(s) they have a 120/150% base chance to become Frozen for 1 turn(s).`,
    enhanced: true
})

// Good
export const ExperienceInnocence = create({
    name: "Perfect Experience: Innocence",
    rarity: 5,
    path: Paths.REMEMBRANCE,
    description: `After a character inflicts Weakness Break on an enemy, 
    there is a 100% base chance to apply Dissociation on the enemy for 1 turn(s). 
    (enhanced: This effect ignores enemies' chance to resist Frozen)`,
    enhanced: true
})