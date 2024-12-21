import { create } from "superstruct"

import { ElementTypes } from '../types'
import { Paths } from "../paths"
import { Character } from "./character"


export const Herta = create(
  {
    name: "Herta",
    rarity: 4,
    type: ElementTypes.ICE,
    path: Paths.ERUDITION,
    image: "/characters/icons/herta.png",
    emoji: "/characters/emojis/herta_question.png"
  },
  Character
)
