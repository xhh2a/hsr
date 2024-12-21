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
import { Aventurine } from "../characters/aventurine"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Herta,
    ]
}, CharacterSlot)

const SubDPSSlot = create({
    slot: "Sub DPS",
    characters: [
        Himeko,
        HarmonyTrailblazer,
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Asta,
        Robin,
        Tingyun
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Gallagher,
        PreservationMarch,
        Natasha,
        Aventurine
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Pela,
        Clara,
        Jade
    ]
}, CharacterSlot)

export const KuruKuru = create({
    main_character: Herta,
    character_slots: [
        MainDPSSlot,
        SubDPSSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Very High Area of Effect Damage.",
        "Does not overlap too much with other teams.",
        "Extremly new player friendly team for Perfect Fiction.",
        "Can run relics without speed. Wants effect res and crit rate.",		
    ],
    cons: [
        "Relic options generally are not usable with other team types.",
        "2-3 DPS teams require multiple fully built characters.",
        "Slow in single target focused content.",
    ],
    details: `Kuru Kuru team is a great free option for Perfect Fiction with relatively low investment. 
    It is one of three recommended starting teams for new players. 
    If you do not have Himeko, use Asta as the Sub DPS and Harmony Trailblazer as the Buffer instead.`,
    name: "Kuru Kuru",
    background: "/characters/splash/herta.png",
    pro_emoji: "/characters/emojis/himeko_smirk.png",
    con_emoji: "/characters/emojis/herta_question.png",
}, Team)
