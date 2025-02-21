import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number

}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Nunito" };
    font-weight: ${weight || 400};
    color: ${color || theme.colors.fontName};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
export {}