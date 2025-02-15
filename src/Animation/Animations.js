const Variants = {

    parentVariantsNoStagger: {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.3}}
    },

    parentVariants: {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.3, staggerChildren : 0.3, delayChildren: 0.2}}
    },

    parentVariantsDelay: {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.3, staggerChildren : 0.3, delayChildren: 0.2}}
    },

    toTopVariants: {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.3}}
    },

    toBottomVariants: {
        hidden: {opacity: 0, y: -50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.3}}
    },

    toLeftVariants: {
        hidden: {opacity: 0, x: 50},
        visible: {opacity: 1, x: 0, transition: {duration: 0.3}}
    },

    toRightVariants: {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0, transition: {duration: 0.3}}
    },

    scaleOutVariants: {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.3}}
    },

};

export default Variants;