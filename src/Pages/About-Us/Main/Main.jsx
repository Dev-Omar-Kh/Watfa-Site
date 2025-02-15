import React, { useEffect, useRef, useState } from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import mainCSS from './main.module.css';

import aboutImg from '../../../Images/SVG/about_main_img.svg';
import { motion } from 'framer-motion';
import Variants from './../../../Animation/Animations';

export default function Main() {

    const {t} = useTranslation();

    // ====== count-height-of-img-side ====== //

    const imgSideRef = useRef(null);
    const [imgSideHeight, setImgSideHeight] = useState(0);

    useEffect(() => {

        const handleSize = () => {

            if (imgSideRef.current) {
                setImgSideHeight(imgSideRef.current.offsetWidth);
            }

        }

        handleSize();

        window.addEventListener('resize', handleSize);

        return () => {

            window.removeEventListener('resize', handleSize);

        }

    } , []);

    console.log(imgSideHeight);

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariantsNoStagger} initial='hidden' whileInView={'visible'} 
            viewport={{once: true , amount: 0.1}}
            className={mainCSS.container}
        >

            <motion.div variants={Variants.parentVariants} className={mainCSS.content_side}>

                <motion.div variants={Variants.toTopVariants} viewport={{once: true , amount: 0.2}} className={mainCSS.row_view}>
                    <Title leftTitle={t('aboutWord')} rightTitle={t('watfaWord')} svgType={'sub'} />
                </motion.div>

                <motion.p 
                    variants={Variants.toRightVariants} 
                    viewport={{once: true , amount: 0.2}} 
                    className={mainCSS.content_p}
                >{t('aboutWatfaSentence')}</motion.p>

            </motion.div>

            <motion.div 
                variants={Variants.toLeftVariants} 
                viewport={{once: true , amount: 0.2}}
                ref={imgSideRef} style={{height: imgSideHeight}} 
                className={mainCSS.img_side}
            >

                <div className={mainCSS.bg_circle}></div>

                <img className={mainCSS.main_img} src={aboutImg} alt="aboutImg" />

            </motion.div>

            <motion.div variants={Variants.toTopVariants} viewport={{once: true , amount: 0.2}} className={mainCSS.column_view}>
                <Title leftTitle={t('aboutWord')} rightTitle={t('watfaWord')} svgType={'sub'} />
            </motion.div>

        </motion.section>

    </React.Fragment>

}
