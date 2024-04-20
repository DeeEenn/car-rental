// ReservationSystem.js
import React, { useContext, useState } from 'react';
import { CarsContext } from './Cars';

const ReservationSystem = () => {
    const { cars } = useContext(CarsContext); // Přístup k seznamu aut z kontextu
    const [reservation, setReservation] = useState({
        carId: '',
        pickupDate: '',
        returnDate: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReservation(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Rezervace byla odeslána:", reservation);
    };

    return (
        <div className="flex justify-center items-center bg-orange-100 py-10">
            <div className="w-full max-w-4xl p-5 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-thin text-center mb-6">Reserve a vehicle</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Vehicle
                        </label>
                        <select
                            name="carId"
                            value={reservation.carId}
                            onChange={handleInputChange}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required>
                            <option value="">Select a vehicle</option>
                            {cars.map(car => (
                                <option key={car.id} value={car.id}>{car.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Date and pickup time
                        </label>
                        <input
                            type="datetime-local"
                            name="pickupDate"
                            value={reservation.pickupDate}
                            onChange={handleInputChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required />
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Date and return time
                        </label>
                        <input
                            type="datetime-local"
                            name="returnDate"
                            value={reservation.returnDate}
                            onChange={handleInputChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Full name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={reservation.name}
                            onChange={handleInputChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={reservation.email}
                            onChange={handleInputChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Phone number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={reservation.phone}
                            onChange={handleInputChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required />
                    </div>
                    <div className=" justify-center px-3 mb-6">
                        <button
                            type="submit"
                            className="w-60 justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Reserve
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservationSystem;
