import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";
import homeRouter from "./home.routes";

import { router as path } from "../config";
import tiktakrouter from "./tiktak.routes";
import portfeilleRouter from "./portfeuille.routes";
import aboutRouter from "./aboutme.routes";

// todo
const routes: RouteObject[] = [
    {
        path: path.home.main,
        element: <Layout />,
        children: [homeRouter, tiktakrouter],
    },
    portfeilleRouter,
    aboutRouter,
];

const router = createBrowserRouter(routes);
export default router;
