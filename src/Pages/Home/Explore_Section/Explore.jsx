import React, { useEffect, useRef, useState } from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';
import Card from './Exp_Card/Card';

import expImg1 from '../../../Images/SVG/exp_img_1.svg';
import expImg2 from '../../../Images/SVG/exp_img_2.svg';
import expImg3 from '../../../Images/SVG/exp_img_3.svg';
import expImg4 from '../../../Images/SVG/exp_img_4.svg';
import expImg5 from '../../../Images/SVG/exp_img_5.svg';
import expImg6 from '../../../Images/SVG/exp_img_6.svg';
import expImg7 from '../../../Images/SVG/exp_img_7.svg';
import expImg8 from '../../../Images/SVG/exp_img_8.svg';

import exploreCSS from './explore.module.css';
import { motion } from 'framer-motion';
import Variants from '../../../Animation/Animations';

export default function Explore() {

    const {t, i18n} = useTranslation();

    const expData = [
        { id: 1, title: t("fashionWord"), img: expImg1 },
        { id: 2, title: t("beautyWord"), img: expImg2 },
        { id: 3, title: t("restaurantWord"), img: expImg3 },
        { id: 4, title: t("supermarketWord"), img: expImg4 },
        { id: 5, title: t("clothesWord"), img: expImg5 },
        { id: 6, title: t("skincareWord"), img: expImg6 },
        { id: 7, title: t("bagsWord"), img: expImg7 },
        { id: 8, title: t("accessoriesWord"), img: expImg8 },
    ]

    // ====== count-cards-cont-width ====== //

    const containerRef = useRef(null);
    const [contWidth, setContWidth] = useState(0);

    useEffect(() => {

        const handleSize = () => {

            if (containerRef.current) {
                setContWidth(containerRef.current.offsetWidth);
            }

        }

        handleSize();

        window.addEventListener('resize', handleSize);

        return () => {

            window.removeEventListener('resize', handleSize);

        }

    } , []);

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
            viewport={{once: true , amount: 0.1}}
            className={`common_cont ${exploreCSS.container}`}
        >

            <motion.div variants={Variants.toBottomVariants} viewport={{once: true , amount: 0.2}}>
                <Title leftTitle={t('exploreWord')} rightTitle={t('watfaWord')} svgType={'sub'} />
            </motion.div>

            <div dir={i18n.language === 'ar' ? 'ltr' : 'ltr'} ref={containerRef} className={exploreCSS.cards_cont}>

                <div className={exploreCSS.scroll_cont}>

                    <div className={exploreCSS.cards_scroll}>

                        {expData.map(card => <div key={card.id}>
                            <Card contWidth={contWidth} data={card} />
                        </div>)}

                        {expData.map(card => <div key={card.id}>
                            <Card contWidth={contWidth} data={card} />
                        </div>)}

                    </div>

                </div>

            </div>

        </motion.section>

    </React.Fragment>

}
