import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "post/:id",
    element:  <Routes>
                <Route path="/" element={<Post />} />
              </Routes>,
  }
]);
