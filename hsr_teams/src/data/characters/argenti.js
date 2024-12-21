import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Argenti = create(
  {
    name: "Argenti",
    rarity: 5,
    type: ElementTypes.PHYSICAL,
    path: Paths.ERUDITION,
    image: "/characters/icons/argenti.png"
  },
  Character
)
