import React, { useState } from 'react'
import './CreateAccount.scss'
import GraphImg from '../../assets/images/background.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox'

function CreateAccount() {
    const [password, setPassword] = useState("")
    const [inputValue, setInputValue] = useState(false);

    const handleChange = (event) => {
        const { target: { checked }
        } = event;
        setInputValue(checked);
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
                        <form >
                            <CustomInput
                                label="Your email address"
                                type="email"
                                name="email"
                            />
                            <CustomInput
                                label="Your password"
                                type="password"
                                name="password"
                                setPassword={setPassword}
                            />
                            <CustomInput
                                label="Confirm your password"
                                type="password"
                                name="password"
                                password={password}
                            />
                            <CustomInput
                                label="Your full name"
                                type="text"
                                name="text"
                            />
                            <div style={{ maxWidth: "50%" }}>
                                <CustomInput
                                    label="Your phone number"
                                    type="number"
                                    name="number"
                                />
                            </div>
                            <div className='checkbox__container--wrapper'
                            >
                                <CustomCheckbox inputValue={inputValue}
                                    handleChange={handleChange} />
                                <div className='checkbox__label'>I read and agree to Terms and Conditions</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount