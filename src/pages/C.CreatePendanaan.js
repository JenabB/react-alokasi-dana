//components
import AppBarWithBackButton from "components/AppBarWithBackButton";
import FloatingResetButton from "components/FloatinResetButton";

import Header from "components/createPendanaan/C1.Header";
import Form from "components/createPendanaan/C2.Form";

import Helmet from "react-helmet";

const CreatePendanaan = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buat Pendanaan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AppBarWithBackButton title="Buat Pendanaan" />

      <div className="lg:w-2/4 mx-auto w-full">
        <Header />
        <Form />
      </div>
      <FloatingResetButton />
    </div>
  );
};

export default CreatePendanaan;
