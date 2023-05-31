import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import Home from "../components/guestAndCustomer/home/Home.jsx";
import Blog from "../components/guestAndCustomer/blog/Blog.jsx";
import AboutUs from "../components/guestAndCustomer/aboutUs/AboutUs.jsx";
import Consultations from "../components/guestAndCustomer/consultations/Consultations.jsx";
import Workshop from "../components/guestAndCustomer/workshop/Workshop.jsx";
import CourseOnline from "../components/guestAndCustomer/courseOnline/CourseOnline.jsx";
import Contact from "../components/guestAndCustomer/contact/Contact.jsx";
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
        path: "consultations",
        element: <Consultations />,
      },
      {
        path: "workshop",
        element: <Workshop />,
      },
      {
        path: "course-online",
        element: <CourseOnline />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
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
