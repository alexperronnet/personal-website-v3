import styled from "styled-components"
import { ReactComponent as Logo } from "~/assets/images/logo.svg"
import { ThemeToggle } from "~/components/theme-toggle"

export const Header = ({ onClick, theme }) => {
  return (
    <StyledHeader>
      <StyledLogo />
      <ThemeToggle onClick={onClick} theme={theme} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4.8rem;

  @media screen and (max-width: 1024px) {
    padding-top: 2.4rem;
  }
`

const StyledLogo = styled(Logo)`
  height: 3.6rem;
  color: ${({ theme }) => theme.highlight};

  @media screen and (max-width: 1024px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`
