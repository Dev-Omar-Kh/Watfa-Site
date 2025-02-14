import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import Card from '../../Components/Exp_Card/Card';
import { AnimatePresence, motion } from 'framer-motion';

import whyCSS from './why.module.css';

import phoneImg from '../../Images/SVG/phone_img.svg';
import cardImg1 from '../../Images/SVG/card_icon_1.svg';
import cardImg2 from '../../Images/SVG/card_icon_2.svg';
import cardImg3 from '../../Images/SVG/card_icon_3.svg';
import cardImg4 from '../../Images/SVG/card_icon_4.svg';
import cardImg5 from '../../Images/SVG/card_icon_5.svg';
import cardImg6 from '../../Images/SVG/card_icon_6.svg';
import linePhoneImg from '../../Images/SVG/line_car_img.svg';
import termCardImg1 from '../../Images/SVG/term_card_img_1.svg';
import termCardImg2 from '../../Images/SVG/term_card_img_2.svg';
import whyImgsSecImg1 from '../../Images/SVG/why_imgs_sec_img_1.svg';
import whyImgsSecImg2 from '../../Images/SVG/why_imgs_sec_img_2.svg';
import whyImgsSecImg3 from '../../Images/SVG/why_imgs_sec_img_3.svg';

export default function Why() {

    const {t, i18n} = useTranslation();

    // ====== cards-data ====== //

    const cardsData = [

        {
            id: 1,
            title: t('whyPageCardsTitle1'),
            description: t('whyPageCardsDescription1'),
            img: cardImg2
        },

        {
            id: 2,
            title: t('whyPageCardsTitle2'),
            description: t('whyPageCardsDescription2'),
            img: cardImg6
        },

        {
            id: 3,
            title: t('whyPageCardsTitle3'),
            active: true,
            description: t('whyPageCardsDescription3'),
            img: cardImg1
        },

        {
            id: 4,
            title: t('whyPageCardsTitle4'),
            description: t('whyPageCardsDescription4'),
            img: cardImg4
        },

        {
            id: 5,
            title: t('whyPageCardsTitle5'),
            description: t('whyPageCardsDescription5'),
            img: cardImg5
        },

        {
            id: 6,
            title: t('whyPageCardsTitle6'),
            description: t('whyPageCardsDescription6'),
            img: cardImg3
        },

    ];

    // ====== img-data-&-moving ====== //

    const imagesData = [whyImgsSecImg1, whyImgsSecImg2, whyImgsSecImg3];

    const [currentImages, setCurrentImages] = useState(imagesData);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImages((prev) => {
            const newOrder = [...prev.slice(1), prev[0]];
            return newOrder;
        });
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    // ====== term-cards-data ====== //

    const termCardsData = [

        {
            id: 1,
            img: termCardImg1,
            title: t('termCardTitle1'),
            content: t('termCardDescription1')
        },

        {
            id: 2,
            img: termCardImg2,
            title: t('termCardTitle2'),
            content: t('termCardDescription2')
        },

    ];

    // ====== how-work-data ====== //

    const howWorkData = [

        {
            id: 1,
            desc: t('howWorkCardDescription1')
        },

        {
            id: 2,
            desc: t('howWorkCardDescription2')
        },

        {
            id: 3,
            desc: t('howWorkCardDescription3')
        },

        {
            id: 4,
            desc: t('howWorkCardDescription4')
        },

        {
            id: 5,
            desc: t('howWorkCardDescription5')
        },

    ]

    // ====== animation ====== //

    const imgsVariants = {
        hidden: { opacity: 0, filter: "saturate(20%)" },
        visible: { opacity: 1, filter: "saturate(100%)", transition: { duration: 0.5 } },
        exit: { opacity: 0, filter: "saturate(20%)", transition: { duration: 0.5 } }
    };

    return <React.Fragment>

        <section className={`common_cont ${whyCSS.container}`}>

            <div className={whyCSS.title_cont}>

                <Title leftTitle={t('weWord')} rightTitle={t('offerWord')} svgType={'main'} />

                <p className={whyCSS.title_p}>{t('whyTitleSentence')}</p>

            </div>

            <div className={whyCSS.cards_cont}>

                {cardsData.map( card => <Card key={card.id} data={card} />)}

            </div>

            <div className={whyCSS.imgs_cont}>

                <AnimatePresence mode="sync">
                    {currentImages.map((img, idx) => <div className={whyCSS.img_card_cont} key={idx}>
                        <motion.img 
                            variants={imgsVariants} initial='hidden' animate='visible' exit={'exit'}
                            className={`${whyCSS[`img${idx+1}`]} ${whyCSS.img}`} id={`img${idx + 1}`}
                            style={idx === 1 ? {scale: 1} : {scale: 0.8}}
                            key={`${img}-${idx}`} src={img} alt={img}
                        />
                    </div>)}
                </AnimatePresence>

            </div>

            <div className={whyCSS.term_options}>

                <div className={whyCSS.term_title_cont}>

                    <h3>{t('termTitle')}</h3>

                    <p>{t('termTitleSentence')}</p>

                </div>

                <div className={whyCSS.term_cards_cont}>

                    {termCardsData.map(card => <div key={card.id} className={whyCSS.term_card}>

                        <img style={i18n.language === 'ar' ? {transform: 'rotateY(180deg)'} : {}} src={card.img} alt={card.title} />

                        <div className={whyCSS.term_card_content}>
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>

                    </div>)}

                </div>

            </div>

            <div className={whyCSS.how_work}>

                <div className={whyCSS.term_title_cont}>

                    <h3>{t('howWorkTitle')}</h3>

                    <p>{t('howWorkSentence')}</p>

                </div>

                <div className={whyCSS.how_work_cont}>

                    <div className={whyCSS.work_left}>

                        <img className={whyCSS.work_left_main_img} src={phoneImg} alt="phoneImg" />
                        <img className={whyCSS.work_left_line_img} src={linePhoneImg} alt="linePhoneImg" />

                    </div>
                    <div className={whyCSS.work_right}>

                        <div style={i18n.language === 'en' ? {left: 14} : {right: 14}} className={whyCSS.line_dashed}></div>

                        {howWorkData.map(card => <div key={card.id} className={whyCSS.work_content_row}>

                            <span></span>
                            <p>{card.desc}</p>

                        </div>)}

                    </div>

                </div>

            </div>

        </section>

    </React.Fragment>

}
