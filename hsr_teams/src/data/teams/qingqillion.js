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
import { Qingque } from "../characters/qingque"
import { Aventurine } from "../characters/aventurine"
import { SilverWolf } from "../characters/silver_wolf"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        DHIL,
        Qingque,
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Sparkle,
        Hanya,
    ]
}, CharacterSlot)

const SpeedSlot = create({
    slot: "Speed",
    characters: [
        Asta,
        Robin,
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Huohuo,
        Luocha,
        Natasha,
        Aventurine
    ]
}, CharacterSlot)


const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Ruanmei,
        SilverWolf,
        Tingyun,
        Pela,
    ]
}, CharacterSlot)

export const Qingquillion = create({
    main_character: Qingque,
    character_slots: [
        MainDPSSlot,
        HarmonySlot,
        SpeedSlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Very High Burst Damage.",
        "Generally usable for all content.",
        "Extremly new player friendly team for all content.",				
    ],
    cons: [
        "Wants Supports used in other teams.",
        "Inconsistent performance due to RNG, more attempts required than other teams.",
        "Skill Point management is an issue without Sparkle or Eidolons",
    ],
    details: `Are you down for a game of Celestial Jade? No credits? 
    That's okay, you can pay with Skill Points! 
    The prize is a Qingquillion damage to enemies. 
    This is one of three recommended new player teams. 
    Qingque and Hanya can be directly upgraded into Dan Heng and Sparkle to improve the consistency of the team. 
    It is also the only new player team that is good in all content.`,
    name: "Qingquillion",
    background: "/characters/splash/aurum.png",
    pro_emoji: "/characters/emojis/qingque_fish.png",
    con_emoji: "/characters/emojis/hanya_speechless.png"
}, Team)
