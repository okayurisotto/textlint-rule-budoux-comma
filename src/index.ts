import type { TextlintRuleModule } from "@textlint/types";
import { check } from "./check";

export interface Options {
  comma: string[];
}

const report: TextlintRuleModule<Options> = (context, options) => {
  return {
    async [context.Syntax.Str](node) {
      const text = context.getSource(node);

      for (const comma of options?.comma ?? ["、", "，"]) {
        const result = check(text, comma);

        if (result.ok) {
          // noop
        } else {
          context.report(
            node,
            new context.RuleError("読点の位置が不正です。", {
              padding: context.locator.at(result.index),
            }),
          );
        }
      }
    },
  };
};

export default report;
