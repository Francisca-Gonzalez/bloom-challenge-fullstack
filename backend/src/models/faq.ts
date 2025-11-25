export type FAQAnswerPart =
  | { type: "text"; value: string }
  | { type: "link"; label: string; url: string };

export type FAQ = {
  id: number,
  question: string,
  defaultAnswer?: FAQAnswerPart[],
};