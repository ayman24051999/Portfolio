import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { router } from "../config";
const PortfeuillePage = lazy(() => import("../pages/portfeuille"));

const portfeilleRouter: RouteObject = {
    path: router.home.portfeille,
    element: (
        <Suspense fallback={<p> Loading ... </p>}>
            <PortfeuillePage />
        </Suspense>
    ),
};
export default portfeilleRouter;
