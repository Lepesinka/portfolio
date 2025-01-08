import React from "react";
import photo from '../../../assets/images/photo.png'
import bg from '../../../assets/images/yellow-bg.png'
import styled from "styled-components";
import image_bcg_yellow from  '../../../assets/images/image-bcg-yellow.png'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";



export const Main = () => {
    return (
        <StyledMain>
            <Container position="relative">
            <FlexWrapper align={"center"} justify={"space-between"} >
                <div style={{position: "relative"}}>
                    <MainTitle>Frontend Developer</MainTitle>
                    <Name>Hello,  my name is Kate Lepesevich</Name>
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
                        <path id="yellow-bg" fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#FDC435"/>
                            
                        </clipPath> 
                    </defs> 
                </svg> 
                <KlyaksaBackground>
                    <Photo src={photo} alt='#'/>
                    
                </KlyaksaBackground> 
            </KlyaksaContainer>
                {/* <Photo src={photo} alt =""/>  */}
                        
            </FlexWrapper>
            {/* <PhotoBg src={bg} alt =""/> */}
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



`

/* const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    position: relative;
    z-index: 1;

` */
export const PhotoBg = styled.img`
    width: 720px;
    height: 629px;
    // object-fit: cover;
    position: absolute;
   
    top: -62px;
    right: 0px;

 
`

/* const BgPhoto = styled.img`

    width: 777px;
    height: 877px;
    position: absolute;
    top: 0;
    right: 0;
` */

const MainTitle = styled.h1`
    line-height: 27px;
    color: ${theme.colors.accent};
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
`
const Name = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 0%;
    line-height: 120%;
    margin: 12px 0 32px 0;

`
const Text = styled.p`

    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
`
const Link = styled.a`

`
const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    position: relative;
    z-index: 1;

`

const KlyaksaContainer = styled.div `
    width: 720px;  /* Задайте ширину вашего контейнера */
    height: 650px; /* Задайте высоту вашего контейнера */  
    position: relative;    
    top: -55px;

`
const KlyaksaBackground = styled.div `
  background-image: url(${bg}); 
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  height: 100%; 
  clip-path: url(#klyaksa-clip); 


`
export {}