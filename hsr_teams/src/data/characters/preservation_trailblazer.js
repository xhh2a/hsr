import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const PreservationTrailblazer = create(
  {
    name: "Trailblazer ● Preservation",
    rarity: 5,
    type: ElementTypes.FIRE,
    path: Paths.PRESERVATION,
    image: "/characters/icons/preservation_trailblazer.png"
  },
  Character
)
