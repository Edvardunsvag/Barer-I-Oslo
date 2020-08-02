import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../Components/RoomContainer';

export default function Rooms() {
    return (
        <>
            <Banner title='Finn baren som passer deg'>
                <Link to='/' className='btn-primary'>
                    Tilbake Til Hjem
                </Link>
            </Banner>

            <RoomContainer></RoomContainer>
        </>
    );
}
