import React, { useState, useEffect } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div>
            <ul className="nav">
                <li><a href="#">Summary</a></li>
                <li><a href="#">Board</a></li>
                <li><a href="#">List</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Timeline</a></li>
                <li><a href="#">Approvals</a></li>
                <li><a href="#">Forms</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Attachments</a></li>
                <li><a href="#">Issues</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Shortcuts</a></li>
                <li><FontAwesomeIcon icon={faPlus} /></li>
            </ul>
        </div>
    );

}

export default NavBar;