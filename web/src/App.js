import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import epitath from "epitath"
import { GlobalStyle, WebFonts, Loading } from "@staccx/base"
import { SanityList } from "@staccx/sanity"
import createHistory from "history/createBrowserHistory"
import Header from "./components/Header/Header"
import Page from "./pages/Page"
import PageLayout from "./components/PageLayout/PageLayout"
import Footer from "./components/Footer/Footer"

const App = epitath(function*({ change, inverted }) {
  const { result: pages } = yield (
    <SanityList type={`page`} pick={"blocks[],..."} />
  )

  const history = createHistory()

  if (!pages) {
    return <Loading />
  }

  return (
    <Router history={history}>
      <React.Fragment>
        <GlobalStyle />
        <WebFonts />
        <PageLayout>
          <Header />
        </PageLayout>
        <Switch>
          {pages.map(page => (
            <Route
              key={page._id}
              path={`${page.path.current}`}
              render={({ match, location }) => (
                <Page
                  page={page}
                  match={match}
                  location={location}
                  change={change}
                />
              )}
            />
          ))}
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  )
})

export default App
