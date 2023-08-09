import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  body{
    background: ${({theme})=> theme["neutral-color-9"]};
    color: ${({theme})=> theme["neutral-color-3"]};
  }
  
  body, input,textarea, a{
    font-family: ${({theme})=> theme["font-regular"]};
    font-weight: 400;
    font-size: 1rem;
  }
  body{
    background-color: ${({theme}) => theme["neutral-color-9"]};
  }

  a{
    text-decoration: none;
    color: ${({theme}) => theme["neutral-color-10"]};
  }

  picture{
    display: block;
    img{
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  button{
    border: none;
    background: transparent;
    padding: 10px;
    border-radius: 8px;
    transition: 500ms;
    font-family: ${({theme}) => theme["fonte-1"]};
    font-size: ${({theme}) => theme["escala-m"]};
    cursor: pointer;
  }

  h3{
    font-family: ${({theme}) => theme["fonte-1"]};
  }
  p{
    font-family: ${({theme}) => theme["fonte-1"]};
    font-size: ${({theme}) => theme["escala-pp"]};
  }

  @media (max-width: 400px){
    :root{
      font-size: 12px;
    }
  }
`