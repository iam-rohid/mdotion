import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

type Props = {
  doc: string;
};
const DocumentPreview = (props: Props) => {
  const { doc } = props;
  return (
    <div className="document-preview">
      <ReactMarkdown className="preview-wrapper markdown-body">
        {doc}
      </ReactMarkdown>
    </div>
  );
};

export default DocumentPreview;
