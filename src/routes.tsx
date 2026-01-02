import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routers/root-layout";
import Dashboard from "./components/pages/Dashboard";
import Main_Content from "./routers/main-content";
import ProductDetail from "./components/pages/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "products", element: <Main_Content /> },
            { path: "products/:id", element: <ProductDetail /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
