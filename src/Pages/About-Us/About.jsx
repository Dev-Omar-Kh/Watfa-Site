import React from 'react';
import Title from '../../Components/Title/Title';

import aboutCSS from './about.module.css';
import { useTranslation } from 'react-i18next';
import Main from './Main/Main';
import Help from './Help_Clients/Help';
import { motion } from 'framer-motion';
import Variants from '../../Animation/Animations';

export default function About() {

    const {t} = useTranslation();

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
            viewport={{once: true , amount: 0.1}} 
            className={`common_cont ${aboutCSS.container}`}
        >

            <motion.div variants={Variants.toBottomVariants} viewport={{once: true , amount: 0.2}} className={aboutCSS.title_cont}>

                <Title leftTitle={t('aboutTitleWord')} rightTitle={t('usWord')} svgType={'main'} />

                <p className={aboutCSS.title_p}>{t('aboutSentence')}</p>

            </motion.div>

            <Main />

            <Help />

        </motion.section>

    </React.Fragment>

}
