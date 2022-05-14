import React, { useState } from 'react'
import './CustomInput.scss'

function CustomInput({ label, type, name, password, setPassword }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        const { target: { value }
        } = event;
        setInputValue(value);
        if (label === "Your password") setPassword(value);
    }

    return (
        <div className='input--custom'>
            <label
                className='label'
                htmlFor={name}>
                {label}
            </label>
            <input
                className='input'
                type={type}
                name={name}
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    )
}

export default CustomInput