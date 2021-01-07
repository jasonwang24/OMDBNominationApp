import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { Suspense, useMemo } from "react";
import usePageStyles from "./assets/styles/views/pageStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./assets/theme";
import LoadingAnimation from "./components/LoadingAnimation";
import SearchPage from "./views/SearchPage";

const App: React.FC = () => {
  const classes = usePageStyles();

  return useMemo(
    () => (
      <div className={classes.mainPanel}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Suspense fallback={<LoadingAnimation />}>
              <Switch>
                <Route exact path="/">
                  <SearchPage />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </ThemeProvider>
      </div>
    ),
    [classes]
  );
};

export default App;
