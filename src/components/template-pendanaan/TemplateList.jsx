import { TemplateItem } from ".";
import { AppBar } from "components/common";

const TemplateList = ({ templates }) => {
  return (
    <div>
      <AppBar title="Template List" isBack={true} />
      <h1>Temukan template yang paling cocok untuk anda</h1>
      {templates.map((template, index) => (
        <TemplateItem key={index} item={template} />
      ))}
    </div>
  );
};

export default TemplateList;
