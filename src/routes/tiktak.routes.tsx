import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { router } from "../config";
const Tiktak = lazy(() => import("../pages/tiktak"));

const tiktakrouter: RouteObject = {
    path: router.home.tiktok,
    element: (
        <Suspense fallback={<p> Loading ... </p>}>
            <Tiktak />
        </Suspense>
    ),
};
export default tiktakrouter;
