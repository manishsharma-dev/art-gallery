import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AdminHome } from "./Admin/AdminHome/AdminHome";
import  AdminLogin  from "./Admin/AdminLogin/AdminLogin";
import { AdminMain } from "./Admin/AdminMain/AdminMain";
import "./App.css";
import { Home } from "./Main/Home/Home";
import { checkAdminAuthLoader } from "./Util/AdminHelper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
