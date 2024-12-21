import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Jade = create(
  {
    name: "Jade",
    rarity: 5,
    type: ElementTypes.QUANTUM,
    path: Paths.ERUDITION,
    image: "/characters/icons/jade.png"
  },
  Character
)
