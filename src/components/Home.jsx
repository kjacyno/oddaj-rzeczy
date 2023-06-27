/* eslint-disable react/prop-types */
import {useStoreActions, useStoreState} from "easy-peasy";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Element} from 'react-scroll';
import BasicPagination from "./BasicPagination.jsx";
import Contact from "./Contact.jsx";
import Header from "./Header.jsx";
import Decoration from '/src/assets/Decoration.svg'
import People from "/src/assets/People.jpg"
import Icon1 from "/src/assets/Icon-1.svg"
import Icon2 from "/src/assets/Icon-2.svg"
import Icon3 from "/src/assets/Icon-3.svg"
import Icon4 from "/src/assets/Icon-4.svg"
import Signature from "/src/assets/Signature.svg"
export default function Home() {
    const setUser= useStoreActions((action) => action.setUserLogin);
const user = useStoreState((state) => state.user);

    useEffect(() => {
        setUser(user)
    }, [setUser, user])

    return (
        <Element name="scroll-wrapper">
            <section className="section1">
                <div id="home-header">
                    <menu><Header
                        user={user}
                        setUser={setUser}
                    /></menu>
                    <div className="landing-form">
                        <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce
                        </h1>
                        <img src={Decoration} alt="decoration"/>
                        <div className="landing-form-btns">
                            <button className="btn-lg">
                                {user !== '' ? <Link to={'/donation-form'}>Oddaj rzeczy</Link> :
                                    <Link to={'/login'}>Oddaj rzeczy</Link>}
                            </button>
                            <button className="btn-lg">
                                {user ? <Link to={'/donation-form'}>Zorganizuj zbiórkę</Link> :
                                    <Link to={'/login'}>Zorganizuj zbiórkę</Link>}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="stats">
            <span>10 <p> ODDANYCH WORKÓW </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </span>
                    <span>5<p> WSPARTYCH ORGANIZACJI </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </span>
                    <span>7<p> ZORGANIZOWANYCH ZBIÓREK </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </span>
                </div>
            </section>
            <section id="idea">
                <div className='idea-header'><h2>Wystarczą 4 proste kroki
                </h2>
                    <img src={Decoration} alt="decoration"/></div>
                <div className='idea-desc'> 
                    <span>
                      <img src={Icon1} alt="choose"/>
                        <p>Wybierz rzeczy</p>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                </span>
                    <span>
                        <img src={Icon2} alt="pack"/>
                            <p>Spakuj je</p>
                            <p>skorzystaj z worków na śmieci</p>
                </span>
                    <span>
                        <img src={Icon3} alt="decide"/>
                            <p>Zdecyduj komu chcesz pomóc</p>
                            <p>wybierz zaufane miejsce</p>
                </span>
                    <span>
                       <img src={Icon4} alt="send"/>
                            <p>Zamów kuriera</p>
                            <p>kurier przyjedzie w dogodnym terminie</p>
                </span>
                </div>
                <button className="btn-lg">
                    {user ? <Link to={'/donation-form'}>Oddaj rzeczy</Link> :
                    <Link to={'/login'}>Oddaj rzeczy</Link>}
                </button>
            </section>
            <section id='about'>
                <div className='about-us'>
                    <h3>O nas</h3>
                    <img src={Decoration} alt="decoration"/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.<br/><br/>
                        <img src={Signature} alt="signature"
                             style={{
                                 height: 'auto',
                                 width: '20%',
                                 position: 'relative',
                                 left: '30%',
                                 padding: '0',
                                 margin: '0'
                             }}/>
                    </p>
                </div>
                <img src={People} alt="people"/>
            </section>
            <section id='organizations'>
                <BasicPagination/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
        </Element>

    );
}
