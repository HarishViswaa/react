import React, { useState, useEffect } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1>Millijewel.com</h1>
                <div>
                    <FontAwesomeIcon icon={faGear} />
                    <span>Project settings</span>
                </div>
            </div>
        </div>
    );

}

export default Header;