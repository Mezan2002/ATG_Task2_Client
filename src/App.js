import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CreatePost from "./Components/CreatePost/CreatePost";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Login from "./Components/Login/Login";
import Posts from "./Components/Posts/Posts";
import Register from "./Components/Register/Register";
import UpdatedPost from "./Components/UpdatedPost/UpdatedPost";

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
      path: "/updatePost/:id",
      element: <UpdatedPost></UpdatedPost>,
      loader: ({ params }) =>
        fetch(`https://atg-server-tau.vercel.app/updatedPost/${params.id}`),
    },
    {
      path: "/logIn",
      element: <Login></Login>,
    },
    {
      path: "/forgotPass",
      element: <ForgotPass></ForgotPass>,
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
