import Header from './Components/Header';
import { Helmet } from "react-helmet";
import UvodSekce from "./Components/UvodSekce";
import SeznamAut from "./Components/SeznamAut";
import {CarsProvider} from "./Components/Cars";
import RezervacniSystem from "./Components/RezervacniSystem";
import About from "./Components/About";

function App(){
    return (
        <div>
            <Helmet>
                <title>Car Rental</title>
            </Helmet>
            <Header/>
            <UvodSekce/>
            <CarsProvider>
                <SeznamAut></SeznamAut>
                <RezervacniSystem></RezervacniSystem>
            </CarsProvider>
            <About/>
        </div>
    )
}

export default App;