import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.97 }}  // Slight above + smaller
      animate={{ opacity: 1, y: 0, scale: 1 }}       // Soft fall + grow
      exit={{ opacity: 0, y: -30, scale: 0.98 }}      // Fade up on exit
      transition={{
        duration: 0.8,
        ease: "easeOut",
        opacity: { duration: 0.6 },
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
