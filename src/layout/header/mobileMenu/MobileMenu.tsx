import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { css } from "styled-components";
export const MobileMenu = () => {
    return(
        <StyledMobileMenu>   
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>  
            <MobileMenuPopup isOpen={true}>
            <ul>
                         
                         <ListItem>
                             <Link href="">Kate Lepesevich</Link>
                         </ListItem>
                         <div>
                             <ListItem>
                                 <Link href="">About</Link>
                             </ListItem>
                             <ListItem>
                                 <Link href="">Projects</Link>
                             </ListItem>
                             <ListItem>
                                 <Link href="">Contacts</Link>
                             </ListItem>
                         </div>
                     </ul>
            </MobileMenuPopup>     

        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
  
    display: none; 
    
        @media ${theme.media.tablet} {
            display: block;
        
        
        }  

`
const  MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: none;
 

    ${props => props.isOpen && css <{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;   
    
    `}
    ul {
        display:flex;        
        justify-content: space-between;
        width: 100%;
        div {
            display: flex;
            gap: 48px;
        }
        align-items: center;
        flex-direction: column;
    }

`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 50px;
    height: 50px;
    z-index: 9999999;
    border: 1px solid red;
    left: 88%;

    span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: rgb(0, 0, 0);
        position: absolute;
        top: 22px;
        right: 15px;

        ${props => props.isOpen && css <{isOpen: boolean}>`

        background-color: rgba(255, 255, 255, 0);
        
        
        `}

        &::before {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            background-color: rgb(0, 0, 0);
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css <{isOpen: boolean}>`

               transform: rotate(-45deg) translateY(0);
            
        `}
        }  
        
        &::after {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            background-color: rgb(0, 0, 0);
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css <{isOpen: boolean}>`

               transform: rotate(45deg) translateY(0);
               width:18px;
        `}  
}   

    
    }


`
const ListItem = styled.li`


`
const Link = styled.a`
font-family: 'Comfortaa', sans serif;
font-weight: 700;
font-size: 18px;
text-align: left; 
color: #25282B;

`
export {}