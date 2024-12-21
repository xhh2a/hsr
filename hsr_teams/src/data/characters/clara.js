import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Clara = create(
  {
    name: "Clara",
    rarity: 5,
    type: ElementTypes.PHYSICAL,
    path: Paths.DESTRUCTION,
    image: "/characters/icons/clara.png"
  },
  Character
)
