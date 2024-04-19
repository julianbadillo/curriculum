
const routeVariants = {
    initial: {
        opacity: 0,
        y: "50px",
    },
    final: {
        opacity: 1,
        y: "0px",
        transition: {
            type: "spring",
            mass: 0.4,
            duration: 0.6,
        },
    },
};

const childVariants = {
    initial: {
        y: '100vh'
    },
    final: {
        y: '0vh',
        transition: {
            type: "spring",
            mass: 0.4,
        },
    },
};

export { routeVariants, childVariants };