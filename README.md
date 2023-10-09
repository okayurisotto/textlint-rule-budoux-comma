# textlint-rule-budoux-comma

BudouX を用いて読点の位置を校正する textlint ルール

## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm install textlint-rule-budoux-comma
```

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
  "rules": {
    "budoux-comma": true
  }
}
```

Via CLI

```
textlint --rule budoux-comma README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

```sh
npm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

```sh
npm test
```

## License

CC0-1.0
