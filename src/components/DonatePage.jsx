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
                            <div className="rectangle"><p>1 </p><p>Wybierz rzeczy</p></div>
                            <div className="rectangle"><p>2 </p><p>Spakuj je w worku</p></div>
                            <div className="rectangle"><p>3 </p><p>Wybierz fundację</p></div>
                            <div className="rectangle"><p>4 </p><p>Zamów kuriera</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <DonateForm/>
            <section id='contact'>
                <Contact/>
            </section>
        </>

    );
}

