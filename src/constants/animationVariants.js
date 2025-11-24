export const itemVariants = {
  hidden: { opacity: 0, x: -50 }, // Slide in from the left
  visible: { opacity: 1, x: 0 },
};
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, // Delay between each child animation
    },
  },
};
