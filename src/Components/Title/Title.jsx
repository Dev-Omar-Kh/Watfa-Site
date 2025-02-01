import React, { useEffect, useRef, useState } from 'react';

import titleCSS from './title.module.css';
import { useTranslation } from 'react-i18next';

export default function Title({leftTitle, rightTitle, svgType}) {

    const {i18n} = useTranslation();

    // ====== main-svg ====== //

    const svgRefMain = useRef(null);
    const [svgWidthMain, setSvgWidthMain] = useState(0);

    // ====== sub-svg ====== //

    const svgRefSub = useRef(null);
    const [svgWidthSub, setSvgWidthSub] = useState(0);

    // ====== resize-svg ====== //

    useEffect(() => {

        const handleResize = () => {

            if (svgType === 'main') {
                setSvgWidthMain(svgRefMain.current?.clientWidth || 0);
            } else {
                setSvgWidthSub(svgRefSub.current?.clientWidth || 0);
            }

        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);

    }, [i18n.language, svgType]);

    // ====== count-d-for-sub-svg ====== //

    const originalWidth = 179;
    const scaleFactor = svgWidthSub / originalWidth;

    const dynamicD = `M${176.23 * scaleFactor} ${3.48 * scaleFactor} C${-1.86 * scaleFactor} ${-1.23 * scaleFactor} ${-14.29 * scaleFactor} ${13.17 * scaleFactor} ${14.16 * scaleFactor} ${40.28 * scaleFactor}`;

    return <React.Fragment>

        <div className={titleCSS.container}>

            <p className={titleCSS.left_side_title}>{leftTitle}</p>
            <p className={titleCSS.right_side_title}>

                &nbsp;{rightTitle}

                {svgType === 'main' ? 
                    <svg 
                        ref={svgRefMain}
                        width="100%" height="20" 
                        style={i18n.language === 'en' ? 
                            {left: '10px', transform: 'rotate(-6.33deg)', bottom: '-25px'} : 
                            {right: '0px', transform: 'rotate(6.33deg)', bottom: '-25px'}
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path 
                            d={`M0,10 Q${svgWidthMain / 2},-5 ${svgWidthMain},10`}
                            stroke="var(--pink-color)" 
                            strokeWidth="6" strokeLinecap="round" fill="transparent"
                        />
                    </svg>
                    :
                    <svg 
                        ref={svgRefSub}
                        width="100%" height="43" 
                        style={i18n.language === 'en' ? 
                            {left: '10px', bottom: '-40px'} : 
                            {right: '10px', bottom: '-40px', transform: 'rotateY(180deg)'}
                        }
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path 
                            d={dynamicD}
                            stroke="#E072C1" strokeWidth="4" strokeMiterlimit="3.8637" strokeLinecap="round"
                        />
                    </svg>
                }

            </p>

        </div>

    </React.Fragment>

}
