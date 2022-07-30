import { TemplateItem } from ".";

const TemplateList = ({ templates }) => {
  return (
    <div>
      {templates.map((template, index) => (
        <TemplateItem key={index} item={template} />
      ))}
    </div>
  );
};

export default TemplateList;
