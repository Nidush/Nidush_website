import Index from "./pages";
import "./styles/global.css";
import Community from "./pages/community";
import Features from "./pages/features";
import AboutUs from "./pages/aboutUs";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      {/* A NavBar fica fora do <Routes> para estar sempre visível, independentemente da página */}
      <NavBar />

      {/* O <Routes> diz ao React que página carregar dependendo do URL */}
      <Routes>
        {/* Rota para a página principal ("/") */}
        <Route path="/" element={<Index />} />

        {/* Rota para outra página (exemplo: "/contactos") */}
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* Rota "catch-all" (*) para páginas que não existem (Erro 404) */}
        <Route
          path="*"
          element={
            <div className="min-h-screen pt-[100px] flex items-center justify-center text-emerald-950 text-2xl">
              Erro 404 - Página não encontrada
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
