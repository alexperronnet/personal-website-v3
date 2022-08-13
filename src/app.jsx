import styled, { ThemeProvider } from "styled-components"
import { useThemes } from "~/hooks"
import { GlobalStyle, lightTheme, darkTheme } from "~/styles"
import { Header, BlobAvatar, Button, Footer } from "~/components"

export const App = () => {
  // Theme
  const [theme, setTheme] = useThemes()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <StyledApp>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Header onClick={() => setTheme()} theme={theme} />
        <Main>
          <BlobAvatar />
          <Infos>
            <Title>Alex Perronnet</Title>
            <Subtitle>Under construction...</Subtitle>
            <Text>
              The third iteration of my personal website is comming soon.
            </Text>
            <Button href="https://github.com/alexperronnet">GitHub</Button>
          </Infos>
        </Main>
        <Footer />
      </ThemeProvider>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 102.4rem;
  width: calc(100% - (4.8rem * 2));
  margin-inline: auto;

  @media screen and (max-width: 1024px) {
    width: calc(100% - (2.4rem * 2));
  }
`

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6.4rem 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 6.4rem;
  }
`

const Infos = styled.section`
  max-width: 51.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: var(--fs-title);
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }

  &:before {
    content: "Jr. Frontend Engineer";
    font-size: var(--fs-caption);
    font-weight: 400;
    color: ${({ theme }) => theme.highlight};
    align-self: end;
    text-transform: none;

    @media screen and (max-width: 1024px) {
      align-self: center;
    }
  }
`

const Subtitle = styled.h2`
  font-size: var(--fs-subtitle);
  font-weight: 700;
  text-transform: uppercase;
`

const Text = styled.p`
  font-size: var(--fs-body);
  opacity: 0.8;
  margin-bottom: 2.4rem;
`
