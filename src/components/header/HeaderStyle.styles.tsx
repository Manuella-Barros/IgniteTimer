import { styled } from "styled-components";

export const HeaderStyle = styled.header`
    display: grid;
    grid-template-columns: 9fr 0.5fr 0.5fr;
    align-items: center;

    img{
        width: 60px;
    }
    a{
        font-size: ${({theme}) => theme["escala-m"]};
        color: ${({theme}) => theme["neutral-color-4"]};
    }
    a:hover,
    a.active{
        color: ${({theme}) => theme["first-color-2"]};
    }
    :focus{
        box-shadow: 0 0 0 0;
    }

    @media (max-width: 400px){
        grid-template-columns: 8fr 1fr 1fr;
    }
`