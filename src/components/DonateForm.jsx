import {useState} from "react";
import DonateFormStep1 from "./DonateForm-Step1.jsx";
import DonateFormStep2 from "./DonateForm-Step2.jsx";
import DonateFormStep3 from "./DonateForm-Step3.jsx";
import DonateFormStep4 from "./DonateForm-Step4.jsx";
import DonateFormSubmit from "./DonateFormSubmit.jsx";

export default function DonateForm() {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        bags: '',
        localization: '',
        localizationSpecific: '',
        helpGroups: [],
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        note: ''
    })


    const handleSubmit = (formData) => {
        if (page === 3 && formData.helpGroups.length === 0) {
            return
        } else if (page === 3 &&
            !(page === 3 &&
                ((page === 3 && (formData.localization !== '')) || (page === 3 && formData.localizationSpecific !== "")))) {
            return}
        // else if (page === 4 &&)
        // {return;}

        setPage(page + 1)

    }

    const steps = () => {
        switch (page) {
            case 1:
                return <DonateFormStep1
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 2:
                return <DonateFormStep2
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 3:
                return <DonateFormStep3
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 4:
                return <DonateFormStep4
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 5:
                return <DonateFormSubmit
                    formData={formData}
                    setFormData={setFormData}
                />;
            default:
                return <DonateFormStep1
                    formData={formData}
                    setFormData={setFormData}
                />
        }
    }
    return (
        <> {
            page === 5 ? ''
                : (
                    <div className="info">
                        <p>Ważne!</p>
                        {page === 1 ?
                            <p className='info-content'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                                wiedzieć komu najlepiej je przekazać.</p> :
                            page === 2 ?
                                <p className='info-content'>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                                    instrukcję
                                    jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p> :
                                page === 3 ?
                                    <p className='info-content'>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                                        organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
                                        celu ich pomocy.</p> :
                                    <p className='info-content'> Podaj adres oraz termin odbioru rzeczy.</p>
                        }
                    </div>)
        }
            <section className='donate-form'>
                {page === 5 ? '' : <p>Krok {page}/4</p>}
                <div className='steps-wrapper'>{steps()}</div>

                <div className='landing-form-btns'>
                    {
                        page > 1 && <button className='btn-lg' onClick={() => setPage(page - 1)}>Wstecz</button>
                    }
                    <button className='btn-lg'
                            onClick={() => {
                                handleSubmit(formData)
                            }}
                    >
                        {page === 1 || page === 2 || page === 3 || page === 4 ? "Dalej" : "Potwierdź"}
                    </button>
                </div>
            </section>
        </>
    );
}

