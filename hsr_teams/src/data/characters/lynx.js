import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Lynx = create(
  {
    name: "Lynx",
    rarity: 4,
    type: ElementTypes.QUANTUM,
    path: Paths.ABUNDANCE,
    image: "/characters/icons/lynx.png"
  },
  Character
)
