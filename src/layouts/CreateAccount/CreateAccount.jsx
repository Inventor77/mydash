import React, { useState } from 'react'
import './CreateAccount.scss'
import GraphImg from '../../assets/images/background.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox'
import { handleError } from '../../utils/handleError'

const INITIAL_FORM_STATE = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
}
function CreateAccount() {
    const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
    const [error, setError] = useState(INITIAL_FORM_STATE)

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(handleError(formValues))
    }

    return (
        <div className='createAccount__layout'>
            <div className="layout__container">
                <div className="createAccount__layout--left">
                    <div className="image__container">
                        <img src={GraphImg} alt="graph" />
                    </div>
                    <div className="info">
                        <div className="info__title">
                            Choose a date range
                        </div>
                        <div className="info__para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consequatur tenetur.
                        </div>
                    </div>
                </div>
                <div className="createAccount__layout--right">
                    <div className="form__container">
                        <div className="form__title">
                            Create an account
                        </div>
                        <form onSubmit={handleSubmit}>
                            <CustomInput
                                label="Your email address"
                                type="email"
                                name="email"
                                setValue={setFormValues}
                                formValues={formValues}
                            />
                            <div className='error'>
                                {error.email}
                            </div>
                            <CustomInput
                                label="Your password"
                                type="password"
                                name="password"
                                setValue={setFormValues}
                                formValues={formValues}
                            />
                            <div className='error'>
                                {error.password}
                            </div>
                            <CustomInput
                                label="Confirm your password"
                                type="password"
                                name="confirmPassword"
                                setValue={setFormValues}
                                formValues={formValues}
                            />
                            <div className='error'>
                                {error.confirmPassword}
                            </div>
                            <CustomInput
                                label="Your full name"
                                type="text"
                                name="name"
                                setValue={setFormValues}
                                formValues={formValues}
                            />
                            <div className='error'>
                                {error.name}
                            </div>
                            <div style={{ maxWidth: "50%" }}>
                                <CustomInput
                                    label="Your phone number"
                                    type="text"
                                    name="phoneNumber"
                                    setValue={setFormValues}
                                    formValues={formValues}
                                />
                                <div className='error'>
                                    {error.phoneNumber}
                                </div>
                            </div>
                            <div className='checkbox__container--wrapper'
                            >
                                <CustomCheckbox />
                                <div className='checkbox__label'>I read and agree to Terms and Conditions</div>
                            </div>
                            <div className="button__container">
                                <input className='button' type="submit" value="Create account" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount