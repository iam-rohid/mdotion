type Props = {
  doc: string;
};
const DocumentPreview = (props: Props) => {
  const { doc } = props;
  return <div className="document-preview">{doc}</div>;
};

export default DocumentPreview;
