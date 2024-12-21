import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Blade = create(
  {
    name: "Blade",
    rarity: 5,
    type: ElementTypes.WIND,
    path: Paths.DESTRUCTION,
    image: "/characters/icons/blade.png"
  },
  Character
)
