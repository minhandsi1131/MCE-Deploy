import { Navigate } from "react-router";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Screens/Dashboard";
import Home from "../Screens/Dashboard/Home";

import LoginScreen from "../Screens/LoginScreen";
import PublicRoutes from "./PublicRoutes";
import Inbox from "../Screens/Dashboard/Inbox";
import MessageList from "../Screens/Dashboard/MessageList";
import Library from "../Screens/Dashboard/Librarys";
const RedirectToDashboard = () => {
  return <Navigate to={"/login"} replace />;
};

const indexRoutes = [
  {
    path: "/login",
    element: <PublicRoutes Component={LoginScreen} />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes Component={Dashboard} />,
  },
  {
    path: "/dashboard/home",
    element: <PrivateRoutes Component={Home} />,
  },
  {
    path: "/dashboard/inbox",
    element: <PrivateRoutes Component={Inbox} />,
  },
  {
    path: "/dashboard/messageList",
    element: <PrivateRoutes Component={MessageList} />,
  },
  {
    path: "/dashboard/library",
    element: <PrivateRoutes Component={Library} />,
  },
  { path: "*", element: <RedirectToDashboard /> },
];
export default indexRoutes;
