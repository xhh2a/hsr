import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Bronya = create(
  {
    name: "Bronya",
    rarity: 5,
    type: ElementTypes.WIND,
    path: Paths.HARMONY,
    image: "/characters/icons/bronya.png"
  },
  Character
)
