import React from 'react';
import LoadingGif from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div>
            <img src={LoadingGif} alt='' />
        </div>
    );
}
