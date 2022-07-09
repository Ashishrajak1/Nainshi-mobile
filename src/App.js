import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
