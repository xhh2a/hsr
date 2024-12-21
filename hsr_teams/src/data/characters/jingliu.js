import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Jingliu = create(
  {
    name: "Jingliu",
    rarity: 5,
    type: ElementTypes.ICE,
    path: Paths.DESTRUCTION,
    image: "/characters/icons/jingliu.png"
  },
  Character
)
