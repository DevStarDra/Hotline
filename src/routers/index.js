import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "../views/NoPage";
import Hotline from "../views/Hotline";

export default function CasinoRouters() {
  return (
    <Routes> 
      <Route path="">
        <Route path="" element={<Hotline />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
