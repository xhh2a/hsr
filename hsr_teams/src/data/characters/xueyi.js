import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Xueyi = create(
  {
    name: "Xueyi",
    rarity: 4,
    type: ElementTypes.QUANTUM,
    path: Paths.DESTRUCTION,
    image: "/characters/icons/xueyi.png"
  },
  Character
)
