import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  /* JetBrains Mono 400 */
  @font-face {
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 400;
    src:
      local(),
      url("../assets/fonts/jetbrains-mono-400.woff2") format("woff2"),
      url("../assets/fonts/jetbrains-mono-400.woff") format("woff");
  }

  /* JetBrains Mono 700 */
  @font-face {
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 700;
    src:
      local(),
      url("../assets/fonts/jetbrains-mono-700.woff2") format("woff2"),
      url("../assets/fonts/jetbrains-mono-700.woff") format("woff");
  }

  /* Variables */
  :root {
    /* Typography */
    --ff-mono: "JetBrains Mono", monospace;

    --fs-title: 4.8rem;
    --fs-subtitle: 2.4rem;
    --fs-body: 2rem;
    --fs-caption: 1.4rem;
    
    @media screen and (max-width: 768px) {
      --fs-title: 3.2rem;
      --fs-subtitle: 1.8rem;
      --fs-body: 1.6rem;
      --fs-caption: 1.2rem;
    }
  }

  /* Global styling */
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  body {
    color: ${({ theme }) => theme.foreground};
    background: ${({ theme }) => theme.background};
    font-family: var(--ff-mono);
    font-weight: 400;
    line-height: 1.5;
    transition: all 150ms linear;
    height: 100vh;
  }

  ::selection {
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.foreground};
  }

  #root {
    height: 100%;
  }
`
