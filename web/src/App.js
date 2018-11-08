import React, { Component } from "react"
import { Router } from "react-router-dom"
import { GlobalStyle, WebFonts } from "@staccx/base"
import createHistory from "history/createBrowserHistory"
import Header from "./components/Header/Header"
import PageLayout from "./components/PageLayout/PageLayout"
import Footer from "./components/Footer/Footer"
import Routes from "./Routes"

class App extends Component {
  render() {
    const history = createHistory()

    return (
      <Router history={history}>
        <React.Fragment>
          <GlobalStyle />
          <WebFonts />
          <PageLayout>
            <Header />
          </PageLayout>
          <Routes />
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
