import React, { useState } from 'react'
import './CustomInput.scss'

function CustomInput({ label, type, name, setValue, formValues, error }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        const { value, name } = event.target;
        setInputValue(value);
        setValue({
            ...formValues,
            [name]: value,
        })
    }

    return (
        <div id={name} className='input--custom'>
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
            <div className='error'>
                {error ? error : ""}
            </div>
        </div>
    )
}

export default CustomInput