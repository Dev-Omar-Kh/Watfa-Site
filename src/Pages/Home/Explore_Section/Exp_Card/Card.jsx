import React, { useEffect, useRef, useState } from 'react';

import cardCSS from './card.module.css';

export default function Card({data}) {

    // ====== count-height-of-card ====== //

    const [cardHeight, setCardHeight] = useState('0');
    const cardRef = useRef(null);

    useEffect(() => {

        const handleCardHeight = () => {

            if (cardRef.current) {
                setCardHeight(cardRef.current.offsetWidth);
            }

        }

        handleCardHeight();

        window.addEventListener('resize', handleCardHeight);

        return () => {

            window.removeEventListener('resize', handleCardHeight);

        }

    } , []);

    return <React.Fragment>

        <div ref={cardRef} style={{height: cardHeight}} className={cardCSS.container}>

            <img src={data.img} alt={'test'} />

            <div className={cardCSS.content_side}>
                <p>{data.title}</p>
            </div>

        </div>

    </React.Fragment>

}
