import React from 'react';

import cardCSS from './card.module.css';

export default function Card({data}) {

    return <React.Fragment>

        <div className={`${cardCSS.container} ${data.active ? cardCSS.color_bg_box : ''}`}>

            {data.svg}

            <div className={cardCSS.content_cont}>

                <h3>{data.title}</h3>

                <p>{data.description}</p>

            </div>

        </div>

    </React.Fragment>

}
