import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import ReservePage from "../Pages/ReservePage/ReservePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"",element:<HomePage/>},
            {path:"order-page/:offerId",element:<ReservePage/>},
            {path:"login-page",element:<LoginPage/>}
        ]
    }
])