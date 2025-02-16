import React from 'react';
import Title from '../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import contactCSS from './contact.module.css';

import cartImg from '../../Images/SVG/contact_cart_img.svg';
import { motion } from 'framer-motion';
import Variants from '../../Animation/Animations';

export default function Contact() {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <motion.section
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'} 
            viewport={{once: true , amount: 0.1}}
            className={`common_cont ${contactCSS.container}`}
        >

            <motion.div variants={Variants.toBottomVariants} className={contactCSS.title_cont}>

                <Title leftTitle={t('contactWord')} rightTitle={t('usContactWord')} svgType={'main'} />

                <p className={contactCSS.title_p}>{t('contactUsTitleSentence')}</p>

            </motion.div>

            <div className={contactCSS.contact_cont}>

                <motion.div variants={Variants.toTopVariants} viewport={{once: true , amount: 0.2}} className={contactCSS.img_side}>

                    <div className={contactCSS.main_circle}></div>

                    <img
                        style={i18n.language === 'ar' ? 
                            {transform: 'translateY(-50%) rotateY(180deg)', right: 0} : 
                            {transform: 'translateY(-50%)', left: 0}
                        }
                        loading='lazy'
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

                </motion.div>

                <motion.form variants={Variants.toBottomVariants} viewport={{once: true , amount: 0.2}} className={contactCSS.form}>

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

                </motion.form>

            </div>

        </motion.section>

    </React.Fragment>

}
