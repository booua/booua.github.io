import React from "react"
import EmptyLayout from "./EmptyLayout"
import { Route } from "react-router-dom"

const EmptyLayoutRoute = ({ component: Component, ...routeProps}) => {
    return (
        <Route
          {...routeProps}
          render={matchProps => (
              <EmptyLayout>
                  <Component {...matchProps} />
              </EmptyLayout>
          )}
        />
    )
}

export default EmptyLayoutRoute