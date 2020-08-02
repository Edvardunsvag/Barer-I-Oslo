import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../Components/FeaturedRooms';

export default function Home() {
    return (
        <div>
            <Hero>
                <Banner
                    title='Barer I Oslo'
                    subtitle='Finn baren som passer deg best'>
                    <Link to='/rooms' className='btn-primary'>
                        Gå Til Barene
                    </Link>
                </Banner>
            </Hero>
            {/* <Services></Services> */}
            <FeaturedRooms></FeaturedRooms>
        </div>
    );
}
