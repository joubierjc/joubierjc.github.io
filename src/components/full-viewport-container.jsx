import React from 'react';
import './full-viewport-container.css';

export function FullViewportContainer({children}) {

    return <div className="full-viewport-container">
        {children}
    </div>
}