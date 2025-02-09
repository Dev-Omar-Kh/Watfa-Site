import React from 'react';

import subscribeCSS from './subscribe.module.css';
import { RiTelegram2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

export default function Subscribe() {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <div className={`common_cont ${subscribeCSS.container}`}>

            <h3>{t('subscribeWord')}</h3>

            <p>{t('subscribeSentence')}</p>

            <form className={subscribeCSS.form} action="">
                <label htmlFor=""><RiTelegram2Line /></label>
                <input 
                    type="text" id="" 
                    placeholder={t('subscribeLabel')} 
                    style={i18n.language === 'en' ? {paddingRight: 10} : {paddingLeft: 10}}
                />
                <button type="button">{t('subscribeWord')}</button>
            </form>

        </div>

    </React.Fragment>

}
