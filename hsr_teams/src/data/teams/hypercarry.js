import { create } from "superstruct"

import { CharacterSlot, Team } from "./team"
import { Clara } from "../characters/clara"
import { Himeko } from "../characters/himeko"
import { Asta } from "../characters/asta"
import { PreservationMarch } from "../characters/preservation_march"
import { Jade } from "../characters/jade"
import { Herta } from "../characters/herta"
import { Pela } from "../characters/pela"
import { HarmonyTrailblazer } from "../characters/harmony_trailblazer"
import { Natasha } from "../characters/natasha"
import { Gallagher } from "../characters/gallagher"
import { Robin } from "../characters/robin"
import { Tingyun } from "../characters/tingyun"
import { Firefly } from "../characters/firefly"
import { Ruanmei } from "../characters/ruanmei"
import { Bronya } from "../characters/bronya"
import { Blade } from "../characters/blade"
import { Sparkle } from "../characters/sparkle"
import { Hanya } from "../characters/hanya"
import { Luocha } from "../characters/luocha"
import { Jingliu } from "../characters/jingliu"
import { Acheron } from "../characters/acheron"
import { Huohuo } from "../characters/houhuo"
import { DHIL } from "../characters/dhil"

const MainDPSSlot = create({
    slot: "First DPS",
    characters: [
        Jingliu,
    ]
}, CharacterSlot)

const SubDPSSlot = create({
    slot: "Second DPS",
    characters: [
        Blade,
        DHIL,
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Sparkle,
        Hanya,
        Asta,
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Luocha,
        Gallagher,
        Huohuo
    ]
}, CharacterSlot)


const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Ruanmei,
        Robin,
        Acheron,
    ]
}, CharacterSlot)

export const Hypercarry = create({
    main_character: Jingliu,
    character_slots: [
        MainDPSSlot,
        SubDPSSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Very High Burst Damage.",
        "Generally usable for all content.",
        "Benefits from multiple archetype bonuses.",
        "Flexible team composition.",				
    ],
    cons: [
        "Reliant on multiple 5☆ to reach max potential.",
        "Wants Main DPS used in other teams.",
        "Wants Supports used in other teams.",
        "Multiple Eidolons are recommended.",
    ],
    details: `A new High Cloud Quintet assembles to defeat any opponents in their way! 
    This version of the Jingliu team is aimed specifically at 0-cycling content, while the Unlimited Blade Works composition is better suited for general gameplay. 
    The primary reason for using multiple DPS with Jingliu for 0-cycling is the downtime in turns required to recharge Jingliu's enhanced attack. 
    This leads to her performing worse against off-type bosses. 
    As Jingliu's kit is fully capable on her own without need for additional supports, a second or third Main DPS can be used with her to boost damage.`,
    name: "Hypercarry Squad",
    background: "/characters/splash/jingliu.jpg",
    pro_emoji: "/characters/emojis/dhil_dragon.png",
    con_emoji: "/characters/emojis/jingliu_daze.png",
}, Team)
