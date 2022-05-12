import React from 'react'
import './CreateAccount.scss'
import GraphImg from '../../assets/images/background.png'

function CreateAccount() {
    return (
        <div className='createAccount__layout'>
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

            </div>
        </div>
    )
}

export default CreateAccount