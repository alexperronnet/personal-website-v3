import styled from "styled-components"
import { ReactComponent as Sun } from "~/assets/images/sun.svg"
import { ReactComponent as Moon } from "~/assets/images/moon.svg"

export const ThemeToggle = ({ onClick, theme }) => {
  return (
    <StyledThemeToggle onClick={onClick}>
      {theme === "light" ? <Sun /> : <Moon />}
    </StyledThemeToggle>
  )
}

const StyledThemeToggle = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.foreground};
  border: none;
  line-height: 0;
  cursor: pointer;
  transition: opacity 150ms linear;

  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`
