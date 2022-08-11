import styled, { ThemeProvider } from "styled-components"
import { useThemes } from "~/hooks"
import { GlobalStyle, lightTheme, darkTheme } from "~/styles"
import { Header } from "~/components"

export const App = () => {
  // Theme
  const [theme, setTheme] = useThemes()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <StyledApp>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Header onClick={() => setTheme()} theme={theme} />
      </ThemeProvider>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  max-width: 102.4rem;
  width: calc(100% - (4.8rem * 2));
  margin: 6.4rem auto;
`
