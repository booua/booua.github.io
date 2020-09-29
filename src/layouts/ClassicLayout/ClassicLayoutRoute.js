import React from "react"
import ClassicLayout from "./ClassicLayout"
import { Route } from "react-router-dom"

const ClassicLayoutRoute = ({ component: Component, ...routeProps}) => {
    return (
        <Route
          {...routeProps}
          render={matchProps => (
              <ClassicLayout>
                  <Component {...matchProps} />
              </ClassicLayout>
          )}
        />
    )
}

export default ClassicLayoutRoute