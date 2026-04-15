import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:()=>fetch('/news.json'),
                hydrateFallbackElement:<span className="flex justify-center items-center min-h-screen font-bold text-5xl">Loading...........</span>
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/newsDetails/:id',
        element:<PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: ()=>fetch('/news.json'),
        hydrateFallbackElement:<span className="flex justify-center items-center min-h-screen font-bold text-5xl">Loading...........</span>
    },
    {
        path:'/*',
        element:<h2>404 error</h2>
    }
])

export default router;