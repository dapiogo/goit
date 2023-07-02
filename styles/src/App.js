import { Alert } from "./Alert";
import "./App.css";
import { OffersInline } from "./OffersInline";
import { OffersVaniliaCss } from "./OffersVaniliaCss";
import { AlertCslx } from "./AlertCslx";
import { AlertCssModule } from "./AlertCssModule";
import { AlertTestModule } from "./AlertTestModule";
import { TestKomponent } from "./TestKomponent";
import user from "./consts/users.json";

function App() {
  return (
    <div className="App">
      <div>Inline</div>
      <OffersInline />
      <div>Vanilla Css</div>
      <OffersVaniliaCss />
      <div>Dynamiczna zmiana stylu</div>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warningx">
        Please update your profile contact information
      </Alert>
      <div>-----------------------------</div>
      <AlertCslx variant="second">
        Please update your profile contact information
      </AlertCslx>
      <AlertCssModule>Css module</AlertCssModule>
      <AlertCssModule>Css module</AlertCssModule>
      <AlertTestModule>
        Css module inny komponent inne id w className
      </AlertTestModule>

      <TestKomponent name={user.name} surname={user.surname} />
    </div>
  );
}

export default App;
