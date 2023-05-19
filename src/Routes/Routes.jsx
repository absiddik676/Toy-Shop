import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home/Home";
import LoginPage from "../page/LoginPage/LoginPage";
import AddToyForm from "../page/AddToyForm/AddToyForm";
import RegisterPage from "../page/RegisterPage/RegisterPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<LoginPage/>
        },
        {
            path:'add-toy',
            element:<AddToyForm/>
        },
        {
            path:'/register',
            element:<RegisterPage/>
        },
      ]
    },
  ]);

export default router