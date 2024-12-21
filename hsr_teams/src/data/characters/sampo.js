import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Sampo = create(
  {
    name: "Sampo",
    rarity: 4,
    type: ElementTypes.WIND,
    path: Paths.NIHILITY,
    image: "/characters/icons/sampo.png"
  },
  Character
)
