import {useEffect, useState} from "react";

export default function DonateFormStep3({formData, setFormData}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");
    const [checked, setChecked] = useState([]);
    const [optional, setOptional] = useState('')


    useEffect(() => {
        setSelectedCity(formData.localization);
        setChecked(formData.helpGroups);
        setOptional(formData.localizationSpecific);
    }, [])
    const handleSelectedCity = (value) => {
        setFormData({
            ...formData,
            localization: value
        })
    }
    const handleOptional = (value) => {
        setFormData({
            ...formData,
            localizationSpecific: value
        });
        setOptional(value)
    }

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionCity = (optionText) => {
        handleSelectedCity(optionText)
        setSelectedCity(optionText);
        setIsOpen(false);
    };

    const handleCheckbox = (value) => {
        if (checked.includes(value)) {
            setChecked(checked.filter((item) => item !== value));
            setFormData((prevFormData) => ({
                ...prevFormData,
                helpGroups: prevFormData.helpGroups.filter((item) => item !== value)
            }));
        } else {
            setChecked([...checked, value]);
            setFormData((prevFormData) => ({
                ...prevFormData,
                helpGroups: [...prevFormData.helpGroups, value]
            }));
        }
    };
    return (<>
        <div className='donate-form-select'>
            <h2>Lokalizacja:</h2>
            <div className={`select-menu ${isOpen ? "active" : ""}`}>
                <div className='select-btn' onClick={handleSelectClick}>
                    {selectedCity ? <span className='sBtn-text'> {selectedCity}<img
                            src="/src/assets/Icon-Arrow-Down.svg"/></span> :
                        (<span className='sBtn-text'>&#9472;&#9472; wybierz &#9472;&#9472;
                            <img src="/src/assets/Icon-Arrow-Down.svg"/>
          </span>)}
                </div>
                <ul className="options-city">
                    <li className="option" onClick={() => handleOptionCity("Poznań")}><span
                        className='option-text'>Poznań</span></li>
                    <li className="option" onClick={() => handleOptionCity("Warszawa")}><span
                        className='option-text'>Warszawa</span></li>
                    <li className="option" onClick={() => handleOptionCity("Kraków")}><span
                        className='option-text'>Kraków</span></li>
                    <li className="option" onClick={() => handleOptionCity("Wrocław")}><span
                        className='option-text'>Wrocław</span></li>
                    <li className="option" onClick={() => handleOptionCity("Katowice")}><span
                        className='option-text'>Katowice</span></li>
                </ul>
            </div>
        </div>

        <h4>Komu chcesz pomóc?</h4>
        <div className="form-checkbox">
            <input type="checkbox" id='checkbox1' className='checkbox' onChange={() => handleCheckbox('dzieciom')}
                   checked={checked.includes('dzieciom')}/>

            <label
            htmlFor='checkbox1'>dzieciom</label>
            <input type="checkbox" id='checkbox2' className='checkbox'
                   onChange={() => handleCheckbox('samotnym matkom')}
                   checked={checked.includes('samotnym matkom')}
            /><label htmlFor='checkbox2'>samotnym matkom</label>
            <input type="checkbox" id='checkbox3' className='checkbox'
                   onChange={() => handleCheckbox('bezdomnym')}
                   checked={checked.includes('bezdomnym')}
            /><label htmlFor='checkbox3'>osobom w kryzysie
            bezdomności</label>
            <input type="checkbox" id='checkbox4' className='checkbox'
                   onChange={() => handleCheckbox('niepełnosprawnym')}
                   checked={checked.includes('niepełnosprawnym')}
            /><label
            htmlFor='checkbox4'>niepełnosprawnym</label>
            <input type="checkbox" id='checkbox5' className='checkbox' onChange={() => handleCheckbox('osobom starszym')}
                   checked={checked.includes('osobom starszym')}
            /><label
            htmlFor='checkbox5'>osobom starszym</label>
        </div>
        <h5>Wpisz nazwę konkretnej organizacji(opcjonalne):</h5>
        <label><input type="text" id='optional' onChange={(e) => handleOptional(e.target.value)} placeholder={optional}/></label>
    </>);
}

 