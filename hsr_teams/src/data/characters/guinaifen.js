import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Guinaifen = create(
  {
    name: "Guinaifen",
    rarity: 4,
    type: ElementTypes.FIRE,
    path: Paths.NIHILITY,
    image: "/characters/icons/guinaifen.png"
  },
  Character
)
