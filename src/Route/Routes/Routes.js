import { createBrowserRouter } from "react-router-dom";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Main from "../../loyout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import MyReview from "../../Pages/Reviews/MyReview/MyReview";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://viva-visa-server-mithswas.vercel.app/")
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch("https://viva-visa-server-mithswas.vercel.app/services")
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://viva-visa-server-mithswas.vercel.app/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/myReview",
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;
