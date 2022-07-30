import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { TemplateList } from "components/template-pendanaan";

const Template = () => {
  const { templatePendanaan } = useContext(GlobalContext);

  return (
    <div>
      <TemplateList templates={templatePendanaan} />
    </div>
  );
};

export default Template;
