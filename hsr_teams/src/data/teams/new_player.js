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
import { Qingque } from "../characters/qingque"
import { Serval } from "../characters/serval"
import { PreservationTrailblazer } from "../characters/preservation_trailblazer"

const MainDPSSlot = create({
    slot: "Main DPS",
    characters: [
        Qingque,
        Serval,
        Clara,
    ]
}, CharacterSlot)

const SustainSlot = create({
    slot: "Shielder",
    characters: [
        PreservationMarch,
    ]
}, CharacterSlot)

const HarmonySlot = create({
    slot: "Buffer",
    characters: [
        Asta,
        Bronya
    ]
}, CharacterSlot)


const HealSlot = create({
    slot: "Healer",
    characters: [
        Natasha,
    ]
}, CharacterSlot)

const ExtraSustainSlot = create({
    slot: "Extra Sustain",
    characters: [
        PreservationTrailblazer,
    ]
}, CharacterSlot)

export const NewPlayer = create({
    main_character: PreservationMarch,
    character_slots: [
        SustainSlot,
        HarmonySlot,
        MainDPSSlot,
        HealSlot,
        ExtraSustainSlot
    ],
    pros: [
        "All units can be used in other teams for late game content.",
        "Generally usable for all story content.",
        "High survivalbility due to double sustain. Can go triple sustain if desired.",				
    ],
    cons: [
        "Very slow to clear content.",
        "Not usable for end game content.",
    ],
    details: `Come take a sightseeing tour with March 7 as your guide! 
    This team is designed to be able to beat all story content in the game when 
    a new player is farming materials for their other teams for endgame content. 
    For maximum Trailblaze Power efficiency, the top 4 units listed can be used in Qingquillion and Kuru Kuru teams for endgame content. 
    In addition, the top units listed here are guaranteed to exist for all players. 
    Note that placing the sustains on the opposite sides of the team is very important. 
    Also important is to get the traces for March and Natasha that clears debuffs. 
    If you managed to get Clara you can use her instead of QQ/Serval. Bronya, Clara, and Himeko are the three recommended non limited 5☆ units to build. 
    This team can beat Simulated Universe on the hardest difficulty but you will have many failed runs.`,
    name: "Trailblaze Tour",
    background: "/characters/splash/march.png",
    pro_emoji: "/characters/emojis/march_photo.png",
    con_emoji: "/characters/emojis/march_cry.png"
}, Team)
