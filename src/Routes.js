import {createBrowserRouter} from "react-router-dom";
import MainPage from "./MainPage";
import ErrorPage from "./ErrorPage";
import SpecializedGoods from "./SpecializedGoods";
import ProductPage from "./ProductPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/:title",
        element: <SpecializedGoods/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/:title/:productTitle",
        element: <ProductPage/>,
        errorElement: <ErrorPage/>
    }
])