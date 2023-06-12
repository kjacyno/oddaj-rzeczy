import {useState} from "react";
import DonateFormStep1 from "./DonateForm-Step1.jsx";
import DonateFormStep2 from "./DonateForm-Step2.jsx";
import DonateFormStep3 from "./DonateForm-Step3.jsx";
import DonateFormStep4 from "./DonateForm-Step4.jsx";

export default function DonateForm() {
    const [page, setPage] = useState(1);

    const handleSubmit = () => {
        setPage(page + 1);

    }

    const steps = () => {
        switch (page) {
            case 1:
                return <DonateFormStep1/>;
            case 2:
                return <DonateFormStep2/>;
            case 3:
                return <DonateFormStep3/>;
            case 4:
                return <DonateFormStep4/>;
            default:
                return <DonateFormStep1/>
        }
    }
    return (
        <>
            <p>Krok {page}/4</p>
            {steps()}
            <div className='landing-form-btns'>
                {
                    page > 1 && <button className='btn-lg' onClick={() => setPage(page - 1)}>Wstecz</button>
                }
                <button className='btn-lg'
                        onClick={handleSubmit}>{page === 0 || page === 1 ? "Dalej" : "Wyślij"}</button>
            </div>
        </>
    );
}

