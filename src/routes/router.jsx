import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ListBuku from "../pages/ListBuku.jsx";
import ListMember from "../pages/ListPengguna.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Peminjaman from "../pages/Peminjaman.jsx";
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
        path: "list-member",
        element: <ListMember />,
      },
      {
        path: "peminjaman",
        element: <Peminjaman />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
