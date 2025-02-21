import styled from 'styled-components';
import {theme} from '../styles/Theme';
export const SectionTitle = styled.h2 `
    /* title / h2 */
    color: rgb(37, 40, 43);
    font-family: Playfair Display, sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom: 80px;
    @media ${theme.media.mobile} {
        margin-bottom: 50px;   
     }
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 4px;
        background-color: ${theme.colors.accent};

        position: absolute;
        //центрируем полоску в независимости от title
        left: 50%;
        bottom: -4px;
        transform: translateX(-50%);


    
    }
    


`