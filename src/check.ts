import * as budoux from "budoux";

const parser = budoux.loadDefaultJapaneseParser();

export const check = (
  text: string,
  comma: string,
): { ok: true } | { ok: false; index: number } => {
  const commaless = text.replace(new RegExp(comma, "g"), "");
  const items = parser.parse(commaless);

  let i = 0;
  for (let j = 0; j < items.length; ) {
    const item = items[j];
    if (item === undefined) throw new Error();

    if (text.startsWith(item, i)) {
      i += item.length;
      j++;
    } else if (text.startsWith(comma, i)) {
      i += comma.length;
    } else {
      return { ok: false, index: text.indexOf(comma, i) };
    }
  }

  return { ok: true };
};
