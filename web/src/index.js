import React from "react"
import ReactDOM from "react-dom"
import WasteIqTheme from "./theme/WasteIqTheme"
import { ThemeProvider } from "styled-components"
import App from "./App"

ReactDOM.render(
  <ThemeProvider theme={WasteIqTheme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
)
