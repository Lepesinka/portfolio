import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import bgVector from '../../assets/images/Vector.png'
import { theme } from '../../styles/Theme'


export const Footer = () => {
    return (
        <StyledFooter>            
            <FlexWrapper direction={"column"} align={"center"}>
            <KlyaksaBackground>   
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"38px"} width={"38px"} viewBox={""} iconId={"instagram"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"38px"} width={"38px"} iconId={"linkedin"} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"32px"} width={"42px"} iconId={"envelope"} />
                    </SocialLink>
                </SocialItem>                                
            </SocialList>
            <Copyright>Kate Lepesevich 2025</Copyright>
            </KlyaksaBackground>
            </FlexWrapper>
            
        </StyledFooter>
    )

}
const StyledFooter = styled.footer`
    height: 344px;
    margin: 0 auto;
    max-width: 1440px;
   // background-color: ${theme.colors.primaryBg} ;


`
const SocialList = styled.ul`
    display: flex;
    gap: 35px;
    margin-bottom: 32px;



`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    /* bg / line */
    background: rgb(37, 40, 43);

`

const Copyright = styled.small`
    color: rgb(130, 130, 130);    
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
`
const KlyaksaBackground = styled.div `
  background-image: url(${bgVector}); 
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  height: 100%; 
  display: flex;
  align-items: center;   
  flex-direction: column;
  
`
export {}