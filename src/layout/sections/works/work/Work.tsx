import React from 'react';
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper';

type WorkPropsType = {
    title: string
    text:string
    src: string
    left?: boolean
}

export const Work = ({left = false, src, title, text}: WorkPropsType) => {
    return (
        <StyledWork>
            {left &&  <Image src={src} alt=""/> }
            <FlexWrapperWithFlexOption direction='column' justify='center'>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Link href='#'>View Project</Link>
            </FlexWrapperWithFlexOption>
            {!left &&  <Image src={src} alt=""/> }   
        </StyledWork>
    )

}

 const FlexWrapperWithFlexOption = styled(FlexWrapper)`
    //flex: 1;
    align-self: center;
    padding-inline: 50px 38px;
  
   
` 

const StyledWork = styled.div`
    display:flex;
    background: rgb(255, 255, 255);
    max-width: 992px;
    width:100%;
    border-radius: 24px;
    overflow: hidden;
    
    
`
const Title = styled.h3`
    color: rgb(37, 40, 43);
    font-family: Playfair Display;
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
`
const Text = styled.p`

    color: rgb(130, 130, 130);
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    margin:24px 0;
`
const Link= styled.a`
    color: rgb(37, 40, 43);
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    padding: 8px 24px;
    box-sizing: border-box;
    border: 1px solid rgb(37, 40, 43);
    border-radius: 24px;
    width: 152px;

    `

const Image = styled.img`
    height: 524px;
    object-fit: cover;
 //   flex:1;

`

export {}