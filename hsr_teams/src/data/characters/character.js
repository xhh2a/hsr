import { object, string, enums, optional } from "superstruct"
import _ from "lodash"

import { ElementTypes } from "../types"
import { Paths } from "../paths"

export const Character = object({
    name: string(),
    type: enums(_.values(ElementTypes)),
    path: enums(_.values(Paths)),
    rarity: enums([4, 5]),
    image: string(),
    emoji: optional(string())
})