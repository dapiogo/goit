
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CommonLayout } from './components/CommonLayout';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Products } from './pages/Products';
import { User } from './pages/User';
import { UserInvite } from './pages/UserInvite';
import { UserSettings } from './pages/UserSettings';

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<CommonLayout/>}>
//         <Route path="home" element={<Home/>}/>
//         <Route path="contact" element={<Contact/>} />
//         <Route path="products" element={<Products/>} />
//         <Route path="products/:id" element={<Product/>} />
//       </Route>
//     </Routes>
//   )
// }

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product/>} />

      <Route path="*" element={<NotFound/>}/>
        <Route path="/user" element={<CommonLayout/>}>
          <Route path="access" element={<User/>}/>
          <Route path="invite" element={<UserInvite/>}/>
          <Route path="settings" element={<UserSettings/>}/>
        </Route>
    </Routes>
  );
}

