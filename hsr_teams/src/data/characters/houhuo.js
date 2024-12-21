import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Huohuo = create(
  {
    name: "Huohuo",
    rarity: 5,
    type: ElementTypes.WIND,
    path: Paths.ABUNDANCE,
    image: "/characters/icons/huohuo.png"
  },
  Character
)
