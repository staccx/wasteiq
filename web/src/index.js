import React from "react"
import ReactDOM from "react-dom"
import WasteIqTheme from "./theme/WasteIqTheme"
import { ThemeProvider } from "styled-components"
import { SanityProvider } from "@staccx/sanity"
import App from "./App"

ReactDOM.render(
  <SanityProvider dataset={"development"} projectId={"12su2jen"} useCdn>
    <ThemeProvider theme={WasteIqTheme}>
      <App />
    </ThemeProvider>
  </SanityProvider>,

  document.getElementById("root")
)
