import React from "react"
import { Switch, Route } from "react-router-dom"
import epitath from "epitath"
import { Loading } from "@staccx/base"
import { SanityQuery } from "@staccx/sanity"
import Page from "./pages/Page"
import ExamplePage from "./pages/ExamplePage"

const Routes = epitath(function*({ change, inverted }) {
  const { result: pages } = yield (
    <SanityQuery
      id={"top-page-query"}
      query={'*[_type in ["page", "example"]]'}
    />
  )

  if (!pages) {
    return <Loading />
  }

  return (
    <Switch>
      {pages.map(page => {
        if (!page.path) {
          console.log("Error page had no slug/path defined.", page)
          return null
        } else if (page._type === "example") {
          return (
            <Route
              key={page._id}
              path={`/examples/${page.path.current}`}
              exact
              render={({ match, location }) => (
                <ExamplePage
                  example={page}
                  match={match}
                  location={location}
                  change={change}
                />
              )}
            />
          )
        }
        return (
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
        )
      })}
    </Switch>
  )
})

export default Routes
