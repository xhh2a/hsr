import { object, array, string, enums, optional } from "superstruct"
import { Character } from "../characters/character"

export const CharacterSlot = object({
    slot: string(),
    characters: array(
        Character
    )
})

export const Team = object({
    name: string(),
    character_slots: array(CharacterSlot),
    main_character: Character,
    pros: array(string()),
    cons: array(string()),
    details: string(),
    background: string(),
    pro_emoji: optional(string()),
    con_emoji: optional(string()),
})