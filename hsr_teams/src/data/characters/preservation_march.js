import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const PreservationMarch = create(
  {
    name: "March 7 ● Preservation",
    rarity: 4,
    type: ElementTypes.ICE,
    path: Paths.PRESERVATION,
    image: "/characters/icons/preservation_march.png"
  },
  Character
)
