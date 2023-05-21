import React from 'react';
import logo from '../../../assets/images/logo/connexe_toys_logot5_1562832972__41152.webp'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer mt-9 p-10 bg-base-200 text-base-content">
                <div>
                    <h2 className="text-xl font-semibold">CONNEXE TOYS</h2>
                    <p className="text-sm">〒100-0001 Street, Chiyoda City, Japan</p>
                    <p className="text-sm">Phone: 123-456-7890</p>
                    <p className="text-sm">Email: info@connexe.com</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" />

                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="ml-4 flex space-x-2">
                        <FaFacebook className="text-5xl text-blue-600" />
                        <FaTwitter className="text-5xl text-blue-400" />
                        <FaInstagram className="text-5xl  text-red-500" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
