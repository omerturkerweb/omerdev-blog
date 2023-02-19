import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Profile from "./pages/Layout/Profile";
import { Provider } from "./context/main-context/MainContext";
import Html from "./pages/html/html";
import Css from "./pages/css/Css";
import Javascript from "./pages/javascript/Javascript";
import React from "./pages/react/React";
import Typescript from "./pages/typescript/Typescript";
import Tailwind from "./pages/tailwind/Tailwind";
import Bootstrap from "./pages/bootstrap/Bootstrap";
import More from "./pages/more/More";
import Notfound from "./pages/notfound/Notfound";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />}></Route>
            <Route path="html" element={<Html />}></Route>
            <Route path="css" element={<Css />}></Route>
            <Route path="javascript" element={<Javascript />}></Route>
            <Route path="react" element={<React />}></Route>
            <Route path="typescript" element={<Typescript />}></Route>
            <Route path="tailwind" element={<Tailwind />}></Route>
            <Route path="bootstrap" element={<Bootstrap />}></Route>
            <Route path="more" element={<More />}></Route>
            <Route
              path="/what-is-html"
              element={<div>WHAT İS HTML KISMI</div>}
            ></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
