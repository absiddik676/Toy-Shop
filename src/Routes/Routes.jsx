import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home/Home";
import LoginPage from "../page/LoginPage/LoginPage";
import AddToyForm from "../page/AddToyForm/AddToyForm";
import RegisterPage from "../page/RegisterPage/RegisterPage";
import AllToy from "../page/AllToy/AllToy";
import MyToy from "../page/MyToy/MyToy";

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
        {
            path:'/allToys',
            element:<AllToy/>
        },
        {
            path:'/myToy',
            element:<MyToy/>
        },
      ]
    },
  ]);

export default router