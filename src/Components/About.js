import office from './images/office.png'
const About = () => {
    return (
        <section id="about" className="bg-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-thin text-center text-gray-800 mb-8">
                    About Us
                </h2>
                <div className="flex flex-wrap justify-center items-center text-gray-600">
                    <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
                        <p className="mb-6">
                            Founded in 1999, our car rental service prides itself on reliable and accessible vehicle
                            options. As a family-owned business, we emphasize a personal touch and utmost customer
                            satisfaction.
                        </p>
                        <p>
                            We believe in offering nothing less than excellence, a commitment that is reflected in the
                            quality of our vehicles and the dedication of our staff.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3 px-6">
                        <img src={office} alt="Our Car Rental Office"
                             className="max-w-full h-auto shadow-lg rounded-lg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
