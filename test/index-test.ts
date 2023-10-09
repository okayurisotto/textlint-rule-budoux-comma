import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
tester.run(
  "budoux-comma",
  // @ts-expect-error
  { rules: [{ rule, options: { comma: ["、"] } }] },
  {
    valid: ["これは、文節で正しく読点が使われた文章です。"],
    invalid: [
      {
        text: "これ、は読点の使われ方がよくない文章です。",
        errors: [
          {
            message: "読点の位置が不正です。",
            loc: {
              start: { line: 1, column: 3 },
              end: { line: 1, column: 4 },
            },
          },
        ],
      },
      {
        text: "この文章に関しては大丈夫です。\nしかしこちらでは、読点の使われ、方がよくありません。",
        errors: [
          {
            message: "読点の位置が不正です。",
            loc: {
              start: { line: 2, column: 16 },
              end: { line: 2, column: 17 },
            },
          },
        ],
      },
    ],
  },
);
