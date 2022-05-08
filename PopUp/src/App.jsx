import "./App.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Product } from "./components/productshow/Product";
import { AllRoutes } from "./AllRoutes/AllRoutes";


function App() {

  return (

    <div className="container">
       <AllRoutes/>
    </div>
  );
}

export default App;
