import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../../Components/Title/Title';

import helpCSS from './help.module.css';

import helpClientsImg1 from '../../../Images/SVG/help_clients_img_1.svg';
import helpClientsImg2 from '../../../Images/SVG/help_clients_img_2.svg';
import helpClientsImg3 from '../../../Images/SVG/help_clients_img_3.svg';
import pinkStarImg from '../../../Images/SVG/pink_star_img.svg';
import { motion } from 'framer-motion';
import Variants from '../../../Animation/Animations';

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

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
            viewport={{once: true , amount: 0.1}}
            className={helpCSS.container}
        >

            <motion.div variants={Variants.toTopVariants} viewport={{once: true , amount: 0.2}}>
                <Title leftTitle={t('helpClientsTitle')} rightTitle={t('helpClientsTitleRight')} svgType={'sub'} />
            </motion.div>

            <div className={helpCSS.cards_cont}>

                {cardData.map((card, idx) => (
                    <motion.div 
                        variants={(idx+1) % 2 === 0 ? Variants.toLeftVariants : Variants.toRightVariants} 
                        viewport={{once: true , amount: 0.2}}
                        custom={idx} key={card.id} className={helpCSS.card}
                    >

                        <div className={helpCSS.img_side}>

                            <img loading='lazy' className={helpCSS.main_img} src={card.img} alt={card.title} />
                            <motion.img
                                variants={repeatVariants} initial='hidden' animate='visible'
                                className={helpCSS.star_img} src={pinkStarImg} alt="pinkStarImg" 
                            />

                        </div>

                        <div className={helpCSS.content_side}>

                            <h3>{card.title}</h3>

                            <p>{card.desc}</p>

                        </div>

                    </motion.div>
                ))}

            </div>

        </motion.section>

    </React.Fragment>

}
