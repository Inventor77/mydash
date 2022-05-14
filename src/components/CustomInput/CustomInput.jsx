import React, { useState } from 'react'
import './CustomInput.scss'

function CustomInput({ label, type, name, setValue, formValues }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        const { value, name } = event.target;
        setInputValue(value);
        setValue({
            ...formValues,
            [name]: value,
        })
        console.log(formValues)
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