import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import InfinitePage from "./pages/InfinitePage";
import QueryPage from "./pages/QueryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/infinity" element={<InfinitePage />} />
        <Route path="/query" element={<QueryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
