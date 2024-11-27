import React from "react";
import styled from "styled-components";

export const Menu = () =>{
    return(
        <StyledMenu>            
            <ul>
                         
                <li>
                    <a href="">Kate Lepesevich</a>
                </li>
                <div>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contacts</a>
                    </li>
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



`