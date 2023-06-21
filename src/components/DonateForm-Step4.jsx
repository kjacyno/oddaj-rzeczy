/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";

export default function DonateFormStep4({formData, setFormData}) {
    const [inputId, setInputId] = useState('');
    const [inputValue, setInputValue] = useState({});
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        setInputValue({
            street: formData.street,
            city: formData.city,
            postCode: formData.postCode,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            note: formData.note
        })
    }, [])

    const inputClick = (inputId) => {
        setInputId(inputId);

        switch (inputId) {
            case 'street' || 'city':
                setErrorMessage('przynajmniej 2 znaki');
                break;
            case 'postCode':
                setErrorMessage('kod pocztowy w formacie xx-xxx');
                break;
            case 'phone':
                setErrorMessage('podaj 9 cyfr');
                break;
            case 'date' || 'time':
                setErrorMessage('wymagane');
        }
    }
    const handleAddress = (value, inputId) => {
        setInputId(inputId);

        const postCodePattern = /^\d{2}-\d{3}$/;
        const phonePattern = /^\d{9}$/

        if (inputId === 'street' && value.length < 2) {
            setErrorMessage('przynajmniej 2 znaki');
        } else if (inputId === 'city' && value.length < 2) {
            setErrorMessage('przynajmniej 2 znaki');
        } else if (inputId === 'postCode' && !postCodePattern.test(value)) {
            setErrorMessage('kod pocztowy w formacie xx-xxx');
        } else if (inputId === 'phone' && !phonePattern.test(value)) {
            setErrorMessage('podaj 9 cyfr');
        } else if ((inputId === 'date' || inputId === 'time') && !value) {
            setErrorMessage('wymagane');
        } else {
            setErrorMessage('');
            setFormData({
                ...formData,
                [inputId]: value
            });

            setInputValue({
                ...inputValue,
                [inputId]: value
            });

        }
    }


    return (
        <div className='donate-form-select'>
            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
            <div className='address-info'>
                <div className='address-details from'>
                    <h5>Adres odbioru:</h5>
                    <div className="input"><p>Ulica:</p><label><input type="text" id='street'
                                                                      onClick={() => inputClick('street')}
                                                                      onChange={(e) => handleAddress(e.target.value, 'street')}
                                                                      placeholder={inputValue.street}
                                                                      required
                                                                      minLength='2'
                    />
                        {errorMessage && inputId === 'street' && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </label>
                    </div>
                    <div className="input"><p>Miasto:</p><label><input type="text" id='city'
                                                                       onClick={() => inputClick('city')}
                                                                       onChange={(e) => handleAddress(e.target.value, 'city')}
                                                                       placeholder={inputValue.city}
                                                                       required
                                                                       minLength='2'
                    />
                        {errorMessage && inputId === 'city' && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </label></div>
                    <div className="input"><p>Kod pocztowy:</p><label><input type="text" id='postCode'
                                                                             onClick={() => inputClick('postCode')}
                                                                             onChange={(e) => handleAddress(e.target.value, 'postCode')}
                                                                             placeholder={inputValue.postCode}
                                                                             required
                                                                             pattern='^\d{2}-\d{3}$'
                    />
                        {errorMessage && inputId === 'postCode' && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </label></div>
                    <div className="input"><p>Telefon:</p><label><input type="text" id='phone'
                                                                        onClick={() => inputClick('phone')}
                                                                        onChange={(e) => handleAddress(e.target.value, 'phone')}
                                                                        placeholder={inputValue.phone}
                                                                        required
                                                                        pattern='^\d{9}$'
                    />
                        {errorMessage && inputId === 'phone' && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </label></div>
                </div>
                <div className='address-details'>
                    <h5>Termin odbioru:</h5>
                    <div className="input"><p>Data:</p><label><input type="date" id='date'
                                                                     onClick={() => inputClick('date')}
                                                                     onChange={(e) => handleAddress(e.target.value, 'date')}
                                                                     placeholder={inputValue.date}
                                                                     required
                    />
                        {errorMessage && inputId === 'date' && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </label></div>
                    <div className="input"><p>Godzina:</p><label><input type="time" id='time'
                                                                        onClick={() => inputClick('time')}
                                                                        onChange={(e) => handleAddress(e.target.value, 'time')}
                                                                        placeholder={inputValue.time}
                                                                        required
                    />
                        {errorMessage && inputId === 'time' && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </label></div>
                    <div className="input"><p>Uwagi dla kuriera:</p><label><textarea id='note'
                                                                                     onClick={() => inputClick('note')}
                                                                                     onChange={(e) => handleAddress(e.target.value, 'note')}
                                                                                     placeholder={inputValue.note}
                    /></label></div>
                </div>
            </div>
        </div>);
}

 