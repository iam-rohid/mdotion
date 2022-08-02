import useCodeMirror, { themeComp } from "@/hooks/useCodemirror";
import { useEffect } from "react";
import { EditorView } from "codemirror";

const fixedHeightEditor = EditorView.baseTheme({
  "&": {
    height: "100%",
  },
  ".cm-content": {
    paddingTop: "3rem",
    paddingBottom: "50vh",
    maxWidth: "512px",
    marginInline: "auto",
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  },
  "& .cm-gutters": {
    display: "none",
  },
});

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
