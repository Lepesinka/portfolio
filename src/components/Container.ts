import styled from "styled-components";

type ContainerPropsType = {
    position?: string
   
   
}

export const Container  = styled.div<ContainerPropsType>`
    position: ${props => props.position || "static"};
    max-width: 1230px;
    width: 100%;
    min-height: 100%;
    //padding: 0 15px;
    margin: 0 auto;
    // border: 1px solid red;
    
`
export {}