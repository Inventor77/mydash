import React, { useState } from 'react'
import './CreateAccount.scss'
import GraphImg from '../../assets/images/background.png'
import CustomInput from '../../components/CustomInput/CustomInput'

function CreateAccount() {
    const [password, setPassword] = useState("")
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
                                label="Confirm password"
                                type="password"
                                name="password"
                                password={password}
                            />
                            <CustomInput
                                label="Your full name"
                                type="text"
                                name="text"
                            />
                            <CustomInput
                                label="Your phone number"
                                type="number"
                                name="number"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount