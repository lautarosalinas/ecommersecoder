import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
    </div>
  );
}

export default App;
