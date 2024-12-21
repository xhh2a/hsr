import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Sparkle = create(
  {
    name: "Sparkle",
    rarity: 5,
    type: ElementTypes.QUANTUM,
    path: Paths.HARMONY,
    image: "/characters/icons/sparkle.png"
  },
  Character
)
