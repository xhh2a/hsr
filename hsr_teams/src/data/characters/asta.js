import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Asta = create(
  {
    name: "Asta",
    rarity: 4,
    type: ElementTypes.FIRE,
    path: Paths.HARMONY,
    image: "/characters/icons/asta.png"
  },
  Character
)
