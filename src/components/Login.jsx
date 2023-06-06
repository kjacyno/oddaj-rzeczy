import {Container} from '@mui/material';
import PropTypes from "prop-types";
import {useState} from "react";
import {Link} from 'react-router-dom';
import Header from '../components/Header.jsx';
import {signIn} from '../firebase/firebaseAuth.js';

export default function Login({setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    async function handleUserLogin(event) {
        event.preventDefault();
        await signIn(email, password, setUser);
        console.log('signed in');
    }

    return (
        <Container maxWidth="xl">
            <Header/>
            <div className="user-box">
                <form
                    onSubmit={handleUserLogin}>
                    <label htmlFor="email">LOG IN</label>
                    <input type="email"
                           value={email}
                           id='email'
                           placeholder='E-mail'
                           onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="pwd"></label>
                    <input type="password"
                           id='pwd'
                           value={password}
                           placeholder='Password'
                           onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type='submit'
                    ><Link to={'/'}>
                        OK</Link>
                    </button>
                </form>
                <Link to={'/'}>back</Link>
            </div>
        </Container>);
}

Login.propTypes = {
    setUser: PropTypes.func,
}