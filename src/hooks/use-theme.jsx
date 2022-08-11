import { useEffect, useState } from "react"

export const useThemes = () => {
  const [theme, setTheme] = useState("light")

  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const handleToggle = () => {
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")

    if (localTheme) {
      setTheme(localTheme)
    } else {
      setMode("light")
    }
  }, [])

  return [theme, handleToggle]
}
