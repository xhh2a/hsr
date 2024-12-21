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
import { SilverWolf } from "../characters/silver_wolf"
import { Xueyi } from "../characters/xueyi"
import { Seele } from "../characters/seele"
import { FuXuan } from "../characters/fu_xuan"
import { Lynx } from "../characters/lynx"
import { Huohuo } from "../characters/houhuo"
import { Acheron } from "../characters/acheron"
import { BlackSwan } from "../characters/black_swan"
import { Kafka } from "../characters/kafka"
import { Sampo } from "../characters/sampo"
import { Guinaifen } from "../characters/guinaifen"
import { Ratio } from "../characters/ratio"
import { Aventurine } from "../characters/aventurine"
import { Welt } from "../characters/welt"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Acheron,
        Ratio
    ]
}, CharacterSlot)

const SubDPSSlot = create({
    slot: "Support",
    characters: [
        SilverWolf,
        Pela,
        Sparkle
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Robin,
        Guinaifen,
        Welt,
        Asta,

    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Aventurine,
        Gallagher
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Kafka,
        Ruanmei,
        BlackSwan,
    ]
}, CharacterSlot)

export const Debuff = create({
    main_character: Acheron,
    character_slots: [
        MainDPSSlot,
        SubDPSSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "One of the strongest teams for 0-cycling with Acheron.",
        "Generally usable for all content.",
        "Flexible team composition.",
    ],
    cons: [
        "Weak in multi wave content.",
        "Very expensive team to pull and build.",
        "Wants Main DPS used in other teams.",
        "Wants Supports used in other teams.",
        "Multiple Eidolons and Lightcones are recommended.",
    ],
    details: `The debuffing team is a hybrid between Nihility Falls and IPC for players who do not have a full set of either team. 
    Robin and Aventurine should only be used if they have their signature light cones to apply debuffs. 
    Otherwise Gallagher, or one of the DoT units are recommended instead.`,
    name: "Hybrid Debuff",      
    background: "/characters/splash/acheron.png",
    pro_emoji: "/characters/emojis/acheron_peach.png",
    con_emoji: "/characters/emojis/robin_cringe.png",
}, Team)
