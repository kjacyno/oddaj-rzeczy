export default function DonateFormStep1({formData, setFormData}) {

    return (

        <form className='donate-form-inputs'>
            <p style={{fontSize: '2rem', marginBottom: '.5rem'}}>Zaznacz co chcesz oddać</p>
            <label htmlFor='option1'>
                <input type="radio" id="option1" name='option' value='good-clothes' onClick={(e) => setFormData({
                    ...formData,
                    give: e.target.value,
                })}/>
                <span className="radio-btn"></span> ubrania, które nadają się do ponownego użycia
            </label>
            <label htmlFor='option2'>
                <input type="radio" id="option2" name='option' value="trash-clothes" onClick={(e) => setFormData({
                    ...formData,
                    give: e.target.value,
                })}/>
                <span className="radio-btn"></span> ubrania, do wyrzucenia
            </label>
            <label htmlFor='option3'>
                <input type="radio" id="option3" name='option' value="toys" onClick={(e) => setFormData({
                    ...formData,
                    give: e.target.value,
                })}/>
                <span className="radio-btn"></span> zabawki
            </label>
            <label htmlFor='option4'>
                <input type="radio" id="option4" name='option' value="books" onClick={(e) => setFormData({
                    ...formData,
                    give: e.target.value,
                })}/>
                <span className="radio-btn"></span> książki
            </label>
            <label htmlFor='option5'>
                <input type="radio" id="option5" name='option' value="other" onClick={(e) => setFormData({
                    ...formData,
                    give: e.target.value,
                })}/>
                <span className="radio-btn"></span> Inne
            </label>
        </form>
    );
}

