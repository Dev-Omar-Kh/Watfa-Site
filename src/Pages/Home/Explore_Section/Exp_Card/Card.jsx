import React, { useEffect, useState } from 'react';

import cardCSS from './card.module.css';

export default function Card({contWidth, data}) {

    // ====== count-height-of-card ====== //

    const [cardWidth, setCardWidth] = useState(0);

    const updateCardWidth = (width, containerWidth) => {

        if (containerWidth) {
            if (width > 1060) {
                return (containerWidth / 4) - 15;
            } else if (width <= 1060 && width > 850) {
                return (containerWidth / 3) - (20 - (20 / 3));
            } else if (width <= 850) {
                return (containerWidth / 2) - 10;
            }
        }

        return 0;

    };

    useEffect(() => {

        const handleScreenResize = () => {

            const newWidth = window.innerWidth;
            setCardWidth(updateCardWidth(newWidth, contWidth));
            console.log('Card width updated:', updateCardWidth(newWidth, contWidth));

        };

        window.addEventListener('resize', handleScreenResize);

        setCardWidth(updateCardWidth(window.innerWidth, contWidth));

        return () => {
            window.removeEventListener('resize', handleScreenResize);
        };

    }, [contWidth]);

    return <React.Fragment>

        <div style={{width: cardWidth ,height: cardWidth}} className={cardCSS.container}>

            <img src={data.img} alt={'test'} />

            <div className={cardCSS.content_side}>
                <p>{data.title}</p>
            </div>

        </div>

    </React.Fragment>

}
