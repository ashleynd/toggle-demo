import React from "react";
import useToggleState from './hooks/useToggleState';
import './CheckBox.css'

const CheckBox = () => {
    const [isHappy, toggleIsHappy] = useToggleState(true)
    const [isDarkMode, toggleIsDarkMode] = useToggleState(false)
    return (
        <div className={isDarkMode ? 'Check-dark' : 'Check-light'}>
            <h1 className="check">{isHappy ? 'Enabled ✅' : 'Disabled 🥺'}</h1> 
            <button className="checkbox" onClick={toggleIsHappy}></button>
        </div>
    )
}

export default CheckBox;
