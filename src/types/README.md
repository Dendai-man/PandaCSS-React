# PandaCSS 静的型チェック

このディレクトリには、PandaCSS の静的型チェックを強化するための型定義が含まれています。

## 概要

PandaCSS は通常、CSS プロパティや値に対する型チェックが緩いため、存在しないプロパティや値を指定してもビルド時までエラーが検出されません。このディレクトリの型定義を使用することで、以下のような問題を開発時に検出できるようになります：

1. 存在しないCSSプロパティの使用
2. 存在しないトークン値の使用
3. プロパティに対して型が一致しない値の使用

## 使用方法

型定義は自動的に適用されます。以下のようなコードを書くと、TypeScriptがエラーを検出します：

```tsx
// エラー例
<div className={css({
  bgColor: 'purple', // プロパティが存在しない (backgroundColor が正しい)
  color: 'nonExistentColor', // 値が存在しない
  fontSize: true, // 型が不一致
})}>
  コンテンツ
</div>

// 正しい例
<div className={css({
  backgroundColor: 'purple',
  color: 'white',
  fontSize: '16',
})}>
  コンテンツ
</div>
```

## 参考資料

この型定義は以下の GitHub Issue を参考にしています：
https://github.com/chakra-ui/panda/issues/1691#issuecomment-1835778358