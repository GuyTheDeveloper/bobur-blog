import React from "react";
import { useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home/home"));
const PostSingle = React.lazy(() => import("../pages/post-single/post-single"));
const Error = React.lazy(() => import("../pages/error/error"));

export const Routes = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/posts/:postId",
      element: <PostSingle />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return route;
};
