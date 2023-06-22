import {useStoreActions, useStoreState} from "easy-peasy";
import {useEffect} from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {logOut} from "../firebase/firebaseAuth.js";
/* eslint-disable react/prop-types */


export default function HeaderShort() {
    const location = useLocation();

    const userLogout = useStoreActions((action) => action.userLogout);
    const setUser = useStoreActions((action) => action.setUserLogin);
    const user = useStoreState((state) => state.user);

    const navigate = useNavigate();
    useEffect(() => {
        setUser(user)
    }, [setUser])

    async function handleLogOut() {
        await logOut(userLogout);
        userLogout('');
        navigate('/')
    }

    return (
        <nav className="nav-menu">
            <div className='user-btns'>
                {user !== '' ?
                    (<>
                        <h2>Cześć {user.displayName}</h2>
                        {location.pathname === '/donation-form' ? (
                            <a href="/donation-form" className='menu-link'>Oddaj rzeczy</a>
                        ) : (
                            <Link to='/donation-form' className='menu-link'>Oddaj rzeczy</Link>
                        )}
                        <button onClick={handleLogOut} className='menu-link'>Wyloguj</button>
                    </>) : (<>
                        <Link to={'/login'} className='menu-link'>Zaloguj</Link>
                        <Link to={'/register'} className='menu-link'>Załóż konto</Link>
                    </>)
                }


            </div>
            <div className="menu-list">

                <li><Link to={'/'}>Start</Link></li>
                <li><p className='header-menu-disabled'>O co chodzi?</p></li>
                <li><p className='header-menu-disabled'>O nas</p></li>
                <li><p className='header-menu-disabled'>Fundacja i
                    organizacje</p></li>
                <li><p className='header-menu-disabled'>Kontakt</p></li>
            </div>
        </nav>
    );
}