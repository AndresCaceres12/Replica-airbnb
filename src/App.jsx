import Principal from "./pages/Principal";
import { LanguageProvider } from "./components/useProvider";
function App() {
  
  return (
    <>
    <LanguageProvider>
       <Principal />
  
    </LanguageProvider>
   

      
      {/* Otros componentes y contenido de tu aplicación */}
    
   
    </>
  );
}

export default App;
