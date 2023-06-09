import {Container, CssBaseline} from "@mui/material";
import {StoreProvider} from "easy-peasy";
import {useState} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DonationForm from "./components/DonationForm.jsx";

import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import {store} from "./components/Store.js";

function App() {
    const [user, setUser] = useState({})
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: 'login',
            element: <Login
                setUser={setUser}
                user={user}
            />,
        },
        {
            path: 'register',
            element: <Register
                user={user}
                setUser={setUser}
            />,
        },
        {
            path: 'donation-form',
            element: <DonationForm/>
        }
    ])

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="xl">
                <StoreProvider store={store}>
                    <RouterProvider router={router}/>
                </StoreProvider>
            </Container>
        </>
    )
}

export default App
