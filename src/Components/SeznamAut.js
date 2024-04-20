import {useContext, useState} from "react";import { CarsContext } from "./Cars";

const SeznamAut = () => {
    const [isModalOpen, setModalopen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const { cars } = useContext(CarsContext);

    const openModal = (car) => {
        setSelectedCar(car);
        setModalopen(true);
    }

    const closeModal = () => {
        setModalopen(false);
    }

    return (
        <section id="cars" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-thin text-center mb-6">Our vehicles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white shadow-lg rounded-lg p-4">
                            <img src={car.image} alt={car.name} className="w-full h-50 object-cover rounded-md"/>
                            <h3 className="text-xl mt-4">{car.name}</h3>
                            <p className="text-gray-700">{car.description}</p>
                            <p className="font-thin">{car.price} CZK/day</p>
                            <button onClick={() => openModal(car)}
                                    className="mt-4 py-2 px-4 bg-orange-600 text-white rounded hover:bg-orange-400 transition-colors">
                                Open details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg">
                        <h2 className="text-2xl font-bold">{selectedCar.name}</h2>
                        <p>{selectedCar.description}</p>
                        <ul className="list-disc list-inside">
                            <li>Engine: {selectedCar.specifications.engine}</li>
                            <li>Consumption: {selectedCar.specifications.fuelConsumption}</li>
                            <li>Seats: {selectedCar.specifications.seats}</li>
                            <li>Equipment: {selectedCar.specifications.equipment.join(', ')}</li>
                        </ul>
                        <p className="mt-2">{selectedCar.price} CZK/day</p>
                        <button onClick={closeModal} className="py-2 mt-1 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">Close</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default SeznamAut;