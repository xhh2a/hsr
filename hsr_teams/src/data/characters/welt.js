import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Welt = create(
  {
    name: "Welt",
    rarity: 5,
    type: ElementTypes.IMAGINARY,
    path: Paths.NIHILITY,
    image: "/characters/icons/welt.png"
  },
  Character
)
