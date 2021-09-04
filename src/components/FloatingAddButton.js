import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//button untuk menambahkan pendanaan
const FloatingAddButton = () => {
  return (
    <Link to="/create">
      <motion.button
        className="p-0 fixed bottom-10 right-10 w-16 h-16 bg-green-600 rounded-full"
        //efek ketika cursor mouse berada diatas(berlaku hanya di desktop)
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        //efek ketika di tekan
        whileTap={{ scale: 0.8 }}
      >
        <svg
          viewBox="0 0 20 20"
          enable-background="new 0 0 20 20"
          className="w-6 h-6 inline-block"
        >
          <path
            fill="white"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
          />
        </svg>
      </motion.button>
    </Link>
  );
};

export default FloatingAddButton;
