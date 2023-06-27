/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import {useStoreActions} from "easy-peasy";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import {signIn} from '../firebase/firebaseAuth.js';
import HeaderShort from "./HeaderShort.jsx";

export default function Login() {
    const userLogin = useStoreActions((action) => action.setUserLogin);

    const {register, handleSubmit, getValues, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            msg: '',
        }
    });
    const navigate = useNavigate();

    async function handleUserLogin() {
        const email = getValues('email');
        const password = getValues('password')
        try {
            await signIn(email, password, userLogin);
            navigate('/')
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert('Hasło jest nieprawidłowe, spróbuj ponownie')
            } else if (error.code === 'auth/too-many-requests') {
                alert('Zbyt wiele prób, spróbuj ponownie za chwilę')
            }
        }
    }

    return (
        <Container maxWidth="xl">
            <HeaderShort/>
            <div className="login">
                <h2>Zaloguj się</h2>
                <img src="/src/assets/Decoration.svg" alt="decoration"/>
                <form
                    id='login-form'
                    onSubmit={handleSubmit(handleUserLogin)}>

                    <label htmlFor="email">Email</label>
                    <input type="email"
                           {...register('email', {
                               required: 'Podany e-mail jest nieprawidłowy',
                               pattern: {
                                   value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                   message: 'Podany e-mail jest nieprawidłowy'
                               }
                           })}
                           id='email'
                           className={errors.email?.message ? 'error' : ''}
                    />
                    <p className='error-message'>{errors.email?.message}</p>

                    <label htmlFor="pwd">Hasło</label>
                    <input type="password"
                           {...register('password', {
                               required: 'Podaj hasło', minLength: {
                                   value: 6,
                                   message: 'Hasło musi mieć min. 6 znaków'
                               }
                           })}
                           className={errors.password?.message ? 'error' : ''}
                           id='pwd'
                    />
                    <p className='error-message'>{errors.password?.message}</p>
                </form>
                <div className='login-menu'>
                    <Link to={'/register'} className='login-btn'>Załóż konto</Link>
                    <button className='login-btn' type='submit' form='login-form'>
                        Zaloguj się
                    </button>
                </div>
            </div>
        </Container>);
}
