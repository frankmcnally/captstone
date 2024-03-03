import React from 'react';
import logo from '../images/Logo .svg'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.jpg'
import instagram from '../images/instagram.jpg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>                    
                    <img src={logo} alt='logo' />
                    <p>We are Family owned restaraunt who have been proudly serving the Atlanta Area since 1972</p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Address:<br />
                        1426 Peachtree St. NW<br />
                        Atlanta, GA 30019</li>
                        <li>Phone:<br />
                        404.236.9898</li>
                        <li>Email:<br />
                        <a href="contact@littlelemon.com">contact@littlemon.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href='/'><img src={twitter} alt='Twitter' />Twitter</a></li>
                        <li><a href='/'><img src={facebook} alt='Facebook' />Facebook</a></li>
                        <li><a href='/'><img src={instagram} alt='Instagram' />Instagram</a></li>
                    </ul>
                </div>
                
            </section>
        </footer>
    );
    };

    export default Footer;