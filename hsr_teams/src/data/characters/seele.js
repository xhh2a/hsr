import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Seele = create(
  {
    name: "Seele",
    rarity: 5,
    type: ElementTypes.QUANTUM,
    path: Paths.HUNT,
    image: "/characters/icons/seele.png"
  },
  Character
)
