import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateCompo from './components/PrivateCompo';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';
import UpdateProduct from './components/UpdateCompo';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route element = {<PrivateCompo />}>
        <Route path = "/" element = {<ProductsList />} />
        <Route path = "/add" element = {<AddProduct />} />
        <Route path = "/update/:id" element = {<UpdateProduct />} />
        <Route path = "/logout" element = {<h1>Logout Component</h1>} />
        <Route path = "/profile" element = {<h1>Profile Component</h1>} />
        </Route>

        <Route path = "/signup" element = {<SignUp />} />
        <Route path = "/login" element = {<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
  
    </div>
  );
}

export default App;
