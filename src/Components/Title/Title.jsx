import React, { useEffect, useRef, useState } from 'react';

import titleCSS from './title.module.css';
import { useTranslation } from 'react-i18next';

export default function Title({leftTitle, rightTitle}) {

    const {i18n} = useTranslation();

    // ====== count-svg-width ====== //

    const svgRef = useRef(null);
    const [svgWidth, setSvgWidth] = useState(0);

    useEffect(() => {

        const handleResize = () => {
            setSvgWidth(svgRef.current.clientWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);

    }, [i18n.language]);

    return <React.Fragment>

        <div className={titleCSS.container}>

            <p className={titleCSS.left_side_title}>{leftTitle}</p>
            <p className={titleCSS.right_side_title}>

                &nbsp;{rightTitle}

                <svg 
                    ref={svgRef}
                    width="100%" height="20" 
                    style={i18n.language === 'en' ? 
                        {left: '10px', transform: 'rotate(-6.33deg)', overflow: 'visible'} : 
                        {right: '0px', transform: 'rotate(6.33deg)', overflow: 'visible'}
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path 
                        d={`M0,10 Q${svgWidth / 2},-5 ${svgWidth},10`}
                        stroke="var(--pink-color)" 
                        strokeWidth="8" strokeLinecap="round" fill="transparent"
                    />
                </svg>

            </p>

        </div>

    </React.Fragment>

}
