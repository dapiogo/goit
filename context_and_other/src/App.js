import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Profiles } from './components/Profiles';
import { ShowToken } from './components/ShowToken';
import { AuthProvider } from './context/AuthContext';
import { ToDo } from './components/ToDo';
import { Main } from './components/Main';
import { UserInfo } from './components/UserInfo';
import { Logout } from './components/Logout';
import { Invoices } from './components/Invoices';
import { InvoiceProvider } from './context/InvoiceContext';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggler } from './components/ThemeToggler';
import { Ref } from './components/Ref';
import { Player } from './components/Player';
import { InputFocus } from './components/inputFocus';
import { NumberSum } from './components/NumberSum';

function App() {
  const [userName,setUserName] = useState('Piotr');

  return (
    <div className="App">
      <ThemeProvider>
        <ThemeToggler/>
          {/* <AuthProvider>
            <Profiles />
            <Main/>
            <UserInfo/>
            <Logout/>
          </AuthProvider>
          <ToDo/>
          <Invoices/> */}
          <Ref/>
          <Player/>
          <InputFocus/>
          <NumberSum numbers={[1,2,3]}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
