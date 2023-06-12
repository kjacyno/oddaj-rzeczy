import Contact from "./Contact.jsx";
import DonateForm from "./DonateForm.jsx";
import HeaderShort from "./HeaderShort.jsx";

export default function DonatePage() {

    return (<>
            <section className="section1">
                <div id="donate-header">
                    <menu>
                        <HeaderShort
                        />
                    </menu>
                    <div className="landing-form-donate">
                        <h1>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM
                        </h1>
                        <img src="/src/assets/Decoration.svg" alt="decoration"/>
                        <p>
                            Wystarczą 4 proste kroki
                        </p>
                        <div className='steps'>
                            <div className="rectangle"></div>
                            <div className="rectangle"></div>
                            <div className="rectangle"></div>
                            <div className="rectangle"></div>
                        </div>
                    </div>
                </div>

                <div className="info">
            <p>Ważne!</p>
                    <p className='info-content'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
            </section>
            <section className='donate-form'>
                <DonateForm/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
        </>

    );
}

