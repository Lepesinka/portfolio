import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
            <SectionTitle>Contact me</SectionTitle>
            <StyledForm>
                <Name>Name</Name>
                <Field />
                <Name>Email</Name>
                <Field />
                <Name>Message</Name>
                <Field as={"textarea"} />
                <Button type={"submit"}>Send</Button>            
            </StyledForm>
        </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section `
    padding-bottom: 56px;



`
const StyledForm = styled.form `
    max-width: 400px;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;    
    textarea {
        resize: none;
        height: 160px;
    }
`
const Name = styled.label`
    color: rgb(37, 40, 43);
    font-family: Nunito, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
    float: left;
    width: 100%;
    padding-bottom: 8px;
    

`
const Field = styled.input `
    width: 100%;
    border: 1px solid rgb(232, 236, 244);
    border-radius: 8px;
    /* bg / white */
    background-color: rgb(255, 255, 255);
    height: 40px;
    padding: 7px 15px;
    color:  ${theme.colors.font};
    font-family: Nunito, sans-serif;
    margin-bottom:24px;

    &:focus-visible {
        outline: 1px solid rgb(232, 236, 244);   
    
    }

`
const Button = styled.button`

    padding: 8px 24px;
    color: rgb(37, 40, 43);
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    border-radius: 8px;
    background: rgb(253, 196, 53);
    align-self: end;

`

export {}