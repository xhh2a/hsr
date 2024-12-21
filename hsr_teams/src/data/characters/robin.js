import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Robin = create(
  {
    name: "Robin",
    rarity: 5,
    type: ElementTypes.PHYSICAL,
    path: Paths.HARMONY,
    image: "/characters/icons/robin.png"
  },
  Character
)
