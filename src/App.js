import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CreatePost from "./Components/CreatePost/CreatePost";
import Login from "./Components/Login/Login";
import Posts from "./Components/Posts/Posts";
import Register from "./Components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts></Posts>,
    },
    {
      path: "/createPost",
      element: <CreatePost></CreatePost>,
    },
    {
      path: "/logIn",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
