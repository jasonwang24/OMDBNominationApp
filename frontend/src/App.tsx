import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { Suspense, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./assets/theme";
import LoadingAnimation from "./components/LoadingAnimation";
import SearchPage from "./views/SearchPage";

const App: React.FC = () => {
  return useMemo(
    () => (
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
    ),
    []
  );
};

export default App;
