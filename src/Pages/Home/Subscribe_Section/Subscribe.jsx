import React from 'react';

import subscribeCSS from './subscribe.module.css';
import { RiTelegram2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Variants from '../../../Animation/Animations';

export default function Subscribe() {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <motion.section 
            variants={Variants.parentVariants} initial='hidden' whileInView={'visible'}
            viewport={{once: true , amount: 0.1}}
            className={`common_cont ${subscribeCSS.container}`}
        >

            <motion.h3 variants={Variants.toTopVariants} viewport={{once: true , amount: 0.2}}>{t('subscribeWord')}</motion.h3>

            <motion.p variants={Variants.toLeftVariants} viewport={{once: true , amount: 0.2}}>{t('subscribeSentence')}</motion.p>

            <motion.form variants={Variants.scaleOutVariants} viewport={{once: true , amount: 0.2}} className={subscribeCSS.form}>
                <label htmlFor=""><RiTelegram2Line /></label>
                <input 
                    type="text" id="" 
                    placeholder={t('subscribeLabel')} 
                    style={i18n.language === 'en' ? {paddingRight: 10} : {paddingLeft: 10}}
                />
                <button type="button">{t('subscribeWord')}</button>
            </motion.form>

        </motion.section>

    </React.Fragment>

}
