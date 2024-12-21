import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Qingque = create(
  {
    name: "Qingque",
    rarity: 4,
    type: ElementTypes.QUANTUM,
    path: Paths.ERUDITION,
    image: "/characters/icons/qingque.png"
  },
  Character
)
