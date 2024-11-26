import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

// Layouts
import { RootLayout } from "./layouts/RootLayout";
// Pages
import { ErrorPage } from "./pages/error/ErrorPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { ItemPage } from "./pages/item/ItemPage";
import { SaleInvoicePage } from "./pages/saleInvoice/SaleInvoicePage";
import { CategoryPage } from "./pages/category/CategoryPage";
import { AboutPage } from "./pages/about/AboutPage";
import { LoginPage } from "./pages/login/LoginPage";
// import NotFoundPage from "./pages/error/NotFoundPage";
import { CurrencyPage } from "./pages/currency/CurrencyPage";

// const routes = {
//   homePage: {path: "/home",element: <HomePage />,name: "Home",},
//   itemPage: {path: "/items",element: <ItemPage />,name: "Products",},
//   categoryPage: {path: "/items/category",element: <CategoryPage />,name: "Categories",},
//   currencyPage: {path: "/currency",element: <CurrencyPage />,name: "Currency",},
//   salePage: {path: "/sales",name: "Sales",},
//   aboutPage: {path: "/about",name: "About",},
// };

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <DashboardPage /> },
        { path: "/products", element: <ItemPage /> },
        { path: "/sales", element: <SaleInvoicePage /> },
        { path: "/category", element: <CategoryPage /> },
        {
          path: "/currency",
          element: <CurrencyPage />,
          // children: [{ path: "*", element: <CurrencyPage /> }],
        },
        { path: "/about", element: <AboutPage /> },
      ],
    },
    { path: "/auth", element: <LoginPage /> },
  ],
  {
    future: {
      // v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

// const router2 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route path="/" element={<DashboardPage />} />
//       <Route path="/products" element={<ItemPage />} />
//       <Route path="/sales" element={<SaleInvoicePage />} />
//       <Route path="/category" element={<CategoryPage />} />
//       <Route path="/currency" element={<CurrencyPage />} />
//       <Route path="/about" element={<AboutPage />} />
//     </Route>
//   ),
//   {
//     future: {
//       // v7_startTransition: true,
//       v7_relativeSplatPath: true,
//       v7_fetcherPersist: true,
//       v7_normalizeFormMethod: true,
//       v7_partialHydration: true,
//       v7_skipActionErrorRevalidation: true,
//     },
//   }
// );

export { router };
