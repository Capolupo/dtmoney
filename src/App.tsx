import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";


{/* Apenas uma boa pratica como acessibilidade setar quem é root da aplicação */}
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }   
  return (    
    <>
      {/* <h1>Hello world</h1> */}
      {/* Adicionando o componente Header para ser renderizado */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
