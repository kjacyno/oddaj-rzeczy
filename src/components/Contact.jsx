export default function Contact() {
    return (<>
        <div className='backgr'></div>
        <div className='contact-us'>
            <h2>Skontaktuj się z nami</h2>
            <img src="/src/assets/Decoration.svg" alt="decoration"/>
            <form>
                <div className='form-input1'><div><label htmlFor="name">Wpisz swoje imię</label>
                    <input id='name' type="text" placeholder='Koronka'/></div>
               <div> <label htmlFor="email">Wpisz swój e-mail</label>
                    <input id='email' type="text" placeholder='kornka@email.com'/></div></div>
                <div className='form-input'><label htmlFor="msg">Wpisz swoją wiadomość</label>
                    <textarea id='msg'
                              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                </div>
                <button type='submit'> Wyślij</button>
            </form>
        </div>
        <footer>
            <div>Copyright by Coders Lab</div>
            <div>
            <img src="/src/assets/Facebook.svg" alt="facebook"/>
            <img src="/src/assets/Instagram.svg" alt="instagram"/></div>
        </footer>

    </>);
}

