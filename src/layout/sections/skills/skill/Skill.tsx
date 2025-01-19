import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string

}

export const Skill = (props:SkillPropsType) => {

    return (
       
            <StyledSkill>
                <FlexWrapper >
                    <Icon iconId={props.iconId} />
                </FlexWrapper>
            </StyledSkill>
        
    )
}

const StyledSkill = styled.div`
    
    width: 112px;
    padding-left: 10px;
    padding-top: 10px;
    padding-button: 18px;
    padding-right: 100px;
    



`
export {}