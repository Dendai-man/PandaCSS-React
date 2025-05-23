import { css } from '../../styled-system/css'
import { cTypography } from '../styles/libs/recipes/cTypography'
import { cFlex } from '../styles/libs/recipes/cFlex'

/**
 * 静的型チェックが効いたスタイル定義の例
 * 
 * 以下のようなエラーが検出されます:
 * - 存在しないプロパティ (例: bgColor → backgroundColor)
 * - 存在しないトークン値 (例: color: 'nonExistentColor')
 * - 型の不一致 (例: fontSize: true)
 */
export const TypedStyleExample = () => {
  return (
    <div className={css({ 
      // 正しいプロパティと値
      backgroundColor: 'purple',
      color: 'white',
      padding: '4',
      borderRadius: 'md',
      
      // 以下はTypeScriptエラーになります
      // bgColor: 'purple', // プロパティが存在しない
      // color: 'nonExistentColor', // 値が存在しない
      // fontSize: true, // 型が不一致
    })}>
      <h2 className={cTypography({ name: "JP1L_24_Bold", color: "black" })}>
        型安全なスタイル定義
      </h2>
      
      <div className={cFlex({ 
        direction: "column", 
        gap: "4", // 数値型ではなく文字列型の "4" を使用する必要があります
        align: "center",
        // invalid: "value" // 存在しないプロパティ
      })}>
        <p>型安全なスタイル定義の例です</p>
      </div>
    </div>
  )
}