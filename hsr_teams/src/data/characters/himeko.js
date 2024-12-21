import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Himeko = create(
  {
    name: "Himeko",
    rarity: 5,
    type: ElementTypes.FIRE,
    path: Paths.ERUDITION,
    image: "/characters/icons/himeko.png"
  },
  Character
)
