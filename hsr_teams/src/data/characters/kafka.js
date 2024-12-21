import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Kafka = create(
  {
    name: "Kafka",
    rarity: 5,
    type: ElementTypes.LIGHTNING,
    path: Paths.NIHILITY,
    image: "/characters/icons/kafka.png"
  },
  Character
)
