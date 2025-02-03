import React from 'react';

import exploreCSS from './explore.module.css';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import expImg1 from '../../../Images/SVG/exp_img_1.svg';
import expImg2 from '../../../Images/SVG/exp_img_2.svg';
import expImg3 from '../../../Images/SVG/exp_img_3.svg';
import expImg4 from '../../../Images/SVG/exp_img_4.svg';
import Card from './Exp_Card/Card';

export default function Explore() {

    const {t} = useTranslation();

    const expData = [

        {id: 1, title: t('fashionWord'), img: expImg1},
        {id: 2, title: t('beautyWord'), img: expImg2},
        {id: 3, title: t('restaurantWord'), img: expImg3},
        {id: 4, title: t('supermarketWord'), img: expImg4},

    ];

    return <React.Fragment>

        <section className={`common_cont ${exploreCSS.container}`}>

            <Title leftTitle={t('exploreWord')} rightTitle={t('watfaWord')} svgType={'sub'} />

            <div className={exploreCSS.cards_cont}>

                {expData.map(card => <Card key={card.id} data={card} />)}

            </div>

        </section>

    </React.Fragment>

}
