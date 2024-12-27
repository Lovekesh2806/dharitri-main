// DropdownMenu.js
import React, { useState } from 'react';
import '../styles/DropdownMenu.css';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Menu
                <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
            </button>

            {isOpen && (
                <div className="dropdown-content">
                    <a href="/feature1">Feature 1</a>
                    <a href="/feature2">Feature 2</a>
                    <a href="/feature3">Feature 3</a>
                    <a href="/feature4">Feature 4</a>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
