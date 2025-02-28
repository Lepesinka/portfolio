import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = () => {
    return(
        <StyledMenu>            
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
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
  
    display:flex; 
    ul {
        display:flex;        
        justify-content: space-between;
        width: 100%;
        div {
            display: flex;
            gap: 30px;
        }
    }
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