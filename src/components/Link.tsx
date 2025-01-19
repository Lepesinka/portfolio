import styled from "styled-components"
import { theme } from "../styles/Theme"
export const Link = styled.a`
    color: rgb(37, 40, 43);
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
l   etter-spacing: 0%;
    text-align: left;
    border: 2px solid ${theme.colors.font}; 
    border-radius: 8px;  
    padding: 8px 24px;
    margin-right: 12px;

    &:hover {
        background-color: ${theme.colors.accent};
        border:none;
    
    }
   
`
export {}