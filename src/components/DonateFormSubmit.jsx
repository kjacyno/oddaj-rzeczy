/* eslint-disable react/prop-types */

export default function DonateFormSubmit({formData, setFormData}) {
    return (
        <div className='donate-form-select'>
            <h2>Podsumowanie Twojej darowizny:</h2>
            <h5>Oddajesz:</h5>
<div className='summary'>
    <img src="/src/assets/Icon-1.svg" alt='donation'/><p>{formData.bags} worki, {formData.type}, {formData.helpGroups.join(", ")}</p>
</div>
            <div className='summary'>
                <img src="/src/assets/Icon-4.svg" alt="city"/><p>dla lokalizacji: {formData.localization} {formData.localozationSpecific}</p>
            </div>

        </div>
    );
}

