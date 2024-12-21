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

const MainDPSSlot = create({
    slot: "First DPS",
    characters: [
        Kafka,
        Sampo
    ]
}, CharacterSlot)

const SubDPSSlot = create({
    slot: "Second DPS",
    characters: [
        BlackSwan,
        Guinaifen
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Robin,
        Asta,
        Sparkle,

    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Huohuo,
        Natasha
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Acheron,
        Ruanmei,
        Pela
    ]
}, CharacterSlot)

export const NihilityFalls = create({
    main_character: Kafka,
    character_slots: [
        MainDPSSlot,
        SubDPSSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "One of the strongest teams for 0-cycling.",
        "Generally usable for all content.",
        "Requires low investment thanks to team comp.",
        "Does not overlap too much with other teams.",
    ],
    cons: [
        "Reliant on multiple 5☆ to function.",
        "Poor alternative options for team roles.",
    ],
    details: `The rains of IX slowly erases all it falls on. 
    Nihility Falls rely on a one-two punch combo of applying debuffs and triggering immediate damage via Kafka or Acheron. 
    That is in addition to the passive DoT damage. 
    If using 3 Damagers, the last unit should be SP positive (Sparkle or Natasha/Luocha/Aventurine). 
    Kafka/Black Swan/Acheron/Sparkle is one of the three strongest teams currently in game.`,
    name: "Nihility Falls",
    background: "/characters/splash/kafka.png",
    pro_emoji: "/characters/emojis/kafka_toast.png",
    con_emoji: "/characters/emojis/sampo_trash.png"
}, Team)
