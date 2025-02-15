import React from 'react';

import faqCSS from './faq.module.css';
import Title from '../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import quoteImg from '../../Images/SVG/quote_img.svg';
import Card from '../../Components/FAQ_Card/Card';
import { motion } from 'framer-motion';
import Variants from './../../Animation/Animations';

export default function FAQ() {

    const {t, i18n} = useTranslation();

    // ====== card-data ====== //

    const faqData = [

        {
            id: 1,
            question: t('faqQuestion1'),
            answer: t('faqAnswer1')
        },

        {
            id: 2,
            question: t('faqQuestion2'),
            answer: t('faqAnswer2')
        },

        {
            id: 3,
            question: t('faqQuestion3'),
            answer: t('faqAnswer3')
        },

        {
            id: 4,
            question: t('faqQuestion4'),
            answer: t('faqAnswer4')
        },

    ];

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'} 
            viewport={{once: true , amount: 0.1}}
            className={`common_cont ${faqCSS.container}`}
        >

            <motion.div variants={Variants.scaleOutVariants} className={faqCSS.title_cont}>

                <motion.img 
                    variants={Variants.toBottomVariants} 
                    className={`${faqCSS.quote} ${faqCSS.quote_top}`} 
                    src={quoteImg} alt="quote top" 
                />

                <Title 
                    svgType={'main'} 
                    leftTitle={i18n.language === 'en' ? t('faqTitleLeft') : t('questionWord')} 
                    rightTitle={i18n.language === 'ar' ? t('faqTitleLeft') : t('questionWord')} 
                />

                <p className={faqCSS.title_p}>{t('faqTitleSentence')}</p>

                <motion.img 
                    variants={Variants.toTopVariants}
                    className={`${faqCSS.quote} ${faqCSS.quote_bottom}`} 
                    src={quoteImg} alt="quote bottom" 
                />

            </motion.div>

            <motion.div variants={Variants.parentVariants} className={faqCSS.questions_cont}>

                {faqData.map((que, idx) => (
                    <motion.div 
                        variants={(idx+1) % 2 === 0 ? Variants.toRightVariants : Variants.toLeftVariants} 
                        viewport={{once: true , amount: 0.2}} custom={idx}
                    >
                        <Card key={que.id} data={que} />
                    </motion.div>
                ))}

            </motion.div>

        </motion.section>

    </React.Fragment>

}
