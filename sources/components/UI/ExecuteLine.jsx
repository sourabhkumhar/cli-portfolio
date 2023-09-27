import React from "react";
import { motion } from "framer-motion";

const ExecuteLine = ({ delay = 0, children, text, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: delay, type: "tween", duration: 0 }}
      {...props}
    >
      {text || children}
    </motion.div>
  );
};

export default ExecuteLine;
