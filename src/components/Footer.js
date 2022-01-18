import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer-base">
            <footer>
                <div className="footer-block">
                    <div className="footer-sign-up">
                        <form>
                            <label className="signup">
                                <input className="email-input" type="email" />
                                <span className="email-name">Email address</span>
                            </label>
                            <section>
                                <label className="checkbox-module">
                                    <input type="checkbox" />
                                    <span className="checkbox-input">Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our 
                                    <a>
                                         privacy policy &#8599;
                                    </a>
                                    </span>
                                </label>
                            </section>
                        </form>
                    </div>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Orders and support</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <a className="footer-links">Contact us</a>
                            </li>
                            <li>
                                <a className="footer-links">FAQs &#8599;</a>
                            </li>
                            <li>
                                <a className="footer-links">Shipping &#8599;</a>
                            </li>
                            <li>
                                <a className="footer-links">Returns &#8599;</a>
                            </li>
                            <li>
                                <a className="footer-links">Order Histroy</a>
                            </li>
                            <li>
                                <a className="footer-links">Terms and Conditions</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Services</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <a className="footer-links">Live assistance</a>
                            </li>
                            <li>
                                <a className="footer-links">Corporate gifts</a>
                            </li>
                            <li>
                                <a className="footer-links">Facial appointments</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Location preferences</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <span>Shipping:
                                <a className="footer-links">Hong Kong (S.A.R)</a>
                                </span>
                            </li>
                            <li>
                                <span>Language:
                                <a className="footer-links">English</a>
                                </span>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base footerblock">
                        <h3 className="footer-block-heading">Sustainability</h3>
                        <div className="footer-block-border"></div>
                        <div className="footerblock-listitem">
                            <p>
                            All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.
                            <a href="">Learn more</a>
                            </p>
                            
                        </div>
                    </section>
                    <section className="footer-block_base">
                    <h3 className="footer-block-heading">About</h3>
                    <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <a className="footer-links">Our Story</a>
                            </li>
                            <li>
                                <a className="footer-links">Foundation &#8599;</a>
                            </li>
                            <li>
                                <a className="footer-links">Careers</a>
                            </li>
                            <li>
                                <a className="footer-links">Privacy policy</a>
                            </li>
                            <li>
                                <a className="footer-links">Accessibility</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Social media</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <a className="footer-links">Instagram &#8599;</a>
                            </li>
                            <li>
                                <a className="footer-links">Twitter &#8599;</a>
                            </li>
                            <li>
                                <a className="footer-links">LinkedIn &#8599;</a>
                            </li>
                            <li>
                                <a className="footer-links">WeChat</a>
                            </li>
                            <li>
                                <a className="footer-links">Weibo &#8599;</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="footer-bottom">
                    <span>© Aesop</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;