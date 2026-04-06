import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

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
                element:<CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path:'/auth',
        element:<h2>Auth section</h2>
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