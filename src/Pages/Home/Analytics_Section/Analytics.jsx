import React from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import analyticsCSS from './analytics.module.css';

import carImg from '../../../Images/SVG/car_img.svg';
import lineCarImg from '../../../Images/SVG/line_car_img.svg';
import cartSignImg from '../../../Images/SVG/cart_sign_img.svg';
import cartAmountImg from '../../../Images/SVG/cart_amount_img.svg';
import { motion } from 'framer-motion';
import Variants from '../../../Animation/Animations';

export default function Analytics() {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
            viewport={{once: true , amount: 0.1}}
            className={`common_cont ${analyticsCSS.container}`}
        >

            <motion.div variants={Variants.parentVariants} viewport={{once: true , amount: 0.1}} className={analyticsCSS.content_side}>

                <motion.div variants={Variants.toTopVariants} className={analyticsCSS.row_title}>
                    <Title 
                        svgType={'sub'} 
                        leftTitle={i18n.language === 'en' ? t('spendWord') : t('analyticsWord')} 
                        rightTitle={i18n.language === 'en' ? t('analyticsWord') : t('spendWord')} 
                    />
                </motion.div>

                <motion.p variants={Variants.toRightVariants} className={analyticsCSS.par}>{t('spendAnalyticsP')}</motion.p>

            </motion.div>

            <motion.div variants={Variants.scaleOutVariants} viewport={{once: true , amount: 0.2}} className={analyticsCSS.img_side}>

                <img
                    style={i18n.language === 'ar' ? {transform: 'rotateY(180deg)'} : {}} 
                    className={analyticsCSS.main_img} src={carImg} alt="main cart" 
                />

                <img
                    className={`
                        ${analyticsCSS.sub_img}
                        ${i18n.language === 'en' ? analyticsCSS.sub_img_en : analyticsCSS.sub_img_ar}
                    `} 
                    src={lineCarImg} alt="line cart" 
                />

                <img 
                    className={`
                        ${analyticsCSS.sub_sub_img} ${analyticsCSS.sign_img}
                        ${i18n.language === 'en' ? analyticsCSS.sign_img_en : analyticsCSS.sign_img_ar}
                    `} 
                    src={cartSignImg} alt="cart orange sign"
                />

                <img 
                    className={`
                        ${analyticsCSS.sub_sub_img} ${analyticsCSS.amount_img}
                        ${i18n.language === 'en' ? analyticsCSS.amount_img_en : analyticsCSS.amount_img_ar}
                    `} 
                    src={cartAmountImg} alt="cart amount" 
                />

            </motion.div>

            <motion.div variants={Variants.toTopVariants} viewport={{once: true , amount: 0.1}} className={analyticsCSS.column_title}>
                <Title 
                    svgType={'sub'} 
                    leftTitle={i18n.language === 'en' ? t('spendWord') : t('analyticsWord')} 
                    rightTitle={i18n.language === 'en' ? t('analyticsWord') : t('spendWord')} 
                />
            </motion.div>

        </motion.section>

    </React.Fragment>

}
