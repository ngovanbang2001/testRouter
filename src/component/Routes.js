import React from "react";

import Home from "./Home";
import About from "./About";
import NotMatch from "./NotMatch";
import Product from "./Product";
import Login from "./Login";
export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/product",
    exact: false,
    main: ({ match }) => <Product match={match} />,
  },
  {
    path: "/login",
    exact: false,
    main: (location) => <Login location={location} />,
  },
  {
    path: "*",
    exact: false,
    main: () => <NotMatch />,
  },
];
