import React, { useEffect, useState } from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Variants from '../../../Animation/Animations';

import mainImg from '../../../Images/SVG/main_img.svg';
import basketImg from '../../../Images/SVG/basket_img.svg';
import appStore from '../../../Images/SVG/app-store-img.svg';
import googlePlay from '../../../Images/SVG/google-play-img.svg';
import appGalleryImg from '../../../Images/SVG/app_gallery_img.svg';
import mainIncomeCard from '../../../Images/SVG/main_icom_img.svg';
import starImg from '../../../Images/SVG/about_sec_star_1.svg';

import mainCSS from './main.module.css';

export default function Main() {

    const {t, i18n} = useTranslation();

    // ====== check-language ====== //

    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

    useEffect(() => {

        setIsEnglish(i18n.language === 'en')

    } , [i18n.language])

    // ====== animation ====== //

    const fRepeatStarVariants = {

        hidden : {scale: 1, x: -10, y: 10},
        visible : {
            scale: 0.9, x: 0, y: 0 , 
            transition : {type : 'wheel' , duration : 2 , repeat : Infinity , repeatType : 'mirror'}
        }

    }

    const sRepeatStarVariants = {

        hidden : {scale: 1, x: 0, y: 0},
        visible : {
            scale: 0.9, x: -10, y: 10 , 
            transition : {type : 'wheel' , duration : 2 , repeat : Infinity , repeatType : 'mirror'}
        }

    }

    const repeatBasketVariants = {

        hidden : {rotate: '-20deg'},
        visible : {
            rotate: '0deg' , 
            transition : {type : 'wheel' , duration : 4 , repeat : Infinity , repeatType : 'mirror'}
        }

    }

    const repeatVariants = {

        hidden : {scale: 1, rotate: '-5deg'},
        visible : {
            scale: 0.9, rotate: '0deg' , 
            transition : {type : 'wheel' , duration : 3 , repeat : Infinity , repeatType : 'mirror'}
        }

    }

    return <React.Fragment>

        <motion.main variants={Variants.parentVariantsNoStagger} initial='hidden' animate='visible' className={mainCSS.container}>

            <motion.div variants={Variants.parentVariants} className={mainCSS.content_side}>

                <motion.div variants={Variants.toTopVariants} className={mainCSS.row_view}>
                    <Title leftTitle={t('welcomeToWord')} rightTitle={t('watfaWord')} svgType={'main'} />
                    <p className={mainCSS.title_p}>{t('mainTitleSentence')}</p>
                </motion.div>

                <motion.p variants={Variants.toLeftVariants} className={mainCSS.content_p}>{t('introWatfa')}</motion.p>

                <motion.div variants={Variants.parentVariants} className={mainCSS.download_app_cont}>

                    <motion.a variants={Variants.toTopVariants} href="https://www.apple.com/eg/app-store/" target='_blank' rel="noreferrer">
                        <img loading='lazy' src={appStore} alt="app store link" />
                    </motion.a>

                    <motion.a variants={Variants.toTopVariants} href="https://play.google.com/store/games?hl=en" target='_blank' rel="noreferrer">
                        <img loading='lazy' src={googlePlay} alt="google play link" />
                    </motion.a>

                    <motion.a variants={Variants.toTopVariants} href="https://appgallery.huawei.com/Featured" target='_blank' rel="noreferrer">
                        <img loading='lazy' src={appGalleryImg} alt="app gallery link" />
                    </motion.a>

                </motion.div>

            </motion.div>

            <motion.div variants={Variants.parentVariants} className={mainCSS.img_side}>

                <div className={mainCSS.dash_bg}>

                    <div className={mainCSS.color_bg}></div>

                    <motion.img
                        className={`${mainCSS.basket_img} ${isEnglish ? mainCSS.basket_img_en : mainCSS.basket_img_ar}`}
                        variants={repeatBasketVariants} initial='hidden' animate='visible'
                        loading='lazy' src={basketImg} alt="small basket" 
                    />

                    <motion.img 
                        className={mainCSS.f_star}
                        variants={fRepeatStarVariants} initial='hidden' animate='visible'
                        style={isEnglish ? {left: '-0px'} : {right: '-0px'}}
                        loading='lazy' src={starImg} alt="starImg" 
                    />

                    <motion.img 
                        className={mainCSS.s_star} 
                        variants={sRepeatStarVariants} initial='hidden' animate='visible'
                        style={isEnglish ? {right: '-0px'} : {left: '-0px'}}
                        loading='lazy' src={starImg} alt="starImg" 
                    />

                    <motion.img 
                        className={mainCSS.price_box}
                        variants={repeatVariants} initial='hidden' animate='visible'
                        style={isEnglish ? {left: '-0px'} : {right: '-0px'}}
                        loading='lazy' src={mainIncomeCard} alt="mainIncomeCard" 
                    />

                </div>

                <motion.img
                    className={`${mainCSS.main_img} ${!isEnglish ? mainCSS.main_img_ar : mainCSS.main_img_en}`}
                    loading='lazy' src={mainImg} alt="main section" 
                />

            </motion.div>

            <motion.div variants={Variants.toTopVariants} className={mainCSS.column_view}>
                <Title leftTitle={t('welcomeToWord')} rightTitle={t('watfaWord')} svgType={'main'} />
                <p className={mainCSS.title_p}>{t('mainTitleSentence')}</p>
            </motion.div>

        </motion.main>

    </React.Fragment>

}
