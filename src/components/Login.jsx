/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import {useStoreActions} from "easy-peasy";
import PropTypes from "prop-types";
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
            <div className="user-box">
                <form
                    onSubmit={handleSubmit(handleUserLogin)}>
                    <label htmlFor="email">LOG IN</label>
                    <input type="email"
                           {...register('email', {required: 'Podany e-mail jest nieprawidłowy',
                               pattern: {
                                   value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                   message:'Podany e-mail jest nieprawidłowy'
                               }})}
                           id='email'
                           className={errors.email?.message ? 'error' : ''}
                           placeholder='E-mail'
                    />
                    <p className='error-message'>{errors.email?.message}</p>

                    <label htmlFor="pwd"></label>
                    <input type="password"
                           {...register('password', {required: 'Podaj hasło'})}
                           className={errors.password?.message ? 'error' : ''}
                           id='pwd'
                           placeholder='Password'
                    />
                    <p className='error-message'>{errors.password?.message}</p>

                    <button type='submit'>
                        Zaloguj się
                    </button>
                </form>

                <Link to={'/register'}>Załóż konto</Link>
            </div>
        </Container>);
}

Login.propTypes = {
    setUser: PropTypes.func,
}