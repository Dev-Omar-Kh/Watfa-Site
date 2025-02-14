import React, { useEffect, useRef, useState } from 'react';
import Title from '../../../Components/Title/Title';
import { useTranslation } from 'react-i18next';

import mainCSS from './main.module.css';

import aboutImg from '../../../Images/SVG/about_main_img.svg';

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

        <section className={mainCSS.container}>

            <div className={mainCSS.content_side}>

                <div className={mainCSS.row_view}>
                    <Title leftTitle={t('aboutWord')} rightTitle={t('watfaWord')} svgType={'sub'} />
                </div>

                <p className={mainCSS.content_p}>{t('aboutWatfaSentence')}</p>

            </div>

            <div ref={imgSideRef} style={{height: imgSideHeight}} className={mainCSS.img_side}>

                <div className={mainCSS.bg_circle}></div>

                <img className={mainCSS.main_img} src={aboutImg} alt="aboutImg" />

            </div>

            <div className={mainCSS.column_view}>
                <Title leftTitle={t('aboutWord')} rightTitle={t('watfaWord')} svgType={'sub'} />
            </div>

        </section>

    </React.Fragment>

}
