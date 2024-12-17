import React from "react";
import photo from '../../../assets/images/photo.png'
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
                <div>
                    <MainTitle>Frontend Developer</MainTitle>
                    <Name>Hello,  my name is Kate Lepesevich</Name>
                    <Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Text> 
                    <div>
                        <Link href="#">Projects</Link>
                        <Link href="#">LinkedLn</Link>
                    </div>
                             
                </div>
                <Photo src={photo} alt =""/>

            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #fff5e7;



`

const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
`

const MainTitle = styled.h1`
`
const Name = styled.h2`

`
const Text = styled.p`

`
const Link = styled.a`

`
export {}