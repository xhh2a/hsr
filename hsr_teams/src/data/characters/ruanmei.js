import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Ruanmei = create(
  {
    name: "Ruanmei",
    rarity: 5,
    type: ElementTypes.ICE,
    path: Paths.HARMONY,
    image: "/characters/icons/ruanmei.png"
  },
  Character
)
