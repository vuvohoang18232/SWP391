import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import Home from "../components/guestAndCustomer/home/Home.jsx";
import Blog from "../components/guestAndCustomer/blog/Blog.jsx";
import Manager from "../components/manager/Manager.jsx";
import ManageService from "../components/manager/manageService/ManageService.jsx";
import Admin from "../components/admin/Admin.jsx";
import ManageAccount from "../components/admin/manageAccount/ManageAccount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/manager",
    element: <Manager />,
    children: [
      {
        path: "",
        element: <ManageService />,
      },
      {
        path: "manage-service",
        element: <ManageService />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <ManageAccount />,
      },
      {
        path: "manage-account",
        element: <ManageAccount />,
      },
    ],
  },
]);

const PageRouter = () => {
  return <RouterProvider router={router} />;
};

export default PageRouter;
