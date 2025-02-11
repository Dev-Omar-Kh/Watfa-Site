import React from 'react';

import faqCSS from './faq.module.css';
import Title from '../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import quoteImg from '../../Images/SVG/quote_img.svg';
import Card from '../../Components/FAQ_Card/Card';

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

        <section className={`common_cont ${faqCSS.container}`}>

            <div className={faqCSS.title_cont}>

                <img className={`${faqCSS.quote} ${faqCSS.quote_top}`} src={quoteImg} alt="quote top" />

                <Title 
                    svgType={'main'} 
                    leftTitle={i18n.language === 'en' ? t('faqTitleLeft') : t('questionWord')} 
                    rightTitle={i18n.language === 'ar' ? t('faqTitleLeft') : t('questionWord')} 
                />

                <p className={faqCSS.title_p}>{t('faqTitleSentence')}</p>

                <img className={`${faqCSS.quote} ${faqCSS.quote_bottom}`} src={quoteImg} alt="quote bottom" />

            </div>

            <div className={faqCSS.questions_cont}>

                {faqData.map(que => <Card key={que.id} data={que} />)}

            </div>

        </section>

    </React.Fragment>

}
