import Stack from '@mui/material/Stack';
import {Element} from 'react-scroll';
import Header from "./Header.jsx";

export default function Home() {
    return (
        <Element name="scroll-wrapper">
            <section className="section1">
                <div id="home-header">
                   <menu><Header/></menu>

                    {/*<div id="home-hero">*/}
                    {/*    <img src="/src/assets/Home-Hero-Image.jpg" alt="home-hero"/>*/}
                    {/*</div>*/}
                    <div className="landing-form">
                        <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce
                        </h1>
                        <img src="/src/assets/Decoration.svg" alt="decoration"/>
                        <Stack
                            direction={{sm: 'column', xl: 'row'}}
                            spacing={{sm: 1, md: 2, xl: 4}}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <button className="btn-lg">Oddaj rzeczy</button>
                            <button className="btn-lg">Zorganizuj zbiórkę</button>
                        </Stack>
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

            </section>
            <section id='about'>

            </section>
            <section id='organizations'>

            </section>
            <section id='contact'>

            </section>
        </Element>

    );
}
