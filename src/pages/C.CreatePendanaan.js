//components

import FloatingResetButton from "components/FloatinResetButton";

import Header from "components/createPendanaan/C1.Header";
import Form from "components/createPendanaan/C2.Form";
import { motion } from "framer-motion";

import Helmet from "react-helmet";
import AppBar from "components/common/AppBar";

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

        <Form />
      </div>
      <FloatingResetButton />
    </motion.div>
  );
};

export default CreatePendanaan;
