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
import { Sparkle } from "../characters/sparkle"
import { Luka } from "../characters/luka"
import { Xueyi } from "../characters/xueyi"
import { Sushang } from "../characters/sushang"
import { Boothill } from "../characters/boothill"
import { Huohuo } from "../characters/houhuo"
import { Serval } from "../characters/serval"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Boothill,
        Xueyi,
        Asta,
        Sushang,
        Serval
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
        Bronya,
        Robin,
        Sparkle,
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Gallagher,
        Natasha,
        Huohuo
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Himeko,
        Pela,
        Luka,
    ]
}, CharacterSlot)

export const Hatblazer = create({
    main_character: HarmonyTrailblazer,
    character_slots: [
        MainDPSSlot,
        SuperbreakSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Extremly new player friendly team for Memory of Chaos.",
        "Very High Single Target Damage.",
        "Flexible team composition.",	
    ],
    cons: [
        "Worse than other break team options.",
        "Can't run with other break teams.",
        "Slow in multi target focused content.",
        "Large number of characters needed for type coverage unless you have Boothill or Xueyi.",
    ],
    details: `One of three recommended teams for new players and also one of two current break options in game. 
    New players should use Xueyi, Asta, Serval, Sushang, or Luka as the main break focused damager depending on content. 
    This team primarily focuses on using Harmony Trailblazer's superbreak to deal damage to enemies. 
    The main DPS will vary based on the weaknesses in endgame content.`,
    name: "Hatblazer",
    background: "/characters/splash/penacony.jpg",
    pro_emoji: "/characters/emojis/baseball_happy.png",
    con_emoji: "/characters/emojis/baseball_sad.png"
}, Team)
