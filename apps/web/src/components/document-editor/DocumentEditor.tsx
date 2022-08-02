import useCodeMirror, { themeComp } from "@/hooks/useCodemirror";
import { useEffect } from "react";
import { EditorView } from "codemirror";

const fixedHeightEditor = EditorView.baseTheme({});

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
    editorView.dispatch({
      effects: themeComp.reconfigure(fixedHeightEditor),
    });
  }, [editorView]);

  return <div className="document-editor" ref={editorRef} />;
};

export default DocumentEditor;
