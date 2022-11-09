import { createBrowserRouter } from "react-router-dom";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Main from "../../loyout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
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
                loader: () => fetch("http://localhost:5000/")
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch("http://localhost:5000/services")
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
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
            }
        ]
    }
])

export default router;