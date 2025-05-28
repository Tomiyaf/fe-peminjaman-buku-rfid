import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ListBuku from "../pages/ListBuku.jsx";
import ListPengguna from "../pages/ListPengguna.jsx";
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
      {
        path: "list-pengguna",
        element: <ListPengguna />,
      },
    ],
  },
]);

export default router;
