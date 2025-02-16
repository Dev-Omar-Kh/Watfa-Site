import React from 'react';

import cardCSS from './card.module.css';

export default function Card({data}) {

    return <React.Fragment>

        {/* <div className={`${cardCSS.container} ${data.active ? cardCSS.color_bg_box : ''}`}> */}

            <img loading='lazy' src={data.img} alt={data.title} />

            <div className={cardCSS.content_cont}>

                <h3>{data.title}</h3>

                <p>{data.description}</p>

            </div>

        {/* </div> */}

    </React.Fragment>

}
