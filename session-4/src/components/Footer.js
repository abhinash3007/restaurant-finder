const Footer = () => {
    return (
        <>
        <footer>
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h2>About Us</h2>
                        <ul>
                            <li><a href="#">About Our Project</a></li>
                            <li><a href="#">Our Vision</a></li>
                            <li><a href="#">Our Team</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Help</h2>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Track Your Order</a></li>
                            <li><a href="#">Cancel/Refund</a></li>
                            <li><a href="#">Help Centre</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Follow Us</h2>
                        <ul className="social-links">
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row">
                    <div className="payment-methods">
                        <h2>Payments</h2>
                        <ul>
                            <li><img src="https://static.seekingalpha.com/uploads/2017/6/28/44583886-14986589045573394_origin.png" alt="Visa" /></li>
                            <li><img src="https://pnghq.com/wp-content/uploads/master-png-free-png-images-74331.png" alt="Mastercard" /></li>
                            <li><img src="https://orissadiary.com/wp-content/uploads/2018/01/RuPay-Logo_High-Res.png" alt="RuPay" /></li>
                            <li><img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/paytm-logo-freelogovectors.net_.png" alt="Paytm" /></li>
                            <li><img src="https://static.vecteezy.com/system/resources/previews/021/672/633/large_2x/google-pay-logo-transparent-free-png.png" alt="Google Pay" /></li>
                        </ul>
                    </div>
                    <div className="app-download">
                        <a href="#"><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-how-setup-for-ios-development-11.png" alt="App Store" /></a>
                        <a href="#"><img src="https://vignette.wikia.nocookie.net/google/images/2/24/Play_Store.png/revision/latest?cb=20170731120010" alt="Google Play" /></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 [abhinash]. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}
export default Footer;