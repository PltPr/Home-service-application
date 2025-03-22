import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import ReservePage from "../Pages/ReservePage/ReservePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"",element:<HomePage/>},
            {path:"order-page/:offerId",element:<ProtectedRoute><ReservePage/></ProtectedRoute>},
            {path:"login-page",element:<LoginPage/>},
            {path:"register-page",element:<RegisterPage/>}
        ]
    }
])