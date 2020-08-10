import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Components/Context';
import StyledHero from '../Components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: props.match.params.slug,
            defaultBcg,
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;

        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <div className='error'>
                    <h6>Could not find your room..</h6>
                    <Link to='/'>
                        <button className='btn-primary'>Back to rooms</button>
                    </Link>
                </div>
            );
        }

        const { name, price, size, images, description, extras } = room;

        return (
            <>
                <StyledHero image={images[0]} className='roomsHero'>
                    <Banner title={`${name}`}>
                        <Link to='/rooms' className='btn-primary'>
                            Tilbake Til Barer
                        </Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt='' />;
                        })}
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>Detaljer</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>Info</h3>
                            <h6>Pris : {price}</h6>
                            <h6>Størrelse : {size}</h6>
                        </article>
                    </div>
                </section>
                <section className='room-extras'>
                    <h6>Extras</h6>
                    <ul className='extras'>
                        {extras.map((item, index) => {
                            return <li key={index}> - {item}</li>;
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
