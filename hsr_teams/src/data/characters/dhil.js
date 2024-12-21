import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const DHIL = create(
  {
    name: "Dan Heng ● Imbibitor Lunae",
    rarity: 5,
    type: ElementTypes.IMAGINARY,
    path: Paths.DESTRUCTION,
    image: "/characters/icons/dhil.png"
  },
  Character
)
