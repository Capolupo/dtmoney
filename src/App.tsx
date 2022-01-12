import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header"

export function App() {
  return (    
    <>
      {/* <h1>Hello world</h1> */}
      {/* Adicionando o componente Header para ser renderizado */}
      <Header />
      <GlobalStyle />
    </>
  );
}

export default App;
