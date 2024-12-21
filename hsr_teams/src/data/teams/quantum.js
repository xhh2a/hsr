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

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Seele,
    ]
}, CharacterSlot)

const SpeedSlot = create({
    slot: "Buffer",
    characters: [
        Sparkle,
        Asta
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        SilverWolf,
        Pela,
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        FuXuan,
        Lynx,
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Ruanmei,
        Xueyi,
        Jade,
    ]
}, CharacterSlot)

export const QuantumTime = create({
    main_character: Seele,
    character_slots: [
        MainDPSSlot,
        SpeedSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Generally usable for all content.",
        "Flexible team composition.",
        "Does not overlap too much with other teams.",		
        "Can 0-cycle content with high investment.",
    ],
    cons: [
        "Reliant on multiple 5☆ to function.",
        "No alternative options for team roles.",
        "Some 5☆ characters have no uses in other teams and are at risk of becoming obsolete.",
        "High relic investment requirement."
    ],
    details: `This team has the highest upfront damage against a single target. 
    However other teams will do better against multi-enemy and multi turn content. 
    There are no real 4☆ alternatives in this team although some poor options are listed.`,
    name: "Quantum Time",
    background: "/characters/splash/seele.png",
    pro_emoji: "/characters/emojis/silverwolf_gum.png",
    con_emoji: "/characters/emojis/xueyi_annoyed.png"
}, Team)
