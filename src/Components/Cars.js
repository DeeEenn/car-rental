import { createContext, useState } from "react";
import audi from "./images/audiA4.png";
import passaat from "./images/VW Passat.png";
import citygo from "./images/citygo.png";

export const CarsContext = createContext();

export const CarsProvider = ({children}) => {
    const [cars, setCars] = useState([
        {id: 1, name: 'Audi A4 2017', image:audi, price: 1400, popis: 'Comfortable sedan for a whole family.',
            specifications: {
                engine: '2.0 TFSI 190 PS',
                fuelConsumption: '5.6 l/100 km',
                seats: 5,
                equipment: ['Automatic Heater', 'Navigation System', 'LED Lights']
            }
        },
        {id: 2, name: 'VW Passat 2014',image:passaat, price: 1200, popis:'Want a reliable and powerfull car?',
            specifications: {
                engine: '1.8 TSI 160 PS',
                fuelConsumption: '6.5 l/100 km',
                seats: 5,
                equipment: ['Cruise control', 'Parking senzors', 'Multi-function wheel']
            }
        },
        {id: 3, name: 'Skoda CITYGO 2018',image:citygo, price: 1000, popis:'Fancy a ride around a city?',
            specifications: {
                engine: '1.0 MPI 60 PS',
                fuelConsumption: '4.5 l/100 km',
                seats: 4,
                equipment: ['Bluetooth handsfree', 'Parking senzors']
            }
        }
    ]);

    return (
        <CarsContext.Provider value={{cars, setCars}}>
            {children}
        </CarsContext.Provider>
    )

}