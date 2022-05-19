import React from "react";
import useToggleState from './hooks/useToggleState';
import './ToggleSwitch.css'

const ToggleSwitch = () => {
    // const [isHappy, toggleIsHappy] = useToggleState(true)
    const [isDarkMode, toggleIsDarkMode] = useToggleState(false)
    return (
        <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
            <div className="toggle">
            <h1>{isDarkMode ? 'Enabled 🌚' : 'Disabled ☀️'}</h1> 
                <button onClick={toggleIsDarkMode}></button>
            </div>
        </div>
    )
}

export default ToggleSwitch;
