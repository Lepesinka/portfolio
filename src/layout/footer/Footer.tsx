import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
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
            <Copyright>Madelyn Torff 2021</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )

}
const StyledFooter = styled.footer`
    background-color: #ffd8a5;
    min-height: 20vh;

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;


`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`

const Copyright = styled.small`

`
export {}