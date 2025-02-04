import { motion } from "framer-motion";

const ReusableMotion = ({
  children,
  initial = { opacity: 0, y: 20 }, // Default initial animation
  whileInView = { opacity: 1, y: 0 }, // Default whileInView animation
  viewport = { once: false }, // Default viewport settings
  transition = { duration: 0.5 }, // Default transition
  className = "", // Custom class names
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ReusableMotion;