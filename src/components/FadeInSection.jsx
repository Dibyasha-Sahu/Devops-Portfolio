import { motion } from "framer-motion";

function FadeInSection({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.section>
  );
}

export default FadeInSection;