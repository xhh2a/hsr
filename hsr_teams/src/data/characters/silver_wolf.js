import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const SilverWolf = create(
  {
    name: "Silver Wolf",
    rarity: 5,
    type: ElementTypes.QUANTUM,
    path: Paths.NIHILITY,
    image: "/characters/icons/silver_wolf.png"
  },
  Character
)
