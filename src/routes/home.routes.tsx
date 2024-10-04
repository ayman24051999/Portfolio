import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { router } from "../config";
const ItemsPage = lazy(() => import("../pages/items"));

const homeRouter: RouteObject = {
    path: router.home.home,
    element: (
        <Suspense fallback={<p> Loading ... </p>}>
            <ItemsPage />
        </Suspense>
    ),
};
export default homeRouter;
