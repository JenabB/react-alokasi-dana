import AppBarWithBackButton from "../components/AppBarWithBackButton";
import FloatingResetButton from "../components/FloatinResetButton";
import Form from "./createPendanaan/Form";
import Header from "./createPendanaan/Header";

const CreatePendanaan = () => {
  return (
    <div>
      <AppBarWithBackButton />
      <div className="lg:w-2/4 mx-auto w-full">
        <Header />
        <Form />
      </div>
      <FloatingResetButton />
    </div>
  );
};

export default CreatePendanaan;
