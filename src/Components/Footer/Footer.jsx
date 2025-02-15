import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';

import footerCSS from './footer.module.css';

import logo from '../../Images/logo.png';
import googlePlayImg from '../../Images/SVG/google-play-img.svg';
import appStoreImg from '../../Images/SVG/app-store-img.svg';
import appGallery from '../../Images/SVG/app_gallery_img.svg';

export default function Footer() {

    const {t} = useTranslation();

    return <React.Fragment>

        <footer className={`common_cont ${footerCSS.container}`}>

            <div className={`${footerCSS.common_sec} ${footerCSS.main_sec}`}>

                <Link>
                    <img src={logo} alt="logo" />
                </Link>

                <p>{t('footerMainSentence')}</p>

            </div>

            <div className={`${footerCSS.common_sec} ${footerCSS.middle_sec}`}>

                <h3>{t('quickLinksWord')}</h3>

                <div className={footerCSS.links_cont}>

                    <NavLink to={'/whyWatfa'} className={`nav_bar_links ${footerCSS.li_links}`}>
                        {`${t('whyWord')} ${t('watfaWord')}`}
                    </NavLink>
                    <NavLink to={'/aboutWatfa'} className={`nav_bar_links ${footerCSS.li_links}`}>
                        {`${t('aboutWord')} ${t('watfaWord')}`}
                    </NavLink>
                    <NavLink to={'/FAQ'} className={`nav_bar_links ${footerCSS.li_links}`}>
                        {t('faqWord')}
                    </NavLink>
                    <NavLink to={'/contact'} className={`nav_bar_links ${footerCSS.li_links}`}>
                        {t('contactUsWord')}
                    </NavLink>

                </div>

            </div>

            <div className={`${footerCSS.common_sec} ${footerCSS.last_sec}`}>

                <h3>{t('installAppWord')}</h3>

                <div className={footerCSS.img_cont}>

                    <a href='https://www.apple.com/eg/app-store/' target='_blank' rel="noreferrer">
                        <img src={appStoreImg} alt="google play download link" />
                    </a>
                    <a href='https://play.google.com/store/games?hl=en' target='_blank' rel="noreferrer">
                        <img src={googlePlayImg} alt="app store download link" />
                    </a>
                    <a href='https://appgallery.huawei.com/Featured' target='_blank' rel="noreferrer">
                        <img src={appGallery} alt="app gallery download link" />
                    </a>

                </div>

                <p className={footerCSS.p_last}>{t('securedPaymentWord')}</p>

                <div className={footerCSS.follow_cont}>

                    <p>{t('followWord')}</p>

                    <div className={footerCSS.icons_cont}>

                        <a href="https://www.facebook.com/">
                            <TiSocialFacebook />
                        </a>

                        <a href="https://x.com/home?lang=en">
                            <TiSocialTwitter />
                        </a>

                        <a href="https://www.instagram.com/">
                            <AiOutlineInstagram />
                        </a>

                        <a href="https://www.pinterest.com/">
                            <TiSocialPinterest />
                        </a>

                        <a href="https://www.youtube.com/">
                            <AiFillYoutube />
                        </a>

                    </div>

                </div>

            </div>

            <div className={footerCSS.copyright_sec}>
                <p>{t('copyrightSentence')}</p>
            </div>

        </footer>

    </React.Fragment>

}
