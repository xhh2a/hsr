import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const BlackSwan = create(
  {
    name: "Black Swan",
    rarity: 5,
    type: ElementTypes.WIND,
    path: Paths.NIHILITY,
    image: "/characters/icons/black_swan.png"
  },
  Character
)
