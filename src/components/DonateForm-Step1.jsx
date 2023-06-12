export default function DonateFormStep1() {
    return (
        <form className='donate-form-inputs'>
           <p style={{fontSize: '2rem', marginBottom: '.5rem'}}>Zaznacz co chcesz oddać</p>
                <label>
                    <input type="radio" name="option" value="option1"/>
                        <span className="radio-btn"></span> ubrania, które nadają się do ponownego użycia
                </label>
                <label>
                    <input type="radio" name="option" value="option2"/>
                        <span className="radio-btn"></span> ubrania, do wyrzucenia
                </label>
                <label>
                    <input type="radio" name="option" value="option3"/>
                        <span className="radio-btn"></span> zabawki
                </label>
                <label>
                    <input type="radio" name="option" value="option4"/>
                        <span className="radio-btn"></span> książki
                </label>
                <label>
                    <input type="radio" name="option" value="option5"/>
                        <span className="radio-btn"></span> Inne
                </label>
        </form>
    );
}

