import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; //! 🆕 Importación
import "react-toastify/dist/ReactToastify.css"; //! 🆕 Estilos necesarios



import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/ui";

import NotFound from "./pages/NotFound";
import RedirectPage from "./pages/RedirectPage";

function App() {
  

  return (
    <>
      <Navbar />

      <ToastContainer position="top-right" autoClose={5000} /> {/* //! */}

      <Container className="py-5">
        <Routes>
          
            <Route path="/" element={<RedirectPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
