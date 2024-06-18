// REACT
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { GlobalContext } from "./context/globalContext";
import { useContext, useEffect } from "react";

// COMPONENTS
import "./index.css";
import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
// PAGES
import About from "./page/About";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Product from "./components/Product";
import Korzinka from "./components/Korzinka";
import Login from "./page/Login";
import Register from "./page/Register";
// ACTIONS
import { action as RegistorAction } from "./page/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const { user, dispatch, isAuthChange } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/product/:id", element: <Product /> },
        {
          path: "/korzinka",
          element: <Korzinka />,
        },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegistorAction,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_CHANGE" });
    });
  }, []);
  return <>{isAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
