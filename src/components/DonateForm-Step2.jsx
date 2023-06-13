import { useState} from "react";

export default function DonateFormStep2({formData, setFormData}) {

    const handleSelected = (value) => {
        setFormData({
            ...formData,
            bags: value
        })
    }
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionText) => {
        handleSelected(optionText)
        setSelectedOption(optionText);
        setIsOpen(false);
    };

    return (
        <form className='donate-form-select'>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div className={`select-menu ${isOpen ? "active" : ""}`}>
                <div className='select-btn' onClick={handleSelectClick}>
                    <p> Liczba 60l worków:</p>

            {selectedOption ? <span className='sBtn-text'> {selectedOption}<img src="/src/assets/Icon-Arrow-Down.svg" /></span> :
                (<span className='sBtn-text'>&#9472;&#9472; wybierz &#9472;&#9472;
                    <img src="/src/assets/Icon-Arrow-Down.svg" />
          </span>)}
                </div>
                <ul className="options">
                    <li className="option" onClick={() => handleOptionClick("1")}><span className='option-text'>1</span></li>
                    <li className="option" onClick={() => handleOptionClick("2")}><span className='option-text'>2</span></li>
                    <li className="option" onClick={() => handleOptionClick("3")}><span className='option-text'>3</span></li>
                    <li className="option" onClick={() => handleOptionClick("4")}><span className='option-text'>4</span></li>
                    <li className="option" onClick={() => handleOptionClick("5")}><span className='option-text'>5</span></li>
                </ul>
            </div>
        </form>
    );
}
 