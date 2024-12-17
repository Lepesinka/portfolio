import React from "react";
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from 'styled-components';

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    justify?: string

}

export const Icon = (props: IconPropsType ) => {
    return (
        <ImageWrapper>
            <svg width={props.width || "112"} height={props.height || "112"} viewBox={props.height || "0 0 112 112"}  fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>               

            </svg>
        </ImageWrapper>
    )
}
const ImageWrapper = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    
`
export {}