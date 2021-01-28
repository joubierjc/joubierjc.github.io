import React from 'react';
import './full-viewport-container.css';

export function FullViewportContainer(props) {

    return <div className="full-viewport-container" {...props}>
        {props.children}
    </div>
}