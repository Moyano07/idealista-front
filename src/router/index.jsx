import {createBrowserRouter} from "react-router-dom";

import Home  from "../pages/Home";
import QualityAdvertising from "../pages/QualityAdvertising";
import PublicAdvertising from "../pages/PublicAdvertising";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import {loaderPublicListingAdvertising,loaderQualityListingAdvertising} from "../Services/AdvertisingServices";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <LayoutPublic></LayoutPublic>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/advertising-quality",
                element: <QualityAdvertising/>,
                loader: loaderQualityListingAdvertising
            },
            {
                path: "/advertising-public",
                element: <PublicAdvertising/>,
                loader: loaderPublicListingAdvertising
            }
        ]
    },
]);