import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Modulos from "./pages/Modulos";
import Cursos from "./pages/Cursos";
import Usuarios from "./pages/Usuarios";
import Navbar from "./components/Layout/Navbar";
function App() {
 

  return (
    <>
    <div className="flex flex-col h-screen">

    <Navbar />
      <Routes>
        <Route path={"/"} element={<Dashboard/>}></Route>
        <Route path={"/dashboard"} element={<Dashboard/>}></Route>

        <Route path={"/admin/modulos"} element={<Modulos />}></Route>
        <Route path={"/admin/cursos"} element={<Cursos />}></Route>
        <Route path={"/admin/usuarios"} element={<Usuarios />}></Route>


      </Routes>
      {/* <div className="h-12 bg-slate-400">hi</div> */}
    
    </div>
    </>
  );
}

export default App;
