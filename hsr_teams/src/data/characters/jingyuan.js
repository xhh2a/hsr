import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Jingyuan = create(
  {
    name: "Jingyuan",
    rarity: 5,
    type: ElementTypes.LIGHTNING,
    path: Paths.ERUDITION,
    image: "/characters/icons/jingyuan.png"
  },
  Character
)
