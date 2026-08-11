import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    // Envia a visualização da página atual sempre que o App carrega
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <BrowserRouter>
      {/* A Header fica fora das Routes para aparecer em todas as páginas */}
      <Header />

      <main className="pt-20">
        {" "}
        {/* Padding para não cobrir o conteúdo com a Nav fixa */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
