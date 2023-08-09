import {styled} from "styled-components";

export const BodyStyle = styled.div `
    background-color: ${({theme}) => theme["neutral-color-8"]};
    width: 80%;
    margin: 45px auto;
    height: 85vh;
    padding: ${({theme}) => theme["escala-gg"]};
    border-radius: 7px;

    @media (max-width: 400px){
        width: 100%;
    }
`