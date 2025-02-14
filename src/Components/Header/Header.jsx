import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TrBtn from './../Translation-Button/TrBtn';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import { BsPatchCheck } from 'react-icons/bs';
import Flag from 'react-world-flags';

import logo from '../../Images/logo.png';

import headerCSS from './header.module.css';

export default function Header() {

    const {t, i18n} = useTranslation();

    // ====== nav-for-phone ====== //

    const hideNavBar = () => {

        const navPh = document.getElementById('nav_ph');
        const navBar = document.getElementById('navBar');

        navPh.classList.toggle(headerCSS.change);
        navBar.classList.toggle(headerCSS.display_nav);

    };

    // ====== language-droplist ====== //

    const [displayList, setDisplayList] = useState(false);

    // ====== change-language ====== //

    const changeLanguage = (lang) => {

        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setDisplayList(false);

    };

    // ====== framer-motion ====== //

    const showListVariants = {

        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },

    }

    return <React.Fragment>

        <header id='header' className={`${headerCSS.container}`}>

            <Link className={headerCSS.logo}>
                <img src={logo} alt="logo" />
            </Link>

            <div id='nav_ph' onClick={hideNavBar} className={headerCSS.nav_ph}>

                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>

            </div>

            <nav id='navBar' className={headerCSS.nav}>

                <ul>

                    <li>
                        <NavLink className='nav_bar_links' onClick={hideNavBar} to={'/'}>
                            {t('homeWord')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='nav_bar_links' onClick={hideNavBar} to={'/whyWatfa'}>
                            {`${t('whyWord')} ${t('watfaWord')}`}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='nav_bar_links' onClick={hideNavBar} to={'/aboutWatfa'}>
                            {`${t('aboutWord')} ${t('watfaWord')}`}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='nav_bar_links' onClick={hideNavBar} to={'/FAQ'}>
                            {t('faqWord')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='nav_bar_links' onClick={hideNavBar} to={'/contact'}>
                            {t('contactUsWord')}
                        </NavLink>
                    </li>

                    <li className={headerCSS.language_on_nave}>

                        <button 
                            onClick={() => setDisplayList(prev => !prev)} 
                            className={headerCSS.nav_btn} 
                            // style={{color: displayList ? 'var(--f-white-color)' : ''}}
                        >
                            <div className={headerCSS.btn_l_side}>
                                <p>{t('languageWord')}</p>
                            </div>
                            {i18n.language === 'en' ? 
                                <div style={{rotate: displayList ? '90deg' : '0deg'}} className={headerCSS.arrowList}>
                                    <IoIosArrowForward />
                                </div> :
                                <div style={{rotate: displayList ? '-90deg' : '0deg'}} className={headerCSS.arrowList}>
                                    <IoIosArrowBack />
                                </div>
                            }
                        </button>

                        <AnimatePresence>

                            {displayList && <motion.ul 
                                onClick={hideNavBar}
                                variants={showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={headerCSS.link_det}
                            >

                                <li
                                    className={i18n.language === 'en' ? '' : headerCSS.active_lang} 
                                    onClick={() => changeLanguage('ar')}
                                >
                                    <Flag code="sa" />
                                    <p>{t('arabicWord')}</p>
                                    {i18n.language === 'ar' && <BsPatchCheck />}
                                </li>

                                <li 
                                    className={i18n.language === 'ar' ? '' : headerCSS.active_lang} 
                                    onClick={() => changeLanguage('en')}
                                >
                                    <Flag code="us" />
                                    <p>{t('englishWord')}</p>
                                    {i18n.language === 'en' && <BsPatchCheck />}
                                </li>

                            </motion.ul>}

                        </AnimatePresence>

                    </li>

                </ul>

            </nav>

            <div className={headerCSS.tr_btn}>
                <TrBtn />
            </div>

        </header>

    </React.Fragment>

}