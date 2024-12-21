import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Serval = create(
  {
    name: "Serval",
    rarity: 4,
    type: ElementTypes.LIGHTNING,
    path: Paths.ERUDITION,
    image: "/characters/icons/serval.png"
  },
  Character
)
