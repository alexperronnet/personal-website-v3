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
`

const StyledBlob = styled(Blob)`
  position: absolute;
  stroke: ${({ theme }) => theme.highlight};
  animation: rotate 100s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`

const Img = styled.img`
  width: 12.8rem;
  height: 12.8rem;
  border-radius: 100%;
  box-shadow: 0 10px 15px -5px ${({ theme }) => rgba(theme.foreground, 0.2)},
    0 5px 5px -5px ${({ theme }) => rgba(theme.foreground, 0.2)};
`
