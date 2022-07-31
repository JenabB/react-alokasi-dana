import { TemplateItem } from ".";

const TemplateList = ({ templates }) => {
  return (
    <div>
      <h1>Temukan template yang paling cocok untuk anda</h1>
      {templates.map((template, index) => (
        <TemplateItem key={index} item={template} />
      ))}
    </div>
  );
};

export default TemplateList;
