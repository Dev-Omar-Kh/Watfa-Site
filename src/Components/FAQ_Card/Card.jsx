import React, { useState } from 'react';

import cardCSS from './card.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';

export default function Card({data}) {

    const [displayAnswer, setDisplayAnswer] = useState(false);

    const handleArrowClick = () => {
        setDisplayAnswer(prev => !prev);
    }

    // ====== animation ====== //

    const listAnimation = {

        hidden: {opacity: 0, height: '0px'},
        visible: {opacity: 1, height: 'fit-content' , transition: {duration: 0.3}},
        exit: {opacity: 0, height: '0px' , transition: {duration: 0.3}},

    }

    return <React.Fragment>

        <div className={`${cardCSS.card} ${displayAnswer ? cardCSS.card_active : ''}`}>

            <div className={cardCSS.content_side}>

                <h3>{data.question}</h3>

                <AnimatePresence>
                    { displayAnswer && 
                        <motion.p variants={listAnimation} initial="hidden" animate="visible" exit={'exit'}>
                            {data.answer}
                        </motion.p>
                    }
                </AnimatePresence>

            </div>

            <div onClick={handleArrowClick} className={`${cardCSS.arrow_side} ${displayAnswer ? cardCSS.arrow_side_active : ''}`}>
                <IoIosArrowDown />
            </div>

        </div>

    </React.Fragment>

}
