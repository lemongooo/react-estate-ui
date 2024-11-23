import "./layout.scss"
import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/list",
      element: <ListPage />,
    },
  ]);
  return (

    <RouterProvider router={router}></RouterProvider>
  );
}

export default App