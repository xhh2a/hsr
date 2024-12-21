import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Hanya = create(
  {
    name: "Hanya",
    rarity: 4,
    type: ElementTypes.PHYSICAL,
    path: Paths.HARMONY,
    image: "/characters/icons/hanya.png"
  },
  Character
)
