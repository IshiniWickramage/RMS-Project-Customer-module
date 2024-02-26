import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CustomerCreation from "./pages/Customer/CustomerCreation";
import CustomerList from "./pages/Customer/CustomerList";
import CustomerOverview from "./pages/Customer/CustomerOverview";
import CustomerOverviewSecond from "./pages/Customer/CustomerOverviewSecond";
import CustomerOverviewThird from "./pages/Customer/CustomerOverviewThird";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<CustomerList />}></Route>
  <Route path="/CustomerCreation" element={<CustomerCreation/>}></Route>
  <Route path="/CustomerOverview/:id" element={<CustomerOverview/>}></Route>
  <Route path="/CustomerOverviewSecond" element={<CustomerOverviewSecond/>}></Route>
  <Route path="/CustomerOverviewThird" element={<CustomerOverviewThird/>}></Route>
</Routes>
</BrowserRouter>
    );
}

export default App
