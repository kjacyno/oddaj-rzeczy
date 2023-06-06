import {Container, CssBaseline} from "@mui/material";
import {useState} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

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
            />,
        },
        {
            path: 'register',
            element: <Register
                user={user}
                setUser={setUser}
            />,
        }
    ])

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="xl">
                <RouterProvider router={router}/>
            </Container>
        </>
    )
}

export default App
