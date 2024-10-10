import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { router } from "../config";
const AboutPage = lazy(() => import("../pages/aboutme"));

const aboutRouter: RouteObject = {
    path: router.home.aboutme,
    element: (
        <Suspense fallback={<p> Loading ... </p>}>
            <AboutPage />
        </Suspense>
    ),
};
export default aboutRouter;
