import React from 'react';
import Title from '../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import contactCSS from './contact.module.css';

import cartImg from '../../Images/SVG/contact_cart_img.svg';

export default function Contact() {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <section className={`common_cont ${contactCSS.container}`}>

            <div className={contactCSS.title_cont}>

                <Title leftTitle={t('contactWord')} rightTitle={t('usContactWord')} svgType={'main'} />

                <p className={contactCSS.title_p}>{t('contactUsTitleSentence')}</p>

            </div>

            <div className={contactCSS.contact_cont}>

                <div className={contactCSS.img_side}>

                    <div className={contactCSS.main_circle}></div>

                    <img
                        style={i18n.language === 'ar' ? 
                            {transform: 'translateY(-50%) rotateY(180deg)', right: 0} : 
                            {transform: 'translateY(-50%)', left: 0}
                        }
                        className={contactCSS.main_img} src={cartImg} alt="cartImg" 
                    />

                    <div 
                        style={i18n.language === 'en' ? {right: 125} : {left: 125}}
                        className={`${contactCSS.sub_circle} ${contactCSS.circle_1}`}>
                    </div>
                    <div 
                        style={i18n.language === 'en' ? {left: 0} : {right: 0}}
                        className={`${contactCSS.sub_circle} ${contactCSS.circle_2}`}>
                    </div>
                    <div 
                        style={i18n.language === 'en' ? {left: -50} : {right: -50}}
                        className={`${contactCSS.sub_circle} ${contactCSS.circle_3}`}>
                    </div>

                </div>

                <form className={contactCSS.form}>

                    <h3 className={contactCSS.form_title}>{t('formTitle')}</h3>

                    <div className={contactCSS.input_cont}>

                        <div 
                            className={contactCSS.loader} 
                            style={i18n.language === 'en' ? {right: '10px'} : {left: '10px'}}
                        ></div>

                        <label htmlFor="">{t('nameLabelForm')}</label>

                        <input 
                            type="text" 
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

                    </div>

                    <div className={contactCSS.input_cont}>

                        <div 
                            className={contactCSS.loader} 
                            style={i18n.language === 'en' ? {right: '10px'} : {left: '10px'}}
                        ></div>

                        <label htmlFor="">{t('emailLabelForm')}</label>

                        <input 
                            type="text" 
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

                    </div>

                    <div className={contactCSS.input_cont}>

                        <div 
                            className={contactCSS.loader} 
                            style={i18n.language === 'en' ? {right: '10px'} : {left: '10px'}}
                        ></div>

                        <label htmlFor="">{t('numLabelForm')}</label>

                        <input 
                            type="text" 
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

                    </div>

                    <div className={contactCSS.input_cont}>

                        <label htmlFor="">{t('msgLabelForm')}</label>

                        <textarea name="" id=""></textarea>

                    </div>

                    <div className={contactCSS.submit_cont}>

                        <button type="submit">{t('submitFormWord')}</button>

                    </div>

                </form>

            </div>

        </section>

    </React.Fragment>

}
