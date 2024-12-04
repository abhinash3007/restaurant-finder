import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
                    {/* Payments Section */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Accepted Payments</h2>
                        <ul className="flex flex-wrap gap-6">
                            <li><img src="https://static.seekingalpha.com/uploads/2017/6/28/44583886-14986589045573394_origin.png" alt="Visa" className="w-16 h-auto" /></li>
                            <li><img src="https://pnghq.com/wp-content/uploads/master-png-free-png-images-74331.png" alt="Mastercard" className="w-16 h-auto" /></li>
                            <li><img src="https://orissadiary.com/wp-content/uploads/2018/01/RuPay-Logo_High-Res.png" alt="RuPay" className="w-16 h-auto" /></li>
                            <li><img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/paytm-logo-freelogovectors.net_.png" alt="Paytm" className="w-16 h-auto" /></li>
                            <li><img src="https://static.vecteezy.com/system/resources/previews/021/672/633/large_2x/google-pay-logo-transparent-free-png.png" alt="Google Pay" className="w-16 h-auto" /></li>
                        </ul>
                    </div>
                    
                    {/* App Download Section */}
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-4">
                        <a href="https://www.apple.com/app-store/" className="inline-block">
                            <button className="flex items-center bg-blue-600 text-white py-3 px-5 rounded-md hover:bg-blue-700 transition-colors">
                                <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-how-setup-for-ios-development-11.png" alt="App Store" className="w-8 h-auto mr-2" />
                                <span className="hidden md:inline">Download on the App Store</span>
                            </button>
                        </a>
                        <a href="https://play.google.com/store/games?device=windows" className="inline-block">
                            <button className="flex items-center bg-green-600 text-white py-3 px-5 rounded-md hover:bg-green-700 transition-colors">
                                <img src="https://vignette.wikia.nocookie.net/google/images/2/24/Play_Store.png/revision/latest?cb=20170731120010" alt="Google Play" className="w-8 h-auto mr-2" />
                                <span className="hidden md:inline">Get it on Google Play</span>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center border-t border-gray-700 pt-4">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
