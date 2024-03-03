import React from 'react';
import { Link } from'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';


const Header = () => {
    return (
        <div className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Atlanta</h3>
                    <p>We are Family owned restaraunt who have been proudly serving the Atlanta Area since 1972</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                <div  className='banner-img'>
                    <img src={bannerImg} alt='banner' />
                </div>
            </section>
        </div>
    );
  };
  
  export default Header;