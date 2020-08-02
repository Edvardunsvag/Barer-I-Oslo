import React, { Component } from 'react';
import { RoomConsumer, RoomContext } from './Context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { featuredRooms, loading, getRoom } = this.context;

        let rooms = featuredRooms.map((item) => {
            return <Room key={item.id} room={item}></Room>;
        });

        return (
            <section className='featured-rooms'>
                <Title title='Ukas favoritter'></Title>
                <div className='featured-rooms-center'>
                    {loading ? <Loading></Loading> : rooms}
                </div>
            </section>
        );
    }
}
