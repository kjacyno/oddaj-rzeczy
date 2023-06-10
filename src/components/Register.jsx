/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import {useStoreActions} from "easy-peasy";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import {createNewUser} from '../firebase/firebaseAuth.js';
import HeaderShort from "./HeaderShort.jsx";

export default function Register() {
    const setUser =  useStoreActions((action) => action.setUserLogin);

    const {register, handleSubmit, getValues, watch, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            msg: '',
        }
    });
    const navigate = useNavigate();

    async function handleNewUser() {
        const email = getValues('email');
        const password = getValues('password')
        await createNewUser(
            setUser, email, password
        );
        navigate('/')

    }

    return (
        <Container maxWidth="xl">
            <HeaderShort/>
            <div className="register">
                <h2>Załóż konto</h2>
                <img src="/src/assets/Decoration.svg" alt="decoration"/>
                <form id='register-form'
                      onSubmit={handleSubmit(handleNewUser)}
                      >
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           {...register('email', {
                               required: 'Podany e-mail jest nieprawidłowy',
                               pattern: {
                                   value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                   message: 'Podany e-mail jest nieprawidłowy'
                               }
                           })}
                           id="email"
                           className={errors.email?.message ? 'error' : ''}
                    />
                    <p className='error-message'>{errors.email?.message}</p>
                    <label htmlFor="password">Hasło</label>
                    <input type="password"
                           {...register('password', {required: 'Podaj hasło', minLength: {
                                   value: 6,
                                   message: 'Hasło musi mieć min. 6 znaków'
                               }})}
                           className={errors.password?.message ? 'error' : ''}
                           id='password'/>
                    <p className='error-message'>{errors.password?.message}</p>

                    <label htmlFor="password">Powtórz hasło</label>
                    <input type="password"
                           {...register('confirm', {required: 'Potwierdź hasło',
                               validate: (value) => value === watch("password") || "Hasła muszą być identyczne"

                           })}
                           id='confirm'/>
                    <p className='error-message'>{errors.confirm?.message}</p>

                </form>
                <div className='login-menu'>
                <Link to={'/login'} className='login-btn'>Zaloguj się</Link>
                <button type='submit' form='register-form' className='login-btn'>Zarejestruj się</button>
                </div>
            </div>
        </Container>);
}
