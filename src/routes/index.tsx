import { createBrowserRouter } from "react-router-dom"
import Home from "../page/Home";
import Login from "../page/Login";
import App from "../App";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: "*",
        element: <h1>404</h1>
    },

]);

export default routes;