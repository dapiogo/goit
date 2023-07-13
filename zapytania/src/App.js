import './App.css';
import Gallery from './components/Gallery';
import ModalView from './components/ModalView';

function App() {
  return (
    <div className="App">
      <h1>Zapytania</h1>
      <ModalView/>
      <Gallery/>
    </div>
  );
}

export default App;
