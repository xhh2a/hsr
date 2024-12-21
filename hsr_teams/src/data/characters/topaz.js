import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Topaz = create(
  {
    name: "Topaz & Numby",
    rarity: 5,
    type: ElementTypes.FIRE,
    path: Paths.HUNT,
    image: "/characters/icons/topaz.png"
  },
  Character
)
