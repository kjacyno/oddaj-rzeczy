/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";

export default function DonateFormStep4({formData, setFormData}) {
    const [inputId, setInputId] = useState('');
    const [inputValue, setInputValue] = useState({})

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
    // street: '',
    //     city: '',
    //     postCode: '',
    //     phone: '',
    //     date: '',
    //     time: '',
    //     note: ''
    const handleAddress = (value) => {
        switch (inputId) {
            case 'street':
                setFormData({
                    ...formData,
                    street: value
                });
                setInputValue({street: value});
                break;
            case 'city':
                setFormData({
                    ...formData,
                    city: value
                });
                setInputValue({city: value});
                break;
            case 'postCode':
                setFormData({
                    ...formData,
                    postCode: value
                });
                setInputValue({postCode: value});
                break;
            case 'phone':
                setFormData({
                    ...formData,
                    phone: value
                });
                setInputValue({phone: value});
                break;
            case 'date':
                setFormData({
                    ...formData,
                    date: value
                });
                setInputValue({date: value});
                break;
            case 'time':
                setFormData({
                    ...formData,
                    time: value
                });
                setInputValue({time: value});
                break;
            default:
                setFormData({
                    ...formData,
                    note: value
                });
                setInputValue({note: value});
                break;
        }


    }
    return (
        <div className='donate-form-select'>
            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
            <div className='address-info'>
                <div className='address-details from'>
                    <h5>Adres odbioru:</h5>
                    <div className="input"><p>Ulica:</p><label><input type="text" id='street' onClick={() => setInputId('street')}
                                  onChange={(e) => handleAddress(e.target.value)} placeholder={inputValue.street}
                    /></label></div>
                    <div className="input"><p>Miasto:</p><label><input type="text" id='city' onClick={() => setInputId('city')}
                                         onChange={(e) => handleAddress(e.target.value)}
                                         placeholder={inputValue.city}
                    /></label></div>
                    <div className="input"><p>Kod pocztowy:</p><label><input type="text" id='postCode' onClick={() => setInputId('postCode')}
                                               onChange={(e) => handleAddress(e.target.value)}
                                               placeholder={inputValue.postCode}
                    /></label></div>
                    <div className="input"><p>Telefon:</p><label><input type="text" id='phone' onClick={() => setInputId('phone')}
                                          onChange={(e) => handleAddress(e.target.value)}
                                          placeholder={inputValue.phone}
                    /></label></div>
                </div>
                <div className='address-details'>
                    <h5>Termin odbioru:</h5>
                    <div className="input"><p>Data:</p><label><input type="date" id='date'
                                                                     onClick={() => setInputId('date')}
                                                                     onChange={(e) => handleAddress(e.target.value)}
                                                                     placeholder={inputValue.date}
                    /></label></div>
                    <div className="input"><p>Godzina:</p><label><input type="time" id='time'
                                                                        onClick={() => setInputId('time')}
                                                                        onChange={(e) => handleAddress(e.target.value)}
                                                                        placeholder={inputValue.time}
                    /></label></div>
                    <div className="input"><p>Uwagi dla kuriera:</p><label><textarea id='note'
                                                                                     onClick={() => setInputId('note')}
                                                                                     onChange={(e) => handleAddress(e.target.value)}
                                                                                     placeholder={inputValue.note}
                    /></label></div>
                </div>
            </div>
        </div>);
}

 