import { motion } from "framer-motion";

const Page = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, type: "tween", duration: 0 }}
      >
        initializing sourabhkumhar data...
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, type: "tween", duration: 0 }}
      >
        sourabhkumhar data is ready...
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.5, type: "tween", duration: 0 }}
        className="mt-3"
      >
        Some Command example
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, type: "tween", duration: 0 }}
      ></motion.div>
    </div>
  );
};

export default Page;
