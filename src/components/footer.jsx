import styled from "styled-components"
import { ReactComponent as Heart } from "~/assets/images/heart.svg"
import { ReactComponent as Flag } from "~/assets/images/france.svg"

export const Footer = () => {
  return (
    <StyledFooter>
      <span>Made with</span>
      <StyledHeart />
      <span>in</span>
      <StyledFlag />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  font-size: var(--fs-caption);
  padding-bottom: 4.8rem;

  @media screen and (max-width: 1024px) {
    padding-bottom: 2.4rem;
  }
`

const StyledHeart = styled(Heart)`
  color: ${({ theme }) => theme.highlight};
  animation: beat 500ms infinite alternate;

  @keyframes beat {
    to {
      transform: scale(1.1);
    }
  }
`

const StyledFlag = styled(Flag)`
  height: 2.4rem;
  width: 2.4rem;
`
