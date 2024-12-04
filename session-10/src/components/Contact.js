const Contact = () => {
    return (
        <div className="flex flex-col bg-gray-50">
            <div className="flex-1 max-w-7xl mx-auto p-6 bg-white md:mt-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Form Section */}
                    <div className="md:w-1/2 bg-white p-8">
                        <header className='text-center md:text-left mb-8'>
                            <h1 className='text-3xl font-bold text-black mb-4'>Get in Touch</h1>
                            <p className='text-base text-gray-600'>We'd love to hear from you! Please fill out the form below, and we'll get back to you soon.</p>
                        </header>
                        <form className='flex flex-col gap-6 bg-transparent bg-none'>
                            <input
                                type="text"
                                placeholder='Full Name'
                                className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300'
                                id='username'
                            />
                            <input
                                type="email"
                                placeholder='Email Address'
                                className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300'
                                id='email'
                            />
                            <textarea
                                placeholder='Your Message'
                                className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300'
                                id='message'
                                rows='4'
                            />
                            <button
                                type="submit"
                                className='bg-black font-bold text-white p-4 rounded-lg uppercase hover:bg-blue-700 transition duration-300'
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://tse2.mm.bing.net/th?id=OIP.gxSrEC8eeNa45eej-oshnwHaD4&pid=Api&P=0&h=180"
                            alt="Contact Us Illustration"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
