import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Success from "./pages/Success";
import OrderConfirm from "./pages/OrderConfirm";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/confirm" element={<OrderConfirm />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
