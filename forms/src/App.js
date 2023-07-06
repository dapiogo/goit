import './App.css';
import AddProduct from './components/AddProduct';
import LoginForm from './components/Form';
import Form2 from './components/Form2';

function App() {
  return (
    <div className="App">
      <AddProduct/>
      <div className='seperator'></div>
      <LoginForm/>
      <div className='seperator'></div>
      <Form2/>
      <div className='seperator'></div>
    </div>
  );
}

export default App;
