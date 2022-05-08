import { Navbar } from "./components/Navbar/Navbar";
// import { Cart } from "./components/Cart";
import { Login } from "./components/Login/Login";
import { Sign } from "./components/Signup/Sign";
import {Routes,Route} from "react-router-dom"
import TopNavbar from './components/TopNavbar.js'

function App() {
  return (
    <div className="App">
   
    <TopNavbar/>
    <Navbar />

      <Routes>
        <Route path={'/login'} element={<Login />}></Route>
        {/* <Route path={'/cart'} element={<Cart />}></Route> */}
        <Route path={'/sign'} element={<Sign />}></Route>
      </Routes>

    
    </div>
  );
}

export default App;
