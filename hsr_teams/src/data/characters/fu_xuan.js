import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const FuXuan = create(
  {
    name: "Fu Xuan",
    rarity: 5,
    type: ElementTypes.QUANTUM,
    path: Paths.PRESERVATION,
    image: "/characters/icons/fu_xuan.png"
  },
  Character
)
