import { Suspense, lazy } from "react";
import { RouteObject } from "react-router";
import SuspenseLoader from "./GeneralComponents/SuspenseLoader";
import BaseLayout from "./Layout";
import PageLayout from "./Layout/PageLayout";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Page
const HomePage = Loader(lazy(() => import("../src/pages/homepage")));
const LoginPage = Loader(lazy(()=> import('../src/pages/login')))


// Router
const routes: RouteObject[] = [
  {
    path: "",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "authen",
    element: <BaseLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
export default routes;
