import {useEffect, useState} from "react";

export default function DonateFormStep1({formData, setFormData}) {
    const [selectedRadio, setSelectedRadio] = useState('');

    useEffect(() => {
        setSelectedRadio(formData.give)
    }, [])
    const handleRadioInput = (value) => {
        setFormData({
            ...formData,
            give: value
        })
        setSelectedRadio(value)
    }
    return (

        <form className='donate-form-inputs'>
            <h2>Zaznacz co chcesz oddać</h2>
            <label htmlFor='option1'>
                <input type="radio" id="option1" name='option' onChange={() => handleRadioInput('good-clothes')}
                       checked={selectedRadio === "good-clothes"}/>
                <span className="radio-btn"></span> ubrania, które nadają się do ponownego użycia
            </label>
            <label htmlFor='option2'>
                <input type="radio" id="option2" name='option' onChange={() => handleRadioInput('trash-clothes')}
                       checked={selectedRadio === 'trash-clothes'}/>
                <span className="radio-btn"></span> ubrania, do wyrzucenia
            </label>
            <label htmlFor='option3'>
                <input type="radio" id="option3" name='option' onChange={() => handleRadioInput('toys')}
                       checked={selectedRadio === 'toys'}/>
                <span className="radio-btn"></span> zabawki
            </label>
            <label htmlFor='option4'>
                <input type="radio" id="option4" name='option' onChange={() => handleRadioInput('books')}
                       checked={selectedRadio === 'books'}/>
                <span className="radio-btn"></span> książki
            </label>
            <label htmlFor='option5'>
                <input type="radio" id="option5" name='option' onChange={() => handleRadioInput('other')}
                       checked={selectedRadio === 'other'}/>
                <span className="radio-btn"></span> Inne
            </label>
        </form>
    );
}

