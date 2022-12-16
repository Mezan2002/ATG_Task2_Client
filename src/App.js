import "./App.css";
import Login from "./Components/Login/Login";
import Posts from "./Components/Posts/Posts";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Posts></Posts>
      <Register></Register>
      <Login></Login>
    </div>
  );
}

export default App;
