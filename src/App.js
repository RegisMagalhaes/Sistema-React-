import './App.css';

import Lista from'./components/Lista';

function App() {
  return (
    <div className="App">
      <Lista id = "id" name = "nome" descricao = "descrição" data="datadecriação" size = "tamanho"></Lista>
    </div>
  );
}

export default App;
