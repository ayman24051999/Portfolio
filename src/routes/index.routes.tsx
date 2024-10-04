import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";
import homeRouter from "./home.routes";

import { router as path } from "../config";
import tiktakrouter from "./tiktak.routes";

// todo
const routes: RouteObject[] = [
    {
        path: path.home.main,
        element: <Layout />,
        children: [homeRouter, tiktakrouter],
    },
];

const router = createBrowserRouter(routes);
export default router;
