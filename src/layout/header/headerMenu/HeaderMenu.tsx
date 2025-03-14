import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = () => {
    return(
        <StyledMenu>            
            <ul>                         
                <ListItem>
                    <Link href="">Kate Lepesevich</Link>
                </ListItem>
                <StyledMenuNone>
                    <ListItem>
                        <Link href="">About</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">Contacts</Link>
                    </ListItem>
                </StyledMenuNone>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
  
    display:flex; 
    ul {
        display:flex;        
        justify-content: space-between;
        width: 100%;

    }

    

`
const StyledMenuNone = styled.div`
        display: flex;
        gap: 48px;
     @media ${theme.media.tablet} {
           
    display: none;
               
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