import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout - keep this as static import since it's the root layout
import App from "./App.tsx";

// Pages - lazy loaded for code splitting
const HomePage = lazy(() => import("./pages/landing/page"));
const ContactPage = lazy(() => import("./pages/contact/Page"));
const AboutPage = lazy(() => import("./pages/about/Page"));
const ServicesPage = lazy(() => import("./pages/services/page"));
const ServiceDetailsPage = lazy(() => import("./pages/services/[slug]/page.tsx"));
const FactorialPage = lazy(() => import("./pages/products/factorial"));
const BreeAIPage = lazy(() => import("./pages/products/bree-ai"));

// Define the Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetailsPage/> ,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/products/factorial",
        element: <FactorialPage />,
      },
      {
        path: "/products/bree-ai",
        element: <BreeAIPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
