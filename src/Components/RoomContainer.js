import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { RoomConsumer } from './Context';
import Loading from './Loading';

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {(value) => {
                const { loading, sortedRooms, rooms } = value;
                if (loading) {
                    return <Loading></Loading>;
                }
                return (
                    <div>
                        <RoomFilter rooms={rooms}></RoomFilter>
                        <RoomList rooms={sortedRooms}></RoomList>
                    </div>
                );
            }}
        </RoomConsumer>
    );
}
