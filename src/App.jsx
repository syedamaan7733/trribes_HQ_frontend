import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RootLayout from "./layouts/RootLayout";

const links = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            {links.map((item, _) => {
              return <Route key={_} path={item.path} element={item.element} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
