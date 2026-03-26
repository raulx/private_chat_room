import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainAppPage from "./pages/mainAppPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainAppPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
