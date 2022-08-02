import { CompletionContext, snippetCompletion } from "@codemirror/autocomplete";

export const markdownCompletions = (context: CompletionContext) => {
  console.log(context);
  let word = context.matchBefore(/\w*/);
  if (!word) return null;
  if (word.from == word.to && !context.explicit) return null;
  return {
    from: word.from,
    options: [
      snippetCompletion("# ${Heading 1}", {
        label: "Heading 1",
      }),
      snippetCompletion("## ${Heading 2}", {
        label: "Heading 2",
      }),
      snippetCompletion("### ${Heading 3}", {
        label: "Heading 3",
      }),
      snippetCompletion("#### ${Heading 4}", {
        label: "Heading 4",
      }),
      snippetCompletion("##### ${Heading 5}", {
        label: "Heading 5",
      }),
      snippetCompletion("###### ${Heading 6}", {
        label: "Heading 6",
      }),
      snippetCompletion("** ${Bold Text} **", {
        label: "Bold",
      }),
      snippetCompletion("![${Alt Text}](${Image Url})", {
        label: "Image",
      }),
      snippetCompletion("[${Link Text}](${Url})", {
        label: "Link",
      }),
    ],
  };
};
