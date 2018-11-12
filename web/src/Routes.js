import React from "react"
import { Switch, Route } from "react-router-dom"
import epitath from "epitath"
import { Loading } from "@staccx/base"
import { SanityList } from "@staccx/sanity"
import Page from "./pages/Page"

const Routes = epitath(function*({ change, inverted }) {
  const { result: pages } = yield <SanityList type={`page`} />

  if (!pages) {
    return <Loading />
  }

  return (
    <Switch>
      {pages.map(page => (
        <Route
          key={page._id}
          path={page.path.current}
          exact
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
  )
})

export default Routes
