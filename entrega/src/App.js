import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header container">
        <NavBar />
      </header>
      <main className="App-main container"> 
        <ItemListContainer className="lista" greeting="Bienvenidos al Bar de Moe"/>
      </main>
      <footer className="App-footer container">
        <p>Trabajo realizado por Nicolas Arcieri</p>
      </footer>
    </div>
  );
}

export default App;
