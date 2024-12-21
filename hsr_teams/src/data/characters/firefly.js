import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Firefly = create(
  {
    name: "Firefly",
    rarity: 5,
    type: ElementTypes.FIRE,
    path: Paths.DESTRUCTION,
    image: "/characters/icons/firefly.png"
  },
  Character
)
