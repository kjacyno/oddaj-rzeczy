/* eslint-disable react/prop-types */

export default function DonateFormSubmit({formData}) {
    return (
        <div className='donate-form-select'>
            <h2>Podsumowanie Twojej darowizny:</h2>
            <h5>Oddajesz:</h5>
            <div className='summary'>
                <img src="/src/assets/Icon-1.svg" alt='donation'/>
                <p>{formData.bags} worki, {formData.type}, {formData.helpGroups.join(", ")}</p>
            </div>
            <div className='summary'>
                <img src="/src/assets/Icon-4.svg" alt="city"/><p>dla
                lokalizacji: {formData.localization} {formData.localozationSpecific}</p>
            </div>
            <div className="details">
            <div className="address-info">
                <div className='address-details from'>
                    <h5>Adres odbioru:</h5>
                    <p>Ulica: {formData.street}</p>
                    <p>Miasto: {formData.city}</p>
                    <p>Kod pocztowy: {formData.postCode}</p>
                    <p>Numer telefonu: {formData.phone}</p>
                </div>
                <div className='address-details'>
                    <h5>Termin odbioru:</h5>
                    <p>Data: {formData.date}</p>
                    <p>Godzina: {formData.time}</p>
                    <p>Uwagi dla kuriera: {formData.note}</p>
                </div>

                </div>
            </div>
        </div>
    );
}

