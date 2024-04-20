import { Link } from "react-scroll";
import auto from './images/auto.png';

const UvodSekce = () => {
    return (
        <div id="home" className="relative">
            <img src={auto} alt="Luxury Cars" className="w-full h-auto object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center">
                <h1 className="text-white text-4xl font-bold mb-4">Your journey begins now.</h1>
                <p className="text-white text-xl mb-6">Explore and seek the beauty around you with our vehicles.</p>
                <Link to="cars" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-colors duration-300" spy={true} smooth={true} offset={-70} duration={500}>
                    Look at our vehicles
                </Link>
            </div>
        </div>
    );
};

export default UvodSekce;