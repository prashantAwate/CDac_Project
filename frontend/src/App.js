import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import CustomerRegistration from './components/CustomerRegistration';
import VendorRegistration from './components/VendorRegistration';
import Home from './components/Home'
import AboutComp from './components/AboutComp';
import FooterComp from './components/FooterComp';
import HeaderComp from './components/HeaderComp';
import AdminHomeComp from './components/AdminHomeComp';import VenderHomeComp from './components/VendorHomeComp';
import CustomerHomeComp from './components/CustomerHomeComp';
import { useAccordionButton } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LogoutComp from './components/LogoutComp';
import LoginComp from './components/LoginComp';
import ViewProduct from './components/ViewProduct';
import ViewCategory from './components/ViewCategories';
import AddCategory from './components/AddCategory';
import VendorHomeComp from './components/VendorHomeComp';
import ViewCustomer from './components/ViewCustomer';
import ViewVendor from './components/ViewVendor';
import NavigationBar from './components/NavigationBar';
import VendorRegistrationComp from './components/VendorRegistration';

function App() {
  return (
    
    <div className="App "> 
      
      <NavigationBar></NavigationBar>

      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutComp></AboutComp>}></Route>
        <Route path='/login' element={<LoginComp></LoginComp>}></Route>
        <Route path='/cregistration' element={<CustomerRegistration></CustomerRegistration>}></Route>
        <Route path='/vregistration' element={<VendorRegistration></VendorRegistration>}></Route>
        <Route path='/adminhome' element={<AdminHomeComp></AdminHomeComp>}></Route> 
        <Route path='/vendorhome' element={<VendorHomeComp></VendorHomeComp>}></Route>
        <Route path='/customerhome' element={<CustomerHomeComp></CustomerHomeComp>}></Route>
        <Route path='/logout' element={<LogoutComp></LogoutComp>}></Route>
        
      </Routes>

      <Routes>
            <Route path='/viewcategories' element={<ViewCategory></ViewCategory>}></Route>
            <Route path='/addcategories' element={<AddCategory></AddCategory>}></Route>
            <Route path="/viewproduct" element={<ViewProduct></ViewProduct>}></Route>
            <Route path="/viewcustomers" element={<ViewCustomer></ViewCustomer>}></Route>
            <Route path="/viewvendor" element={<ViewVendor></ViewVendor>}></Route>
      </Routes>

    </div>
    

  );
}

export default App;
