import React, { Component } from 'react';
import items from '../data';

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        price: 0,
        minPrice: 0,
        size: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        shuffleboard: false,
        mat: false,
    };

    componentDidMount() {
        let rooms = this.formatItems(items);
        let featuredRooms = rooms.filter((room) => room.featured === true);

        let maxPrice = Math.max(
            ...rooms.map((item) => {
                return item.price;
            })
        );

        let maxSize = Math.max(
            ...rooms.map((item) => {
                return item.size;
            })
        );

        this.setState({
            rooms: rooms,
            featuredRooms: featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            maxSize: maxSize,
        });
    }

    formatItems(items) {
        let tempItems = items.map((item) => {
            let id = item.sys.id;

            let images = item.fields.images.map(
                (image) => image.fields.file.url
            );

            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];

        let room = tempRooms.find((room) => room.slug === slug);

        return room;
    };

    handleChange = (event) => {
        console.log(event.target);
        let value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;
        let name = event.target.name;

        this.setState({ [name]: value }, this.filterRooms);
    };

    filterRooms = () => {
        // <!-- Type filter -->
        let tempItems = this.state.rooms;

        tempItems = tempItems.filter((item) => {
            if (this.state.type === 'all') {
                return this.state.rooms;
            }
            return item.type === this.state.type;
        });

        // <!-- Capacity filter -->

        // <!-- Price filter -->
        this.setState({ price: parseInt(this.state.price) });
        tempItems = tempItems.filter((item) => {
            return item.price <= this.state.price;
        });

        // <!-- Size filter -->
        this.setState({ minSize: parseInt(this.state.minSize) });
        this.setState({ maxsize: parseInt(this.state.maxsize) });

        tempItems = tempItems.filter((item) => {
            if (isNaN(this.state.minSize) || isNaN(this.state.maxSize)) {
                return tempItems;
            }
            return (
                item.size >= this.state.minSize &&
                item.size <= this.state.maxSize
            );
        });

        console.log(this.state.shuffleboard);
        // <!-- shuffleboard -->
        if (this.state.shuffleboard) {
            tempItems = tempItems.filter((item) => item.shuffleboard === true);
        }

        // <!-- mat -->
        if (this.state.mat) {
            tempItems = tempItems.filter((item) => item.mat === true);
        }

        // <!-- Set state -->
        this.setState({ sortedRooms: tempItems });
    };

    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange,
                }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomProvider, RoomContext };
