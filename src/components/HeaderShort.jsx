import {Link} from 'react-router-dom';


export default function HeaderShort() {

    return (
        <nav className="nav-menu">
            <div className='user-btns'>

                    <Link to={'/login'} className='menu-link'>Zaloguj</Link>
                    <Link to={'/register'} className='menu-link'>Załóż konto</Link>


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