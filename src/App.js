
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"

import Product from "./components/Product";
import "./App.css";


function App() {
  return (
    <Routes>
   

    <Route path="/" element={<Product />} ></Route>
    

  </Routes>

  );
}

export default App;
