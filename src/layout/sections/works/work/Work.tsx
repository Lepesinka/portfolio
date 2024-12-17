import React from 'react';
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper';

type WorkPropsType = {
    title: string
    text:string
    src: string

}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <FlexWrapperWithFlexOption direction='column' justify='center'>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href='#'>View Project</Link>
            </FlexWrapperWithFlexOption>
            <Image src={props.src} alt=""/>     

        </StyledWork>
    )

}

 const FlexWrapperWithFlexOption = styled(FlexWrapper)`
 flex: 1;
 margin: 20px;
` 

const StyledWork = styled.div`
    display:flex;
    background-color: #ffe869;
    max-width: 992px;
    width:100%;
`
const Title = styled.h3`


`
const Text = styled.p`


`
const Link= styled.a`



`

const Image = styled.img`
 height: 524px;
object-fit: cover;
flex:1;
`

export {}