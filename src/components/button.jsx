import styled from "styled-components"
import { rgba } from "polished"

export const Button = ({ href, children }) => {
  return (
    <StyledButton href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.a`
  width: fit-content;
  padding: 1.2rem 2.4rem;
  border-radius: 0.4rem;
  border: 2px solid ${({ theme }) => theme.foreground};
  font-size: var(--fs-caption);
  font-weight: 700;
  text-decoration: none;
  color: currentColor;
  box-shadow: 6px 6px 0px 2px ${({ theme }) => rgba(theme.foreground, 1)};
  transition: box-shadow 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`
