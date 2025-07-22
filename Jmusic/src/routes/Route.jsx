import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../Pages/Home";
import FinalProjeck from "../Pages/FinalProject";

// Generation pages
import GenRouter from "../Pages/Gen/GenRouter"; // Router untuk pagination
import Gen12 from "../Pages/Gen/Gen12";
import Gen13 from "../Pages/Gen/Gen13";
import Gen14 from "../Pages/Gen/Gen14";
import Gen15 from "../Pages/Gen/Gen15";

// Final Generation pages (untuk navigasi dari FinalProject)
import FinalGen12 from "../Pages/Final/FinalGen12";
import FinalGen13 from "../Pages/Final/FinalGen13";
import FinalGen14 from "../Pages/Final/FinalGen14";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Halaman utama */}
        <Route index element={<Home />} />

        {/* Halaman generations dengan pagination dinamis */}
        <Route path="gen" element={<GenRouter />} />

        {/* Halaman individual generation */}
        <Route path="gen12" element={<Gen12 />} />
        <Route path="gen13" element={<Gen13 />} />
        <Route path="gen14" element={<Gen14 />} />
        <Route path="gen15" element={<Gen15 />} />

        {/* Final Generation pages - untuk navigasi dari FinalProject */}
        <Route path="finalgen12" element={<FinalGen12 />} />
        <Route path="finalgen13" element={<FinalGen13 />} />
        <Route path="finalgen14" element={<FinalGen14 />} />

        {/* Halaman lainnya */}
        <Route path="finalproject" element={<FinalProjeck />} />
      </Route>
    </Routes>
  );
}

export default RouteList;