/* eslint-disable react/prop-types */
import {Container} from '@mui/material';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header.jsx';
import {createNewUser} from '../firebase/firebaseAuth.js';

export default function Register({user, setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleNewUser(event) {
        event.preventDefault();
        await createNewUser(
            {
                displayName: email
            },
            setUser, user, email, password
        );

    }

    return (
        <Container maxWidth="xl">
            <Header/>
            <div className="register">
                <h2>Załóż konto</h2>
                <img src="/src/assets/Decoration.svg" alt="decoration"/>
                <form id='register-form'
                      onSubmit={handleNewUser}
                      >
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           value={email}
                           id="email"
                           placeholder="e-mail"
                           onChange={(event) => setEmail(event.target.value)}/>
                    <label htmlFor="password">Hasło</label>
                    <input type="password"
                           id='password'
                           value={password}
                           placeholder='hasło'
                           onChange={(event) => setPassword(event.target.value)}/>
                </form>
                <div className='login-menu'>
                <Link to={'/login'} className='login-btn'>Zaloguj się</Link>
                <button type='submit' form='register-form' className='login-btn'>Zarejestruj się</button>
                </div>
            </div>
        </Container>);
}
