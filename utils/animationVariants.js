export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}
