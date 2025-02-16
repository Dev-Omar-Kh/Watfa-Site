import React from 'react';

import aboutCSS from './about.module.css';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import aboutImg from '../../../Images/SVG/about_img.svg';
import star1 from '../../../Images/SVG/about_sec_star_1.svg';
import { motion } from 'framer-motion';
import Variants from '../../../Animation/Animations';

export default function About() {

    const {t} = useTranslation();

    // ====== animation ====== //

    const starVariants = [
        {
            hidden: { scale: 1 },
            visible: {
                scale: [1, 1.05, 1],
                x: [0, 10, -5, 5, -5, 0],
                y: [0, -5, 5, -5, 5, 0],
                transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }
        },

        {
            hidden: { scale: 1 },
            visible: {
                scale: [1, 0.98, 1],
                x: [0, -8, 4, -4, 3, 0],
                y: [0, 4, -4, 6, -3, 0],
                transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }
        },

        {
            hidden: { scale: 1 },
            visible: {
                scale: [1, 1.02, 1],
                x: [0, 6, -3, 3, -2, 0],
                y: [0, -3, 3, -4, 2, 0],
                transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }
        }
    ];

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
            viewport={{once: true , amount: 0.1}}
            className={`common_cont ${aboutCSS.container}`}
        >

            <motion.div variants={Variants.toBottomVariants} viewport={{once: true , amount: 0.2}} className={aboutCSS.column_view}>
                <Title leftTitle={t('aboutWord')} rightTitle={t('watfaWord')} svgType={'sub'} />
            </motion.div>

            <motion.div variants={Variants.toTopVariants} className={aboutCSS.img_side}>

                <div className={aboutCSS.img_cont}>

                    <div className={aboutCSS.img_bg}>
                        <img className={aboutCSS.main_img} loading='lazy' src={aboutImg} alt="about" />
                    </div>

                    {[1, 2, 3].map(star => 
                        <motion.img 
                            key={star} 
                            loading='lazy' src={star1} alt={star} 
                            className={`${aboutCSS.stars} ${aboutCSS[`star_${star}`]}`} 
                            variants={starVariants[star-1]} initial='hidden' animate='visible'
                        />
                    )}

                </div>

            </motion.div>

            <motion.div variants={Variants.parentVariants} className={aboutCSS.content_side}>

                <motion.div variants={Variants.toBottomVariants} className={aboutCSS.row_view}>
                    <Title leftTitle={t('aboutWord')} rightTitle={t('watfaWord')} svgType={'sub'} />
                </motion.div>

                <motion.p variants={Variants.toRightVariants} className={aboutCSS.content_p}>{t('aboutWatfaParagraph')}</motion.p>

            </motion.div>

        </motion.section>

    </React.Fragment>

}
