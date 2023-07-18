import logo from './logo.svg';
import './App.css';
import { FirstStateFC } from './components/FirstStateFC';
import ClassFirst from './components/ClassFirst';
import { LegitStateFc } from './components/LegitStateFc.jsx';
import ClassCykl from './components/ClassCykl';
import { FCCykl } from './components/FCCykl';
import { useState } from 'react';

function App() {
  const [isOpenComponent,setIsOpenComponent] = useState(true)


  const toggle = () => {
    setIsOpenComponent(prevState => !prevState)
  }

  return (
    <div className="App">
      {/* <h1>Hooks (useState, useEffect)</h1>
      <h1>Funkcyjny komponent</h1>
      <FirstStateFC />
      <h1>Klasowy komponent</h1>
      <ClassFirst/>
      <h1>Legit FC</h1>
      <LegitStateFc/> */}
      <LegitStateFc/> 
      <div>---------------------useEffect-----------------</div>
      <button onClick={toggle}>toggle components</button>
      {isOpenComponent && (
        <div>
          <div>
            <h1>Class Example</h1>
            <ClassCykl/>
          </div>
          <div>
            <h1>Fn Example</h1>
            <FCCykl/>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
