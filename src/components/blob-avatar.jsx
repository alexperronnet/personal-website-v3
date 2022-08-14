import styled from "styled-components"
import { rgba } from "polished"
import { ReactComponent as Blob } from "~/assets/images/blob.svg"
import Avatar from "~/assets/images/avatar.webp"

export const BlobAvatar = () => {
  return (
    <StyledBlobAvatar>
      <Img src={Avatar} alt="../assets/images/avatar.webp" />
      <StyledBlob />
    </StyledBlobAvatar>
  )
}

const StyledBlobAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: appearBlob 750ms 250ms both;

  @keyframes appearBlob {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const StyledBlob = styled(Blob)`
  width: 40rem;
  height: 40rem;
  stroke: ${({ theme }) => theme.highlight};
  animation: rotate 100s infinite linear;

  @media screen and (max-width: 1024px) {
    width: 21rem;
    height: 21rem;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`

const Img = styled.img`
  position: absolute;
  width: 19rem;
  height: 19rem;
  border-radius: 100%;
  box-shadow: 0 10px 15px -5px ${({ theme }) => rgba(theme.foreground, 0.2)},
    0 5px 5px -5px ${({ theme }) => rgba(theme.foreground, 0.2)};

  @media screen and (max-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`
