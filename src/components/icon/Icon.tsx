import React from "react";
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType ) => {
    return (
        <div>
            <svg width={props.width || "112"} height={props.height || "112"} viewBox={props.height || "0 0 112 112" } fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={'${iconsSprite}#${props.iconId}'}/>               

            </svg>

        </div>
    )
}
export {}