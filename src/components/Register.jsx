import {Container} from '@mui/material';
import PropTypes from 'prop-types'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header.jsx';
import {createNewUser} from '../firebase/firebaseAuth.js';

export default function Register({user, setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');


    async function handleNewUser(event) {
        event.preventDefault();
        await createNewUser(
            {
                displayName: login
            },
            setUser, user, login, email, password
        );

    }

    return (
        <Container maxWidth="xl">
            <Header/>
            <div className="user-box">
                <form id='register-form'
                      onSubmit={handleNewUser}
                      className="form">
                    <label htmlFor="register">Załóż konto</label>
                    <input type="text"
                           value={login}
                           id="login"
                           name="login"
                           onChange={(event) => setLogin(event.target.value)}
                           placeholder="imię"
                    />
                    <label htmlFor="email"></label>
                    <input type="email"
                           value={email}
                           id="email"
                           placeholder="e-mail"
                           onChange={(event) => setEmail(event.target.value)}/>
                    <label htmlFor="password"></label>
                    <input type="password"
                           id='password'
                           value={password}
                           placeholder='hasło'
                           onChange={(event) => setPassword(event.target.value)}/>
                    <button type='submit'><Link to={'/'}>Zarejestruj się</Link></button>
                </form>
                <Link to={'/'}>back</Link>
            </div>
        </Container>);
}

Register.propTypes = {
    user: PropTypes.any,
    setUser: PropTypes.any
}