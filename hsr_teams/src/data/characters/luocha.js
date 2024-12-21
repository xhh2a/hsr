import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Luocha = create(
  {
    name: "Luocha",
    rarity: 5,
    type: ElementTypes.IMAGINARY,
    path: Paths.ABUNDANCE,
    image: "/characters/icons/luocha.png"
  },
  Character
)
