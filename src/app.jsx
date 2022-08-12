import styled, { ThemeProvider } from "styled-components"
import { useThemes } from "~/hooks"
import { GlobalStyle, lightTheme, darkTheme } from "~/styles"
import { Header, BlobAvatar, Footer } from "~/components"

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
  padding: 6.4rem 0;
`

const Main = styled.main``
