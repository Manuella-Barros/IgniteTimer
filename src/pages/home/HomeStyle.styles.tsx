import { styled } from "styled-components";

export const HomeStyle = styled.main`
    width: 75%;
    margin: auto;
    
    @media (max-width: 1000px){
        width: 90%;
    }
`

export const FormStyle = styled.article`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    input{
        background-color: transparent;
        font-size: ${({theme}) => theme["escala-p"]};
        font-family: ${({theme}) => theme["fonte-2"]};
        color: ${({theme}) => theme["neutral-color-2"]};
        font-weight: bolder;
        text-align: center;
        border-bottom: 1px solid ${({theme})=> theme["first-color-2"]};
        border-right: 1px solid ${({theme})=> theme["first-color-2"]};
    }

    input[type="text"]{
        width: 250px;
    }
    input[type="number"]{
        width: 40px;
    }
    input[type="button"]{
        width: 20px;
        border: 0;
        color: ${({theme}) => theme["neutral-color-4"]};
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

export const CountdownStyle = styled.article`
    display: flex;
    margin-block: ${({theme}) => theme["escala-m"]};
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 15vw;
        text-align: center;
        font-weight: bolder;
        padding-inline: 10px;
    }
    .timer{
        background-color: ${({theme}) => theme["neutral-color-7"]};
        border-radius: 8px;
        width: 20%;
    }
    .separator{
        color: ${({theme}) => theme["first-color-3"]};
    }
`