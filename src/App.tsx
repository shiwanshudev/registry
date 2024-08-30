import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";

import searchLoader from "./pages/search/searchLoader";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
          loader: searchLoader,
        },
        {
          path: "/packages/:name",
          element: <DetailsPage />,
          loader: detailsLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
