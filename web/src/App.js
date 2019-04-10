import React, { Component } from "react"
import { Router } from "react-router-dom"
import { GlobalStyle, WebFonts } from "@staccx/base"
import { LanguageProvider } from "@staccx/i18n"
import createHistory from "history/createBrowserHistory"
import Header from "./components/Header/Header"
import PageLayout from "./components/PageLayout/PageLayout"
import Footer from "./components/Footer/Footer"
import Routes from "./Routes"

const getLanguage = path => (path.includes("no") ? "nb" : "en")
const language = getLanguage(window.location.hostname)

class App extends Component {
  render() {
    const history = createHistory()

    return (
      <Router history={history}>
        <LanguageProvider
          texts={{}}
          logLevel={5}
          languages={["en, nb"]}
          language={language}
        >
          <GlobalStyle />
          <WebFonts />
          <PageLayout>
            <Header />
          </PageLayout>
          <Routes />
          <Footer />
        </LanguageProvider>
      </Router>
    )
  }
}

export default App
