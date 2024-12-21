import { create } from "superstruct"

import { CharacterSlot, Team } from "./team"
import { Topaz } from "../characters/topaz"
import { Aventurine } from "../characters/aventurine"
import { Clara } from "../characters/clara"
import { Robin } from "../characters/robin"
import { Acheron } from "../characters/acheron"
import { Jingyuan } from "../characters/jingyuan"
import { Ratio } from "../characters/ratio"
import { Himeko } from "../characters/himeko"
import { Asta } from "../characters/asta"
import { Huohuo } from "../characters/houhuo"
import { Ruanmei } from "../characters/ruanmei"
import { PreservationMarch } from "../characters/preservation_march"
import { Blade } from "../characters/blade"
import { Jade } from "../characters/jade"
import { Sparkle } from "../characters/sparkle"
import { Herta } from "../characters/herta"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Topaz,
        Ratio,
        Jingyuan,
    ]
}, CharacterSlot)

const SubDPSSlot = create({
    slot: "Sub DPS",
    characters: [
        Clara,
        Himeko,
        Blade,
        Jade,
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Robin,
        Asta,
        Sparkle
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Aventurine,
        Huohuo,
        PreservationMarch
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Acheron,
        Ruanmei,
        Herta,
    ]
}, CharacterSlot)

export const IPC = create({
    main_character: Topaz,
    character_slots: [
        MainDPSSlot,
        SubDPSSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Generally usable for all content.",
        "One of the strongest teams for 0-cycling.",
        "Can run relics without high speed. Wants crit rate.",
        "Does not overlap too much with other teams.",
        "Flexible team composition.",
    ],
    cons: [
        "Reliant on multiple 5☆ to reach max potential.",
        "Most expensive team to pull and build.",
        "Relic options generally are not usable with other team types.",
        "2-3 DPS teams require multiple fully built characters."
    ],
    details: `IPC Counterattack features strong single target counterattacks that is functionally
     Area of Effect with high enough investment from the player. 
     It is one of the most comfortable teams in game able to consistently clear all endgame content.
     The Sub DPS you use will vary depending on the content in question. 
     Dr. Ratio is recommended to be run with the Debuff team instead of IPC if you have him and do not have Topaz.`,
    name: "IPC Counterattack",
    background: "/characters/splash/topaz.png",
    pro_emoji: "/characters/emojis/topaz_up.png",
    con_emoji: "/characters/emojis/topaz_shock.png"
}, Team)
