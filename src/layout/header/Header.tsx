import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = ()=>{
    return (
        <StyledHeader>
            <Container>
                
              
                   <Menu/>
                   
            </Container>
            {/* <Logo/>  */}
            
        </StyledHeader>
    )
}

const StyledHeader = styled.header`

    background: rgb(249, 250, 255);
    padding: 20px 0;
    // Header тянется на всю ширину , прижимае мего по бокам и верхнему краю и фиксируем ,чтобы был всегда вверху экрана
    position: fixed;
    top: 0; 
    left: 0; 
    right: 0;
    //чтобы всегда находился поверх других элементов
    z-index: 99999;




`