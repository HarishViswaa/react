import React, { useState, useEffect } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ContentBar = () => {
    return (
        <div>
            <div className="search">
                <input type="text" className="searchInput" placeholder="Search timeline" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="users">
                <div class="user-icon">
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <div class="user-icon">
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <div class="user-icon">
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
            </div>
        </div>
    );
}

export default ContentBar;