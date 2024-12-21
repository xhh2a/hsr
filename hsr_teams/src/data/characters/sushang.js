import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Sushang = create(
  {
    name: "Sushang",
    rarity: 4,
    type: ElementTypes.PHYSICAL,
    path: Paths.HUNT,
    image: "/characters/icons/sushang.png"
  },
  Character
)
