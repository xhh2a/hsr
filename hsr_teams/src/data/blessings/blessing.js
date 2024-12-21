import { object, array, string, enums, optional, boolean } from "superstruct"
import { Paths } from "@/data/paths"

export const Blessing = object({
    name: string(),
    rarity: enums([3, 4, 5]),
    path: enums(_.values(Paths)),
    description: string(),
    enhanced: boolean()
})