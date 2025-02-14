import React from 'react';
import Title from '../../Components/Title/Title';

import aboutCSS from './about.module.css';
import { useTranslation } from 'react-i18next';
import Main from './Main/Main';
import Help from './Help_Clients/Help';

export default function About() {

    const {t} = useTranslation();

    return <React.Fragment>

        <section className={`common_cont ${aboutCSS.container}`}>

            <div className={aboutCSS.title_cont}>

                <Title leftTitle={t('aboutTitleWord')} rightTitle={t('usWord')} svgType={'main'} />

                <p className={aboutCSS.title_p}>{t('aboutSentence')}</p>

            </div>

            <Main />

            <Help />

        </section>

    </React.Fragment>

}
