import FloatingResetButton from "components/FloatinResetButton";
import { Link } from "react-router-dom";
import { Header } from "components/createPendanaan";
import { CreatePendanaanForm } from "components/form";
import { motion } from "framer-motion";

import Helmet from "react-helmet";
import { AppBar } from "components/common";

const CreatePendanaan = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buat Pendanaan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AppBar title="buat Pendanaan" />

      <div className="lg:w-2/4 mx-auto w-full  pb-20">
        <Header />

        <div className="m-10">
          <button className=" text-primary font-bold">
            <Link to="/template-pendanaan">Lebih cepat dengan Template</Link>
          </button>
        </div>

        <CreatePendanaanForm />
      </div>
      <FloatingResetButton />
    </motion.div>
  );
};

export default CreatePendanaan;
