import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Ratio = create(
  {
    name: "Dr. Ratio",
    rarity: 5,
    type: ElementTypes.IMAGINARY,
    path: Paths.HUNT,
    image: "/characters/icons/ratio.png"
  },
  Character
)
