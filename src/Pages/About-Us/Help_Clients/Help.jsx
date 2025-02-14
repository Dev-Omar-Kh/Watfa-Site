import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../../Components/Title/Title';

import helpCSS from './help.module.css';

import helpClientsImg1 from '../../../Images/SVG/help_clients_img_1.svg';
import helpClientsImg2 from '../../../Images/SVG/help_clients_img_2.svg';
import helpClientsImg3 from '../../../Images/SVG/help_clients_img_3.svg';
import pinkStarImg from '../../../Images/SVG/pink_star_img.svg';
import { motion } from 'framer-motion';

export default function Help() {

    const {t} = useTranslation();

    // ====== cards-data ====== //

    const cardData = [

        {
            id: 1,
            img: helpClientsImg1,
            title: t('helpClientsCardTitle1'),
            desc: t('helpClientDescription1')
        },

        {
            id: 2,
            img: helpClientsImg2,
            title: t('helpClientsCardTitle2'),
            desc: t('helpClientDescription2')
        },

        {
            id: 3,
            img: helpClientsImg3,
            title: t('helpClientsCardTitle3'),
            desc: t('helpClientDescription3')
        },

    ];

    // ====== animation ====== //

    const repeatVariants = {

        hidden : {scale: 1},
        visible : {
            scale: 0.7,
            transition : {type : 'wheel' , duration : 2 , repeat : Infinity , repeatType : 'mirror'}
        }

    }

    return <React.Fragment>

        <section className={helpCSS.container}>

            <Title leftTitle={t('helpClientsTitle')} rightTitle={t('helpClientsTitleRight')} svgType={'sub'} />

            <div className={helpCSS.cards_cont}>

                {cardData.map(card => <div key={card.id} className={helpCSS.card}>

                    <div className={helpCSS.img_side}>

                        <img className={helpCSS.main_img} src={card.img} alt={card.title} />
                        <motion.img
                            variants={repeatVariants} initial='hidden' animate='visible'
                            className={helpCSS.star_img} src={pinkStarImg} alt="pinkStarImg" 
                        />

                    </div>

                    <div className={helpCSS.content_side}>

                        <h3>{card.title}</h3>

                        <p>{card.desc}</p>

                    </div>

                </div>)}

            </div>

        </section>

    </React.Fragment>

}
