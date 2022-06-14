import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayouts from "./layouts/AuthLayouts";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
// import FormHojaDeQuejas from "./pages/FormHojaDeQuejas";
import Formulario from "./pages/Formulario";

//Primer Route= Area Publica
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayouts />}>
          <Route path="temporal" element={<Formulario />} />
          <Route index element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
