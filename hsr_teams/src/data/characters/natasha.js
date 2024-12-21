import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Natasha = create(
  {
    name: "Natasha",
    rarity: 4,
    type: ElementTypes.PHYSICAL,
    path: Paths.ABUNDANCE,
    image: "/characters/icons/natasha.png"
  },
  Character
)
