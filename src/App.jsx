import { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Login from "./pages/Login";

export const AppContext = createContext({});

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    let lng = localStorage.getItem("lng");
    if (typeof lng !== "undefined" && lng !== null && lng !== "") {
      changeLanguage(lng);
    }
  }, []);
  return (
    <>
      <AppContext.Provider
        value={{
          t: t,
          changeLanguage: changeLanguage,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path={"/"} element={<Index />}>
              <Route path={"/home"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"/help"} element={<Help />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
