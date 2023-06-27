import {Container, CssBaseline} from "@mui/material";
import {StoreProvider} from "easy-peasy";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DonatePage from "./components/DonatePage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import {store} from "./components/Store.js";
import {lazy, Suspense} from 'react';

const LazyDonatePage = lazy(() => import('./components/DonatePage.jsx'));
const LazyLogin = lazy(() => import('./components/Login.jsx'));
const LazyRegister = lazy(() => import('./components/Register.jsx'));
const LazyHome =  lazy(() => import('./components/Home.jsx'));
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LazyHome/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: 'login',
            element: <LazyLogin/>,
        },
        {
            path: 'register',
            element: <LazyRegister/>,
        },
        {
            path: 'donation-form',
            element: <LazyDonatePage/>
        }
    ])

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="xl">
                <StoreProvider store={store}>
                    <Suspense fallback={<div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>}>
                        <RouterProvider router={router}/>
                    </Suspense>
                </StoreProvider>
            </Container>
        </>
    )
}

export default App
