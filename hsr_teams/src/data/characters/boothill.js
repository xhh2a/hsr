import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Boothill = create(
  {
    name: "Boothill",
    rarity: 5,
    type: ElementTypes.PHYSICAL,
    path: Paths.HUNT,
    image: "/characters/icons/boothill.png"
  },
  Character
)
