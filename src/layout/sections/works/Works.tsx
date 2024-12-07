import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";

export const Works =()=>{
    return(
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>  
            <FlexWrapper>
                <Work/>
                <Work/>
                <Work/>
            </FlexWrapper>                 
        </StyledWorks>
    )

}

const StyledWorks = styled.section `

min-height: 100vh;
background-color: #deefff;


`


export {}