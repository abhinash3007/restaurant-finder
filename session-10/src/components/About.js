const About = () => {
    return (
        <>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-6 bg-white">
                <div className="about-left text-center md:text-left md:w-1/2 gap-10">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-snug">
                        Welcome to <br /> The world of <br />
                        <span className="text-red-500 bg-yellow-300 p-3 rounded-lg">Tasty & Fresh Food</span>
                    </h1>
                    <h4 className="mt-4 text-xl md:text-2xl font-medium text-gray-600">
                        "Better you will feel if you eat a 
                        <span className="text-red-500"> FoodVilla</span> healthy meal"
                    </h4>
                </div>
                <div className="about-right md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img 
                        src="https://tse3.mm.bing.net/th?id=OIP.uojr_CXL0eKEvV7JGFcJZAHaEo&pid=Api&P=0&h=180" 
                        alt="Food Image" 
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </>
    )
}
export default About;