import React from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import Card from '../../../Components/Exp_Card/Card';
import { motion } from 'framer-motion';
import Variants from '../../../Animation/Animations';

import chooseCSS from './choose.module.css';
import cardBoxCSS from '../../../Components/Exp_Card/card.module.css';

import cardIcon1 from '../../../Images/SVG/card_icon_1.svg';
import cardIcon2 from '../../../Images/SVG/card_icon_2.svg';
import cardIcon3 from '../../../Images/SVG/card_icon_3.svg';
import cardIcon4 from '../../../Images/SVG/card_icon_4.svg';
import cardIcon5 from '../../../Images/SVG/card_icon_5.svg';

export default function Choose() {

    const {t, i18n} = useTranslation();

    // ====== cards-data ====== //

    const cardsData = [

        {
            id: 1,
            title: t('whyCardsTitle1'),
            active: true,
            description: t('whyCardsDescription1'),
            img: cardIcon1
        },

        {
            id: 2,
            title: t('whyCardsTitle2'),
            description: t('whyCardsDescription2'),
            img: cardIcon2
        },

        {
            id: 3,
            title: t('whyCardsTitle3'),
            description: t('whyCardsDescription3'),
            img: cardIcon3
        },

        {
            id: 4,
            title: t('whyCardsTitle4'),
            description: t('whyCardsDescription4'),
            img: cardIcon4
        },

        {
            id: 5,
            title: t('whyCardsTitle5'),
            description: t('whyCardsDescription5'),
            img: cardIcon5
        },

    ];

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView='visible' 
            viewport={{once: true , amount: 0.1}}
            className={`common_cont ${chooseCSS.container}`}
        >

            <motion.div variants={Variants.toBottomVariants} viewport={{once: true , amount: 0.2}} className={chooseCSS.title_cont}>

                <Title leftTitle={t('whyChooseWord')} rightTitle={t('watfaWord')} svgType={'sub'} />

                <p className={chooseCSS.p}>{t('whyChooseP')}</p>

            </motion.div>

            <motion.div variants={Variants.parentVariantsDelay} className={chooseCSS.boxes_cont}>

                {cardsData.map( (card, idx) => (
                    <motion.div 
                        className={`${cardBoxCSS.container} ${card.active ? cardBoxCSS.color_bg_box : ''}`} key={card.id} 
                        variants={Variants.toBottomVariants} custom={idx}
                    >
                        <Card data={card} />
                    </motion.div>
                ))}

                <motion.div 
                    variants={Variants.toRightVariants} 
                    viewport={{once: true , amount: 0.2}}
                    className={`${cardBoxCSS.container_last} ${chooseCSS.link_box}`}
                >
                    <a href="https://play.google.com/store/games?hl=en" target='_blank' rel="noreferrer">
                        <p>{t('shopNowWord')}</p>
                        <svg 
                            width="17" height="11" 
                            style={i18n.language === 'ar' ? {transform: 'rotateY(180deg)'} : {}}
                            viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.793 0.799134C10.9805 0.611663 11.2348 0.506348 11.5 0.506348C11.7652 0.506348 12.0195 0.611663 12.207 0.799134L16.207 4.79913C16.3945 4.98666 16.4998 5.24097 16.4998 5.50613C16.4998 5.7713 16.3945 6.02561 16.207 6.21313L12.207 10.2131C12.0184 10.3953 11.7658 10.4961 11.5036 10.4938C11.2414 10.4915 10.9906 10.3864 10.8052 10.201C10.6198 10.0155 10.5146 9.76473 10.5123 9.50253C10.51 9.24034 10.6108 8.98774 10.793 8.79913L13.086 6.50613H1.5C1.23478 6.50613 0.98043 6.40078 0.792893 6.21324C0.605357 6.0257 0.5 5.77135 0.5 5.50613C0.5 5.24092 0.605357 4.98656 0.792893 4.79903C0.98043 4.61149 1.23478 4.50613 1.5 4.50613H13.086L10.793 2.21313C10.6055 2.02561 10.5002 1.7713 10.5002 1.50613C10.5002 1.24097 10.6055 0.986662 10.793 0.799134Z" fill="white"/>
                        </svg>
                    </a>
                </motion.div>

            </motion.div>

        </motion.section>

    </React.Fragment>

}
