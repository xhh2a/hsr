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
import { Huohuo } from "../characters/houhuo"
import { Luocha } from "../characters/luocha"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Firefly,
    ]
}, CharacterSlot)

const SuperbreakSlot = create({
    slot: "Superbreak",
    characters: [
        HarmonyTrailblazer,
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Ruanmei,
        Asta,
        Bronya,
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Gallagher,
        Huohuo,
        Luocha,
        Natasha
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Himeko,
        Pela,
        Tingyun
    ]
}, CharacterSlot)

export const Firebreak = create({
    main_character: Firefly,
    character_slots: [
        MainDPSSlot,
        SuperbreakSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Good F2P support options.",
        "One of the strongest teams for 0-cycling.",
        "Generally usable for all content.",
        "Requires low investment thanks to team comp and stat conversions."						
    ],
    cons: [
        "Maximum damage ceiling requires very rare relics.",
        "Can't run with other break teams.",
        "No alternative options for team roles."
    ],
    details: `Firebreak is the Premium Break team which does well in all content. 
    It is also one of the easier teams to be able to run without a sustain thanks to action delaying the enemy with break. 
    This team performs well with low investment and can be considered an updated 'Jingliu Hypercarry' for new players.`,
    name: "Firebreak",
    background: "/characters/splash/firefly.png"
}, Team)
