import { styled } from "styled-components";

export interface ButtonStyleProps{
    children: React.ReactNode,
    onClick?: (e: MouseEvent) => void,
    $typeStyle: 'start' | 'end',
    type?: string,
    disabled?: boolean,
}

const BaseButton = styled.button<ButtonStyleProps>`
    width: 100%;
    padding-block: ${({theme}) => theme["escala-p"]};
    color: ${({theme}) => theme["neutral-color-2"]};

`

export const StartButtonStyle = styled(BaseButton) `
    background-color: ${({theme}) => theme["first-color-2"]};

    &:hover{
        background-color: ${({theme}) => theme["first-color-1"]};
    }

    &:disabled{
        background-color: ${({theme}) => theme["first-color-3"]};
        color: ${({theme}) => theme["neutral-color-4"]};
        cursor: not-allowed;
    }
`

export const EndButtonStyle = styled(BaseButton) `
    background-color: ${({theme}) => theme["second-color-2"]};

    &:hover{
        background-color: ${({theme}) => theme["second-color-1"]};
    }
`