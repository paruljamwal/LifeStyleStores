import './App.css';
import {Category} from './components/Category.jsx'
import {Route,Routes}from 'react-router-dom'
import Singledata from './components/singledata';
function App() {
  return (
    <>
      <div className='container'>

      <Routes>
        <Route path={'/category'} element={<Category/>}></Route>
        <Route path={'/category/:id'} element={<Singledata/>}></Route>

        {/* <Route path={'/cart'} element={<Cart />}></Route> */}
      </Routes>

  


      </div>
    </>
  );
}

export default App;
