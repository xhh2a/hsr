import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Luka = create(
  {
    name: "Luka",
    rarity: 4,
    type: ElementTypes.PHYSICAL,
    path: Paths.NIHILITY,
    image: "/characters/icons/luka.png"
  },
  Character
)
