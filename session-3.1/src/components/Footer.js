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
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row">
                    <div className="payment-methods">
                        <h2>Payments</h2>
                        <ul>
                            <li><img src="images/visa.png" alt="Visa" /></li>
                            <li><img src="images/mastercard.png" alt="Mastercard" /></li>
                            <li><img src="images/rupay.png" alt="RuPay" /></li>
                            <li><img src="images/paytm.png" alt="Paytm" /></li>
                            <li><img src="images/google-pay.png" alt="Google Pay" /></li>
                            <li><i className="fas fa-rupee-sign"></i> UPI</li>
                        </ul>
                    </div>
                    <div className="app-download">
                        <a href="#"><img src="images/app-store.png" alt="App Store" /></a>
                        <a href="#"><img src="images/google-play.png" alt="Google Play" /></a>
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