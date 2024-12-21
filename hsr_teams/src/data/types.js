export const ElementTypes = Object.freeze({
    PHYSICAL: "physical",
    WIND: "wind",
    FIRE: "fire",
    ICE: "ice",
    LIGHTNING: "lightning",
    IMAGINARY: "imaginary",
    QUANTUM: "quantum"
})

export const type_to_image = (path) => {
    return `/icons/types/${path}.png`
}