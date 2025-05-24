import { useState } from 'react'
import { css } from '../styled-system/css'
import { flex } from '../styled-system/patterns'
import { cTypography } from './styles/libs/recipes/cTypography'
import { cFlex } from './styles/libs/recipes/cFlex'

// Container styles
const containerStyles = css({ maxWidth: '1200px', margin: '0 auto', padding: '4' })

// Button styles
const buttonStyles = css({
  backgroundColor: 'purple',
  color: 'white',
  padding: '2 4',
  borderRadius: 'md',
  width: 'fit-content'
})

// Card container styles
const cardContainerStyles = css({ border: '1px solid', borderColor: 'tableBorder', padding: '4', borderRadius: 'md' })

// Typography section styles
const sectionTitleStyles = `${cTypography({ name: "JP1L_24_Bold", color: "black" })} ${css({ marginBottom: '4' })}`

// Flex example styles
const rowLabelStyles = `${cTypography({ name: "JP1L_16_Bold", color: "black" })} ${css({ marginBottom: '2' })}`
const rowContainerStyles = `${cFlex({ justify: "between", align: "center" })} ${css({ backgroundColor: 'palePurple', padding: '4', borderRadius: 'md' })}`
const purpleItemStyles = css({ backgroundColor: 'purple', padding: '4', color: 'white', borderRadius: 'md' })

const columnContainerStyles = `${cFlex({ direction: "column", align: "center", gap: "4" })} ${css({ backgroundColor: 'thinPink', padding: '4', borderRadius: 'md' })}`
const pinkItemStyles = css({ backgroundColor: 'vividPink', padding: '4', color: 'white', borderRadius: 'md' })

const wrapContainerStyles = `${cFlex({ wrap: "wrap", gap: "4" })} ${css({ backgroundColor: 'thinBlue', padding: '4', borderRadius: 'md' })}`
const blueItemStyles = css({ backgroundColor: 'paleBlue', padding: '4', color: 'black', borderRadius: 'md', width: '100px' })

function App() {
  // Component state
  const [count, setCount] = useState(0)

  return (
    <div className={containerStyles}>
      <h1 className={cTypography({ name: "JP1L_32_Bold", color: "black" })}>
        Panda CSS + React
      </h1>
      
      <div className={flex({ direction: 'column', gap: '8' })}>
        <p className={cTypography({ name: "JP1L_16_Regular", color: "paleBlack" })}>
          This is a minimal setup for Panda CSS with React.
        </p>
        
        <button
          className={buttonStyles}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <div className={cardContainerStyles}>
          <h2 className={sectionTitleStyles}>
            Typography Recipe Examples
          </h2>
          <div className={cFlex({ direction: "column", gap: "4" })}>
            <p className={cTypography({ name: "JP1L_48_Bold", color: "black" })}>JP1L_48_Bold</p>
            <p className={cTypography({ name: "JP1L_32_Bold", color: "vividPink" })}>JP1L_32_Bold with vividPink</p>
            <p className={cTypography({ name: "JP1L_24_Bold", color: "purple" })}>JP1L_24_Bold with purple</p>
            <p className={cTypography({ name: "JP1L_20_Bold", color: "paleBlue" })}>JP1L_20_Bold with paleBlue</p>
            <p className={cTypography({ name: "JP1L_16_Bold", color: "errorRed" })}>JP1L_16_Bold with errorRed</p>
            <p className={cTypography({ name: "JP1L_16_Medium", color: "black" })}>JP1L_16_Medium</p>
            <p className={cTypography({ name: "JP1L_16_Regular", color: "black" })}>JP1L_16_Regular</p>
            <p className={cTypography({ name: "EN_56_Bold", color: "black" })}>EN_56_Bold</p>
            <p className={cTypography({ name: "EN_32_SemiBold", color: "black" })}>EN_32_SemiBold</p>
          </div>
        </div>

        <div className={cardContainerStyles}>
          <h2 className={sectionTitleStyles}>
            Flex Recipe Examples
          </h2>
          <div className={cFlex({ direction: "column", gap: "8" })}>
            <div>
              <p className={rowLabelStyles}>Row with space-between</p>
              <div className={rowContainerStyles}>
                <div className={purpleItemStyles}>Item 1</div>
                <div className={purpleItemStyles}>Item 2</div>
                <div className={purpleItemStyles}>Item 3</div>
              </div>
            </div>
            
            <div>
              <p className={rowLabelStyles}>Column with center alignment</p>
              <div className={columnContainerStyles}>
                <div className={pinkItemStyles}>Item 1</div>
                <div className={pinkItemStyles}>Item 2</div>
                <div className={pinkItemStyles}>Item 3</div>
              </div>
            </div>
            
            <div>
              <p className={rowLabelStyles}>Wrap with gap</p>
              <div className={wrapContainerStyles}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={blueItemStyles}>
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App