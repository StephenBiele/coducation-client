import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  