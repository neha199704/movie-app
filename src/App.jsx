/* eslint-disable */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/:movie" element={<DetailPage></DetailPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
