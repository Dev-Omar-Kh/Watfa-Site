import React from 'react';
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

export default function Explore() {

    const {t} = useTranslation();

    const expData = [

        {id: 1, title: t('fashionWord'), img: expImg1},
        {id: 2, title: t('beautyWord'), img: expImg2},
        {id: 3, title: t('restaurantWord'), img: expImg3},
        {id: 4, title: t('supermarketWord'), img: expImg4},
        {id: 5, title: t('clothesWord'), img: expImg5},
        {id: 6, title: t('skincareWord'), img: expImg6},
        {id: 7, title: t('bagsWord'), img: expImg7},
        {id: 8, title: t('accessoriesWord'), img: expImg8},

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
