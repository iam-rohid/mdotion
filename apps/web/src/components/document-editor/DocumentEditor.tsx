import useCodeMirror from "@/hooks/useCodemirror";
import { useEffect } from "react";

type Props = {
  initValue: string;
  onChange: (value: string) => void;
};

const DocumentEditor = (props: Props) => {
  const { initValue, onChange } = props;
  const { editorRef, editorView } = useCodeMirror({
    initValue,
    onChange,
  });

  useEffect(() => {
    if (!editorView) return;
  }, [editorView]);

  return <div className="document-editor" ref={editorRef} />;
};

export default DocumentEditor;
