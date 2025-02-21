import React from "react";
import photo from '../../../assets/images/photo.png'
import bg from '../../../assets/images/yellow-bg.png'
import miniBg from '../../../assets/images/yellow-bg-mini.svg'
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Link } from "../../../components/Link";
import { useResize } from "../../../hooks/useResize";
import photomini from '../../../assets/images/photomini.png'
import { font } from "../../../styles/Common";

export const Main = () => {
    const windowSize = useResize()
    const isTabletSize = windowSize.width < 768

    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <div style={{position: "relative"}}>
                    <MainTitle>Frontend Developer</MainTitle>
                    <Name>My name is <span>Kate Lepesevich</span></Name>
                    <Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Text> 
                    <div>
                        <Link href="#">Projects</Link>
                        <Link href="#">LinkedLn</Link>
                    </div>
                             
                </div>
                <KlyaksaContainer> 
                <svg width="0" height="0"> 
                    <defs> 
                        <clipPath id="klyaksa-clip"> 
                            { isTabletSize ? <path id="yellow-bg" d="M266.92 0.41C329.01 3.36 394.31 26.48 432.22 74.59C467.26 119.08 443.71 182.26 453.73 237.54C461.77 281.98 491.81 321.4 485 366.04C477.45 415.5 453.37 462.69 414.4 495.1C373.58 529.05 319.51 557.58 266.92 547.41C215.95 537.56 200.07 472.95 156.52 445.26C108.87 414.97 25.8 431.57 4.02 380.27C-17.32 330.02 52.51 285.87 66.49 233.21C81.98 174.88 49.79 104.4 89.5 58.28C130.64 10.5 203.08 -2.63 266.92 0.41Z" fill="#FDC435" fill-opacity="1.000000" fill-rule="evenodd"/>
                                :
                        <path id="yellow-bg" fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#FDC435"/>
}
                        </clipPath> 
                    </defs> 
                </svg>  
                <KlyaksaBackground>

                    <Photo src={isTabletSize ? photomini : photo} alt='#'/>                    
                </KlyaksaBackground> 
            </KlyaksaContainer>
            </FlexWrapper>          
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    //все элементы align-items растягиваются как stretch(нужно понимать) 
    display:flex; //чтобы появилось свободное пространство по вертикали, чтобы двигать наши элементы    
    padding-top: 20px;    
    align-items: flex-start;

    ${FlexWrapper} {
     @media ${theme.media.tablet} {
        flex-direction: column-reverse;   
     }
    } 
`

export const PhotoBg = styled.img`
    width: 720px;
    height: 629px;
    // object-fit: cover;
    position: absolute;
   
    top: -62px;
    right: 0px;

 
`
const MainTitle = styled.h1`
    line-height: 27px;
    color: ${theme.colors.accent};
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
`
const Name = styled.h2`
    ${font({family:"'Roboto', sans-serif", weight: 700, Fmax: 64, Fmin: 42})}
    //font-family: 'Roboto', sans-serif;
    color: ${theme.colors.fontName};
    //font-weight: 700;
    //font-size: 64px;
    letter-spacing: 0%;
    line-height: 120%;
    margin: 12px 0 32px 0;
    span{
        white-space: nowrap;

    }

`
const Text = styled.p`
    color: ${theme.colors.fontText};
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 40px;
`

const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    position: relative;
    z-index: 1;

    @media ${theme.media.mobile} {
        width: auto;
        height: auto;
        top: 153px;
        right: 15px;
    }

`

const KlyaksaContainer = styled.div `
    width: 720px;  /* Задайте ширину вашего контейнера */
    height: 650px; /* Задайте высоту вашего контейнера */  
    position: relative;    
    top: -55px;
    right: -7%;

     @media ${theme.media.mobile} {
        width: 100%;
        height: 600px;
        top: -150px;
        overflow-x: hidden;
        margin-bottom: -150px;    
    }


`
const KlyaksaBackground = styled.div `
  background-image: url(${bg}); 
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  height: 100%; 
  clip-path: url(#klyaksa-clip); 

  @media ${theme.media.tablet} {
   background-image: url(${miniBg}); 
  
  }


`
export {}