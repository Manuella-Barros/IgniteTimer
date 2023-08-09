import { ButtonStyleProps, EndButtonStyle, StartButtonStyle } from "./ButtonStyle.styles";

export function Button({children, onClick, $typeStyle, ...props}: ButtonStyleProps){
    return(
        <>
            {
                ($typeStyle == 'start') &&
                <StartButtonStyle onClick={onClick} $typeStyle={$typeStyle} {...props}>
                    {children}
                </StartButtonStyle>
            }
            {
                ($typeStyle == 'end') &&
                <EndButtonStyle onClick={onClick} $typeStyle={$typeStyle} {...props}>
                    {children}
                </EndButtonStyle>
            }
        </>
    )
}