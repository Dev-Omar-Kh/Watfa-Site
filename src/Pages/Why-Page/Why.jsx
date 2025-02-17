import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import Card from '../../Components/Exp_Card/Card';
import { AnimatePresence, motion } from 'framer-motion';

import whyCSS from './why.module.css';
import cardBoxCSS from '../../Components/Exp_Card/card.module.css';

import phoneImg from '../../Images/SVG/phone_img.svg';
import cardImg2 from '../../Images/SVG/card_icon_2.svg';
import cardImg3 from '../../Images/SVG/card_icon_3.svg';
import cardImg4 from '../../Images/SVG/card_icon_4.svg';
import cardImg5 from '../../Images/SVG/card_icon_5.svg';
import cardImg6 from '../../Images/SVG/card_icon_6.svg';
import linePhoneImg from '../../Images/SVG/line_car_img.svg';
// import termCardImg1 from '../../Images/SVG/term_card_img_1.svg';
// import termCardImg2 from '../../Images/SVG/term_card_img_2.svg';
import whyImgsSecImg1 from '../../Images/SVG/why_imgs_sec_img_1.svg';
import whyImgsSecImg2 from '../../Images/SVG/why_imgs_sec_img_2.svg';
import whyImgsSecImg3 from '../../Images/SVG/why_imgs_sec_img_3.svg';
import Variants from '../../Animation/Animations';

export default function Why() {

    const {t, i18n} = useTranslation();

    // ====== cards-data ====== //

    const cardsData = [

        {
            id: 1,
            title: t('whyPageCardsTitle1'),
            active: true,
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
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // ====== term-cards-data ====== //

    // const termCardsData = [

    //     {
    //         id: 1,
    //         img: termCardImg1,
    //         title: t('termCardTitle1'),
    //         content: t('termCardDescription1')
    //     },

    //     {
    //         id: 2,
    //         img: termCardImg2,
    //         title: t('termCardTitle2'),
    //         content: t('termCardDescription2')
    //     },

    // ];

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

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
            className={`common_cont ${whyCSS.container}`}
        >

            <motion.div variants={Variants.toBottomVariants} className={whyCSS.title_cont}>

                <Title leftTitle={t('weWord')} rightTitle={t('offerWord')} svgType={'main'} />

                <p className={whyCSS.title_p}>{t('whyTitleSentence')}</p>

            </motion.div>

            <motion.div 
                variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
                viewport={{once: true , amount: 0.1}}
                className={whyCSS.cards_cont}
            >

                {cardsData.map( (card, idx) => (
                    <motion.div 
                        viewport={{once: true , amount: 0.2}}
                        variants={Variants.toBottomVariants} custom={idx}
                        className={`${cardBoxCSS.container} ${card.active ? cardBoxCSS.color_bg_box : ''}`} key={card.id} 
                    >
                        <Card data={card} />
                    </motion.div>
                ))}

                <motion.div 
                    variants={Variants.toRightVariants} 
                    viewport={{once: true , amount: 0.2}}
                    className={`${cardBoxCSS.container_last} ${whyCSS.link_box}`}
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

            <motion.div 
                variants={Variants.parentVariantsNoStagger} 
                viewport={{once: true , amount: 0.2}} 
                className={whyCSS.imgs_cont}
            >

                <AnimatePresence mode="sync">
                    {currentImages.map((img, idx) => <div className={whyCSS.img_card_cont} key={idx}>
                        <motion.img 
                            variants={imgsVariants} initial='hidden' animate='visible' exit={'exit'}
                            className={`${whyCSS[`img${idx+1}`]} ${whyCSS.img}`} id={`img${idx + 1}`}
                            style={idx === 1 ? {scale: 1} : {scale: 0.8}}
                            key={`${img}-${idx}`} loading='lazy' src={img} alt={img}
                        />
                    </div>)}
                </AnimatePresence>

            </motion.div>

            {/* <motion.div 
                variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
                viewport={{once: true , amount: 0.1}}
                className={whyCSS.term_options}
            >

                <motion.div variants={Variants.toTopVariants} className={whyCSS.term_title_cont}>

                    <h3>{t('termTitle')}</h3>

                    <p>{t('termTitleSentence')}</p>

                </motion.div>

                <div className={whyCSS.term_cards_cont}>

                    {termCardsData.map((card, idx) => (
                        <motion.div variants={Variants.toBottomVariants} custom={idx} key={card.id} className={whyCSS.term_card}>

                            <img style={i18n.language === 'ar' ? {transform: 'rotateY(180deg)'} : {}} loading='lazy' src={card.img} alt={card.title} />

                            <div className={whyCSS.term_card_content}>
                                <h3>{card.title}</h3>
                                <p>{card.content}</p>
                            </div>

                        </motion.div>
                    ))}

                </div>

            </motion.div> */}

            <motion.div 
                variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
                viewport={{once: true , amount: 0.1}}
                className={whyCSS.how_work}
            >

                <motion.div 
                    variants={Variants.toTopVariants} 
                    viewport={{once: true , amount: 0.2}} 
                    className={whyCSS.term_title_cont}
                >

                    <h3>{t('howWorkTitle')}</h3>

                    <p>{t('howWorkSentence')}</p>

                </motion.div>

                <div className={whyCSS.how_work_cont}>

                    <motion.div 
                        variants={Variants.toBottomVariants} 
                        viewport={{once: true , amount: 0.2}} 
                        className={whyCSS.work_left}
                    >

                        <img className={whyCSS.work_left_main_img} loading='lazy' src={phoneImg} alt="phoneImg" />
                        <img className={whyCSS.work_left_line_img} loading='lazy' src={linePhoneImg} alt="linePhoneImg" />

                    </motion.div>

                    <motion.div 
                        variants={Variants.toTopVariants}
                        viewport={{once: true , amount: 0.2}}
                        className={whyCSS.work_right}
                    >

                        <div style={i18n.language === 'en' ? {left: 14} : {right: 14}} className={whyCSS.line_dashed}></div>

                        {howWorkData.map(card => <div key={card.id} className={whyCSS.work_content_row}>

                            <span></span>
                            <p>{card.desc}</p>

                        </div>)}

                    </motion.div>

                </div>

            </motion.div>

        </motion.section>

    </React.Fragment>

}
