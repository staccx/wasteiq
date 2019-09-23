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
      {pages.map(page => (
        <Route
          key={page._id}
          path={getPath(page)}
          exact
          render={({ match, location }) => {
            if (page._type === "example") {
              return (
                <ExamplePage
                  example={page}
                  match={match}
                  location={location}
                  change={change}
                />
              )
            }
            return (
              <Page
                page={page}
                match={match}
                location={location}
                change={change}
              />
            )
          }}
        />
      ))}
    </Switch>
  )
})

const getPath = ({ _type, path: { current } = {} }) => {
  if (_type === "example") {
    const result = `/examples/${current}`
    return result
  }
  return current
}

export default Routes
