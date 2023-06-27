/* eslint-disable react/prop-types */

import {useEffect, useState} from "react";

export default function DonateFormStep1({formData, setFormData}) {
    const [selectedRadio, setSelectedRadio] = useState('');

    useEffect(() => {
        setSelectedRadio(formData.type)
    }, [])
    const handleRadioInput = (value) => {
        setFormData({
            ...formData,
            type: value
        })
        setSelectedRadio(value)
    }
    return (

        <form className='donate-form-inputs'>
            <h2>Zaznacz co chcesz oddać</h2>
            <label htmlFor='option1'>
                <input type="radio" id="option1" name='option' onChange={() => handleRadioInput('ubrania, które nadają się do ponownego użycia')}
                       checked={selectedRadio === "ubrania, które nadają się do ponownego użycia"}/>
                <span className="radio-btn"></span> ubrania, które nadają się do ponownego użycia
            </label>
            <label htmlFor='option2'>
                <input type="radio" id="option2" name='option' onChange={() => handleRadioInput('ubrania do wyrzucenia')}
                       checked={selectedRadio === 'ubrania do wyrzucenia'}/>
                <span className="radio-btn"></span> ubrania do wyrzucenia
            </label>
            <label htmlFor='option3'>
                <input type="radio" id="option3" name='option' onChange={() => handleRadioInput('zabawki')}
                       checked={selectedRadio === 'zabawki'}/>
                <span className="radio-btn"></span> zabawki
            </label>
            <label htmlFor='option4'>
                <input type="radio" id="option4" name='option' onChange={() => handleRadioInput('książki')}
                       checked={selectedRadio === 'książki'}/>
                <span className="radio-btn"></span> książki
            </label>
            <label htmlFor='option5'>
                <input type="radio" id="option5" name='option' onChange={() => handleRadioInput('inne')}
                       checked={selectedRadio === 'inne'}/>
                <span className="radio-btn"></span> inne
            </label>
        </form>
    );
}

