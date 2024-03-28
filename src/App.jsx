// Reaproveitamento de Estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

// Navegando entre páginas

function App() {
  // Melhoria 1: Código copiado, como poderia reutilizar o atributo className="flex items-center"?
  return (
    <main className="w-full flex flex-col h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
