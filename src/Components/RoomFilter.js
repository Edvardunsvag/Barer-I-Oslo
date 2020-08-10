import React from 'react';
import Title from './Title';
import { RoomContext } from './Context';
import { useContext } from 'react';
export default function RoomFilter({ rooms }) {
    let types = [
        ...new Set(
            rooms.map((items) => {
                return items.type;
            })
        ),
    ];
    types = ['all', ...types];
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    // let people = [
    //     ...new Set(
    //         rooms.map((items) => {
    //             return items.capacity;
    //         })
    //     ),
    // ];

    // people = people.map((item, index) => {
    //     return (
    //         <option value={item} key={index}>
    //             {item}
    //         </option>
    //     );
    // });

    const context = useContext(RoomContext);

    const {
        type,
        handleChange,
        // capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        shuffleboard,
        mat,
    } = context;

    return (
        <section className='filter-container'>
            <Title title='Søk Etter Din Bar'></Title>
            {/* Room type */}
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor=''>Stemning</label>
                    <select
                        className='form-control'
                        name='type'
                        id='type'
                        value={type}
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* room price */}
                <div className='form-group'>
                    <label htmlFor='price'>Øl pris {price}</label>
                    <input
                        type='range'
                        name='price'
                        id='price'
                        value={price}
                        min={minPrice}
                        max={maxPrice}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                {/* room size */}
                <div className='form-group'>
                    <label htmlFor='size'>Kapasitet - mennesker</label>
                    <div className='size-inputs'>
                        <input
                            type='number'
                            name='minSize'
                            id='size'
                            value={minSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                        <input
                            type='number'
                            name='maxSize'
                            id='size'
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='single-extra'>
                        <input
                            type='checkbox'
                            name='shuffleboard'
                            id='shuffleboard'
                            checked={shuffleboard}
                            onChange={handleChange}
                        />
                        <label htmlFor='shuffleboard'>ShuffleBoard</label>
                    </div>

                    <div className='single-extra'>
                        <input
                            type='checkbox'
                            name='mat'
                            id='mat'
                            checked={mat}
                            onChange={handleChange}
                        />
                        <label htmlFor='mat'>Mat</label>
                    </div>
                </div>
            </form>
        </section>
    );
}
