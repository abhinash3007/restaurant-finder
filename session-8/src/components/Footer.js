import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className=" bg-gray-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">About Our Project</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Our Vision</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Our Team</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Help</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">FAQs</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Track Your Order</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Cancel/Refund</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-500">Help Centre</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-blue-500"><i className="fab fa-facebook"> Facebook</i></a></li>
                            <li><a href="#" className="hover:text-blue-500"><i className="fab fa-twitter">Twitter</i></a></li>
                            <li><a href="#" className="hover:text-blue-500"><i className="fab fa-instagram">Instagram</i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Payments</h2>
                        <ul className="flex space-x-4">
                            <li><img src="https://static.seekingalpha.com/uploads/2017/6/28/44583886-14986589045573394_origin.png" alt="Visa" className="w-12 h-auto" /></li>
                            <li><img src="https://pnghq.com/wp-content/uploads/master-png-free-png-images-74331.png" alt="Mastercard" className="w-12 h-auto" /></li>
                            <li><img src="https://orissadiary.com/wp-content/uploads/2018/01/RuPay-Logo_High-Res.png" alt="RuPay" className="w-12 h-auto" /></li>
                            <li><img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/paytm-logo-freelogovectors.net_.png" alt="Paytm" className="w-12 h-auto" /></li>
                            <li><img src="https://static.vecteezy.com/system/resources/previews/021/672/633/large_2x/google-pay-logo-transparent-free-png.png" alt="Google Pay" className="w-12 h-auto" /></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end items-center space-x-4">
                        <a href="#" className="inline-block">
                            <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                                <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-how-setup-for-ios-development-11.png" alt="App Store" className="w-8 h-auto mr-2" />
                                Download on the App Store
                            </button>
                        </a>
                        <a href="#" className="inline-block">
                            <button className="flex items-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                                <img src="https://vignette.wikia.nocookie.net/google/images/2/24/Play_Store.png/revision/latest?cb=20170731120010" alt="Google Play" className="w-8 h-auto mr-2" />
                                Get it on Google Play
                            </button>
                        </a>
                    </div>
                </div>
                <div className="text-center border-t border-gray-700 pt-4">
                    <p>&copy; 2023 [abhinash]. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
