import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string

}

export const Skill = (props:SkillPropsType) => {

    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 14%;
    background-color: rgba(255, 255, 255, 0.56);
    margin: 10px;


`
export {}