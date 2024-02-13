import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";





const Body = () => {

    const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  //when user goes directly to /header without authenticaiton he should go to login page
  //navigate dont work in root component so we have to move to header it will be always there in the app in any routes
  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
