import { NavLink } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle.styles";

export function Header(){
    return (
        <HeaderStyle>
            <img src="./images/logo.png" alt="" />
            <NavLink to={'/'}><i className="fa-solid fa-clock"></i></NavLink>
            <NavLink to={'./historico'}><i className="fa-solid fa-clock-rotate-left"></i></NavLink>
        </HeaderStyle>
    )
}