import React from 'react'
import './CustomCheckbox.scss'

function CustomCheckbox({ inputValue, handleChange }) {
  return (
    <div className="checkbox--wrappercheckbox--wrapper">
      <svg className="checkbox--symbol">
        <symbol
          id="check"
          viewBox="0 0 12 10"
        >
          <polyline
            points="1.5 6 4.5 9 10.5 1"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeOpacity="1"
          ></polyline>
        </symbol>
      </svg>
      <div className="checkbox__container">
        <input
          className="checkbox__input" id="custom__checkbox"
          type="checkbox"
          value={inputValue}
          onChange={handleChange}
        />
        <label
          className="checkbox" htmlFor="custom__checkbox">
          <span>
            <svg width="12px" height="10px">
              <use href="#check"></use>
            </svg>
          </span>
        </label>
      </div>
    </div>
  )
}

export default CustomCheckbox