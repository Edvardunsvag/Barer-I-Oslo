import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaBeer, FaShuttleVan, FaHiking } from 'react-icons/fa';

export default function Services() {
    const [service, setService] = useState({
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title: 'Free CockTails',
                info: 'Very good stuff',
            },
            {
                icon: <FaBeer></FaBeer>,
                title: 'Free CockTails',
                info: 'Very good stuff',
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: 'Free CockTails',
                info:
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae!',
            },
            {
                icon: <FaHiking></FaHiking>,
                title: 'Free CockTails',
                info: 'Very good stuff',
            },
        ],
    });
    return (
        <div className='services'>
            <Title title='Services'></Title>

            <div className='services-center'>
                {service.services.map((services) => {
                    return (
                        <article className='service'>
                            <span>{services.icon}</span>
                            <h6>{services.title}</h6>
                            <p>{services.info}</p>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
