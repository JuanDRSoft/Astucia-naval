import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Alerta from "./components/Alerta";
import Instrucciones from "./components/Instrucciones";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Dashboard />} />
      </Routes>

      <Alerta />
      <Instrucciones />
    </BrowserRouter>
  );
}

export default App;
