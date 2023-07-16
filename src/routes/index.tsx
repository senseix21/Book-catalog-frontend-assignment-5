import { createBrowserRouter } from "react-router-dom"
import Home from "../page/Home";
import App from "../App";
import AllBooks from "../page/AllBooks";
import WishList from "../page/WishList";
import AddNew from "../page/AddNew";
import Signin from "../page/Signin";
import Signup from "../page/Signup";
import NotFound from "../page/NotFound";
import BookDetails from "../page/BookDetails";
import EditBook from "../page/EditBook";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allBooks',
                element: <AllBooks />
            },
            {
                path: '/books/:id',
                element: <BookDetails />
            }
            ,
            {
                path: '/editbook/:id',
                element: <EditBook />
            },
            {
                path: '/wishList',
                element: <WishList />
            },
            {
                path: '/addNew',
                element: <AddNew />
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/signup",
                element: <Signup />
            },

            {
                path: "*",
                element: <NotFound />
            },
        ]
    },


]);

export default routes;