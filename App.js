import Signin from "./signin";
import Signup from "./signup";
import HomePage from "./homepage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/homepage" element={<HomePage />} />

      </Routes>
    </div>
  );
}

export default App;
