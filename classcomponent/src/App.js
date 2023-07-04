import AnonimCallbackComponent from './AnonimCallbackComponent';
import './App.css';
import FirstClassComponent from './FirstClassComponent';
import Fn1 from './Fn1';
import Fn2 from './Fn2';
import Fn3 from './Fn3';
import Zadanie from './Zadanie';

function App() {
  return (
    <div className="App">
      <h1>Komponenty klasowe</h1>
      <div className="seperator"></div>
      <FirstClassComponent text="Moj pierwszy komponent" count={100} />
      <div className="seperator">Anonim Callback</div>
      <AnonimCallbackComponent likesCount={1} />
      <div className="seperator">bindowanie opcja 1</div>
      <Fn1 likes={2} />
      <div className="seperator">bindowanie opcja przez konstruktor</div>
      <Fn2 likes={4} />
      <div className="seperator">Arrow function method - tak robimy</div>
      <Fn3 likes={5} />
      <div className="seperator">Zadanie aktualizacja stanu</div>
      <Zadanie />
    </div>
  );
}

export default App;
