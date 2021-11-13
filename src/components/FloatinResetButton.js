import { motion } from "framer-motion";

//buttton untuk melakukan reset pada create pendanaan
const FloatingResetButton = () => {
  return (
    <motion.button
      className="p-0 fixed bottom-10 right-10 w-16 h-16 bg-primary rounded-full"
      animate={{ rotate: 360 }} //animasi memutar 360 derajat
      transition={{ duration: 2 }}
      whileTap={{
        animate: { rotate: 360 },
        transition: { duration: 4 },
      }}
      onClick={() => window.location.reload()} //melakukan reload
    >
      <span class="material-icons md-24 text-white">restart_alt</span>
    </motion.button>
  );
};

export default FloatingResetButton;
