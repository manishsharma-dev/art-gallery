import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AdminHome } from "./Admin/AdminHome/AdminHome";
import  AdminLogin, { authAction }  from "./Admin/AdminLogin/AdminLogin";
import { AdminMain } from "./Admin/AdminMain/AdminMain";
import "./App.css";
import { Home } from "./Main/Home/Home";
import { checkAdminAuthLoader } from "./Util/AdminHelper";
import { Parent } from "./Main/Parent/Parent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminMain />,
    children: [
      {
        index: true,
        element: <AdminHome />,
        loader: checkAdminAuthLoader,
      },
      {
        path: "login",
        element: <AdminLogin />,
        action : authAction
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
