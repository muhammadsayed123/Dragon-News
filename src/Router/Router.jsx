import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layouts/AuthLayout";

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
                loader:()=>fetch('/news.json')
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
        path:'/news',
        element:<h2>News section</h2>
    },
    {
        path:'/*',
        element:<h2>404 error</h2>
    }
])

export default router;