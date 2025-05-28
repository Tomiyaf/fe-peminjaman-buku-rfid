import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ListBuku from "../pages/ListBuku.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "list-buku",
        element: <ListBuku />,
      },
    ],
  },
]);

export default router;
