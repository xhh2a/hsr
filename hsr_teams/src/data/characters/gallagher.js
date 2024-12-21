import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Gallagher = create(
  {
    name: "Gallagher",
    rarity: 4,
    type: ElementTypes.FIRE,
    path: Paths.ABUNDANCE,
    image: "/characters/icons/gallagher.png"
  },
  Character
)
