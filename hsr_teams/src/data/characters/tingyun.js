import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Tingyun = create(
  {
    name: "Tingyun",
    rarity: 4,
    type: ElementTypes.LIGHTNING,
    path: Paths.HARMONY,
    image: "/characters/icons/tingyun.png"
  },
  Character
)
