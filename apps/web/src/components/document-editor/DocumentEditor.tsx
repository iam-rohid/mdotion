import useCodeMirror, { languageComp } from "@/hooks/useCodemirror";
import { useEffect } from "react";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { markdownCompletions } from "@/utils/completions";

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
    editorView.focus();
    editorView.dispatch({
      effects: languageComp.reconfigure([
        markdown(),
        markdownLanguage.data.of({
          autocomplete: markdownCompletions,
        }),
      ]),
    });
  }, [editorView]);

  return <div className="document-editor" ref={editorRef} />;
};

export default DocumentEditor;
