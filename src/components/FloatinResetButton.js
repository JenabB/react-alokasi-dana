import { motion } from "framer-motion";

const FloatingResetButton = () => {
  return (
    <motion.button
      className="p-0 fixed bottom-10 right-10 w-16 h-16 bg-green-600 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
      whileTap={{
        rotate: 360,
        transition: { duration: 2 },
      }}
      onClick={() => window.location.reload()}
    >
      <span class="material-icons md-24 text-white">restart_alt</span>
    </motion.button>
  );
};

export default FloatingResetButton;
