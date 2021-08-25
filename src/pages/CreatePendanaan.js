import AppBarWithBackButton from "../components/AppBarWithBackButton";
import Form from "./createPendanaan/Form";

const CreatePendanaan = () => {
  return (
    <div>
      <AppBarWithBackButton />
      <div className="lg:w-2/4 mx-auto w-full">
        <Form />
      </div>
    </div>
  );
};

export default CreatePendanaan;
