import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Aventurine = create(
  {
    name: "Aventurine",
    rarity: 5,
    type: ElementTypes.IMAGINARY,
    path: Paths.PRESERVATION,
    image: "/characters/icons/aventurine.png"
  },
  Character
)
