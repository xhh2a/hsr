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
import { Huohuo } from "../characters/houhuo"
import { Argenti } from "../characters/argenti"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Blade,
        Jingliu,
        Argenti
    ]
}, CharacterSlot)

const SpeedSlot = create({
    slot: "Buffer",
    characters: [
        Bronya,
        Asta,
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Robin,
        Sparkle,
        Tingyun,
        Hanya,
        Jade,
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Sustain",
    characters: [
        Luocha,
        Huohuo,
        Gallagher,
    ]
}, CharacterSlot)

const NoSustainSlot = create({
    slot: "No Sustain",
    characters: [
        Ruanmei,
        Pela,
        Herta
    ]
}, CharacterSlot)

export const UBW = create({
    main_character: Blade,
    character_slots: [
        MainDPSSlot,
        SpeedSlot,
        HarmonySlot,
        SustainSlot,
        NoSustainSlot
    ],
    pros: [
        "Blade can benefit from almost all Whimsicality effects.",
        "Generally usable for all content.",
        "Flexible team composition.",
    ],
    cons: [
        "Reliant on multiple 5☆ to reach max potential.",
        "Wants Supports used in other teams.",
    ],
    details: `A high risk high reward team that benefits from giving actions to Blade or Jingliu.
     Jingliu will generally perform well even if she is missing many of her supporting cast but she tends to not benefit from Whimsicality effects. 
     On the flip side Blade is one of the units with the lowest floors without support. 
     Blade does benefit from multiple paths in game which means he can partner well with many other characters.
     As a result Blade should only be built by patient new players. 
     Argenti's best team composition is similar to a speed hypercarry team with Huohuo as his best sustain. 
     Jade should only be used in place of the Buffer if Blade and Luocha are used as well.`,
    name: "Unlimited Blade Works",
    background: "/characters/splash/blade.png",
    pro_emoji: "/characters/emojis/blade_ready.png",
    con_emoji: "/characters/emojis/blade_bleed.png",
}, Team)
