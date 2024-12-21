import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const HarmonyTrailblazer = create(
  {
    name: "Trailblazer ● Harmony",
    rarity: 5,
    type: ElementTypes.IMAGINARY,
    path: Paths.HARMONY,
    image: "/characters/icons/harmony_trailblazer.png"
  },
  Character
)
