import React, { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivatRoute from "./routes/PrivatRoute";
import PublicRoute from "./routes/PublicRoute";
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ReturnPage = lazy(() => import("./pages/ReturnPages"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            type="Circles"
            color="red"
            height={200}
            width={200}
            timeout={3000}
          />
        }
      >
        <ToastContainer autoClose={3000} />
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
