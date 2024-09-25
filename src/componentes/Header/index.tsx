import { StyledHeader, StyledLogo } from "./style"
import logoImpar from "../../assets/images/logoImpar.png"

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo src={logoImpar} alt="logoImpar" />
        </StyledHeader>

    )
}

export default Header