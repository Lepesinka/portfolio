import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { css } from "styled-components";


export const Header = ()=>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 62) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <StyledHeader isScrolled={isScrolled}>
            <Container>              
              
                   <HeaderMenu/>
                   <MobileMenu/>
                   

            </Container>
            {/* <Logo/>  */}
            
        </StyledHeader>
    )
}

const StyledHeader = styled.header<{isScrolled: boolean}>`

    background: transparent;
    padding: 20px;

    // Header тянется на всю ширину , прижимае мего по бокам и верхнему краю и фиксируем ,чтобы был всегда вверху экрана
    position: fixed;   
    top: 0; 
    left: 0; 
    right: 0;
    //чтобы всегда находился поверх других элементов
    z-index: 99999;

        ${props => props.isScrolled && css<{isScrolled: boolean}>`

        background-color: #F9FAFF;
        box-shadow: 0 4px 8px rgba(200, 210, 255, 0.5);
        
        
        `}


`