import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import PrivatRoute from "./routes/PrivatRoute";
import PublicRoute from "./routes/PublicRoute";
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ReturnPage = lazy(() => import("./pages/ReturnPages"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <PublicRoute
            exact
            path="/"
            restricted
            component={AuthPage}
            redirectTo="/returnLogin"
          />
          <PrivatRoute
            path="/returnLogin"
            component={ReturnPage}
            redirectTo="/"
          />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
