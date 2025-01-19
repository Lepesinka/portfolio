import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import projectOne from './../../../assets/images/proj-1.webp';
import projectTwo from './../../../assets/images/proj-2.webp';
import projectThree from './../../../assets/images/proj-3.webp';

export const Works =()=>{
    return(
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>  
            <FlexWrapper direction={"column"} align="center" gap='50px'>
                <Work title={"Project Name"}
                      text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                      src={projectOne}/>
                <Work title={"Project Name"}
                      text={"What was your role, your deliverables, if the project was personal, freelancing."}
                      src={projectTwo}
                      left={true}
                      />
                <Work title={"Project Name"}
                      text={"You can also add in this description the type of the project, if it was for web, mobile, electron."}
                      src={projectThree}/>
            </FlexWrapper>                 
        </StyledWorks>
    )

}

const StyledWorks = styled.section `

    



`


export {}