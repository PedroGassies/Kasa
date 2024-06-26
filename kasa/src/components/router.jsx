import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ErrorPage from './error-page/error-page'
import About from './about/about'
import Home from './home/home'
import Fiche from './fiche-logement/Fiche'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/Home" replace />,
    },
    {
        path: '/Home',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/a-propos',
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/Fiche/:id',
        element: <Fiche />,
        errorElement: <ErrorPage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
)

export default Router
