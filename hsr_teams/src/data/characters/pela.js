import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Pela = create(
  {
    name: "Pela",
    rarity: 4,
    type: ElementTypes.ICE,
    path: Paths.NIHILITY,
    image: "/characters/icons/pela.png"
  },
  Character
)
