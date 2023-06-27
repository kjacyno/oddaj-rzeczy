import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Decoration from '/src/assets/Decoration.svg'
import Facebook from "/src/assets/Facebook.svg"
import Instagram from "/src/assets/Instagram.svg"
export default function Contact() {
    const [success, setSuccess] = useState(false);
    const {register, handleSubmit, getValues, formState: {errors}, formState, reset} = useForm({
        defaultValues: {
            name: '',
            email: '',
            msg: '',
        }
    });

    const onSubmit = async () => {
        const name = getValues('name');
        const email = getValues('email');
        const message = getValues('msg')
        const response = await fetch(
            'https://fer-api.coderslab.pl/v1/portfolio/contact',
            {
                method: "POST",
                body: JSON.stringify({name, email, message}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        const re = await response.json();
        if (re.status === 'success') {
            setSuccess(true)
        }
    }
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset(
                {
                    name: '',
                    email: '',
                    msg: ''
                });
        }
    }, [formState, reset]);

    return (<>
        <div className='backgr'></div>
        <div className='contact-us'>
            <h2>Skontaktuj się z nami</h2>
            <img src={Decoration} alt="decoration"/>
            {success ? <p className='success'>Wiadomość została wysłana!<br/>wkrótce sie skontaktujemy.</p> : ""}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-input1'>
                    <div><label htmlFor="name">Wpisz swoje imię</label>
                        <input id='name'
                               {...register('name', {
                                   required: 'Podane imię jest nieprawidłowe',
                                   pattern: {
                                       value: /^[a-zA-Z]+$/,
                                       message: 'Podane imię jest nieprawidłowe'
                                   }
                               })}
                               type="text"
                               className={errors.name?.message ? 'error' : ''}
                               placeholder='Koronka'/>
                        <p className='error-message'>{errors.name?.message}</p>
                    </div>

                    <div><label htmlFor="email">Wpisz swój e-mail</label>
                        <input id='email'
                               {...register('email', {
                                   required: 'Podany e-mail jest nieprawidłowy',
                                   pattern: {
                                       value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                       message: 'Podany e-mail jest nieprawidłowy'
                                   }
                               })}
                               type="text"
                               className={errors.email?.message ? 'error' : ''}
                               placeholder='kornka@email.com'/>
                        <p className='error-message'>{errors.email?.message}</p>
                    </div>
                </div>
                <div className='form-input'><label htmlFor="msg">Wpisz swoją wiadomość</label>
                    <textarea id='msg'
                              {...register('msg', {
                                  required: 'Wiadomość musi mieć conajmniej 120 znaków',
                                  minLength: {
                                      value: 120,
                                      message: 'Wiadomość musi mieć conajmniej 120 znaków'
                                  }
                              })}
                              rows={10}
                              className={errors.msg?.message ? 'error' : ''}
                              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                    <p className='error-message'>{errors.msg?.message}</p>
                </div>
                <button type='submit' onClick={handleSubmit}> Wyślij</button>
            </form>
        </div>
        <footer>
            <div>Copyright by Coders Lab</div>
            <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="facebook"/> </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="instagram"/></a>
            </div>
        </footer>
    </>);
}

