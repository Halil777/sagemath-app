import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path={"/"} element={<Index />}>
            <Route index element={<Home />} />
            <Route to="/about" element={<About />} />
            <Route to="/contact" element={<Contact />} />
            <Route to="/help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
