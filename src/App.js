import React from 'react';
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import ClassicLayoutRoute from "./layouts/ClassicLayout/ClassicLayoutRoute"
import EmptyLayoutRoute from "./layouts/EmptyLayout/EmptyLayoutRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <BrowserRouter basename={process.env.REACT_APP_FRONTEND}>
        <Switch>
          <ClassicLayoutRoute exact path="/" component={WelcomePage} />
          <ClassicLayoutRoute
            exact
            path="/projects"
            component={ProjectsPage}
          />
          <ClassicLayoutRoute
            exact
            path="/articles"
            component={ArticlesPage}
          />
          <ClassicLayoutRoute
            exact
            path="/about"
            component={AboutPage}
          />
          <EmptyLayoutRoute exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
