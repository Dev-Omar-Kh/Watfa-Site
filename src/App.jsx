import React, { useEffect } from 'react';
import SiteLayout from './Layouts/Site-Layout/SiteLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useTranslation } from 'react-i18next';

const routes = createBrowserRouter([

    {path: '/', element: <SiteLayout />, children: [

        {path: '/', element: <Home />}

    ]}

]);

export default function App() {

    const {i18n} = useTranslation();

    useEffect(() => {

        const savedLang = localStorage.getItem('language');

        if(savedLang && i18n.language !== savedLang){
            i18n.changeLanguage(savedLang);
        }

        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

    }, [i18n , i18n.language]);

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}
