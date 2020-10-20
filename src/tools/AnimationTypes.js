export const headlineAnimation = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      damping: 30,
      mass: 2,
    },
  },
};

export const paragraphAnimation = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      damping: 100,
      mass: 4,
    },
  },
};

export const welcomeSectionAnimation = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: -35,
    transition: {
      delay: 0.15,
      type: "spring",
      damping: 30,
      mass: 2,
    },
  },
};

export const hoverAnimation = {
  scale: 1.1,
  letterSpacing: "2px",
};
export const logoHoverAnimation = {
  scale: 1.4,
};
export const clickAnimation = {
  scale: 0.9,
};
export const revealAnimation = {
  y: 0,
  opacity: 1,
};
export const exitAnimation = {
  y: 240,
  opacity: 0,
};

export const menuItemEnterAnimation = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
    },
  }),
  hidden: {
    opacity: 0,
    y: "-2rem",
  },
};
