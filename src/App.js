import React from 'react';
import { BrowserRouter, Redirect, Switch, useLocation } from "react-router-dom";
import ClassicLayoutRoute from "./layouts/ClassicLayout/ClassicLayoutRoute"
import EmptyLayoutRoute from "./layouts/EmptyLayout/EmptyLayoutRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  // const location = useLocation();
  return (
    
      <BrowserRouter>
      <AnimatePresence>
        <Switch >
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
        </AnimatePresence>
      </BrowserRouter>
    
  );
}

export default App;
