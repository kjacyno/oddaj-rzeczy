/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import {useStoreActions} from "easy-peasy";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import Header from '../components/Header.jsx';
import {signIn} from '../firebase/firebaseAuth.js';

export default function Login({user, setUser}) {
    const {register, handleSubmit, getValues, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            msg: '',
        }
    });
    const navigate = useNavigate();
    const userLogin = useStoreActions((action) => action.userLogin);

    async function handleUserLogin(event) {
        event.preventDefault();
        const email = getValues('email');
        const password = getValues('password')
        await signIn(email, password, setUser);
        console.log('signed in');
        userLogin(user);
        navigate('/')
    }

    return (
        <Container maxWidth="xl">
            <Header/>
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
                           {...register('password', {required: 'Podaj hasło'})}
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
