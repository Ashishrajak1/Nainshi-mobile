import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./HomeComponent/Login";
import Navbar from "./Navbar";
import { auth } from "./CartStore/firebase";
import { SET_USER } from "./CartStore/ActionType";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>", authUser);

      if (authUser) {
        dispatch({
          type: SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
