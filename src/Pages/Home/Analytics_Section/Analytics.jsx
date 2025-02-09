import React from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import analyticsCSS from './analytics.module.css';

import carImg from '../../../Images/SVG/car_img.svg';
import lineCarImg from '../../../Images/SVG/line_car_img.svg';
import cartSignImg from '../../../Images/SVG/cart_sign_img.svg';
import cartAmountImg from '../../../Images/SVG/cart_amount_img.svg';

export default function Analytics() {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <section className={`common_cont ${analyticsCSS.container}`}>

            <div className={analyticsCSS.content_side}>

                <div className={analyticsCSS.row_title}>
                    <Title 
                        svgType={'sub'} 
                        leftTitle={i18n.language === 'en' ? t('spendWord') : t('analyticsWord')} 
                        rightTitle={i18n.language === 'en' ? t('analyticsWord') : t('spendWord')} 
                    />
                </div>

                <p className={analyticsCSS.par}>{t('spendAnalyticsP')}</p>

            </div>

            <div className={analyticsCSS.img_side}>

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

            </div>

            <div className={analyticsCSS.column_title}>
                <Title 
                    svgType={'sub'} 
                    leftTitle={i18n.language === 'en' ? t('spendWord') : t('analyticsWord')} 
                    rightTitle={i18n.language === 'en' ? t('analyticsWord') : t('spendWord')} 
                />
            </div>

        </section>

    </React.Fragment>

}
