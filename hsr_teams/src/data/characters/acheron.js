import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Acheron = create(
  {
    name: "Acheron",
    rarity: 5,
    type: ElementTypes.LIGHTNING,
    path: Paths.NIHILITY,
    image: "/characters/icons/acheron.png"
  },
  Character
)
