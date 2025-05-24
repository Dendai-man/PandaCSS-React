import { useState } from 'react'
import { css } from '../styled-system/css'
import { flex } from '../styled-system/patterns'
import { cTypography } from './styles/libs/recipes/cTypography'
import { cFlex } from './styles/libs/recipes/cFlex'

// Container styles
const containerStyles = css({ maxWidth: '1200px', margin: '0 auto', padding: '4' })

// Typography styles
const headingStyles = cTypography({ name: "JP1L_32_Bold", color: "black" })
const descriptionStyles = cTypography({ name: "JP1L_16_Regular", color: "paleBlack" })
const sectionTitleStyles = `${cTypography({ name: "JP1L_24_Bold", color: "black" })} ${css({ marginBottom: '4' })}`

// Typography examples styles
const typographyContainerStyles = cFlex({ direction: "column", gap: "4" })
const jp1l48BoldStyles = cTypography({ name: "JP1L_48_Bold", color: "black" })
const jp1l32BoldPinkStyles = cTypography({ name: "JP1L_32_Bold", color: "vividPink" })
const jp1l24BoldPurpleStyles = cTypography({ name: "JP1L_24_Bold", color: "purple" })
const jp1l20BoldBlueStyles = cTypography({ name: "JP1L_20_Bold", color: "paleBlue" })
const jp1l16BoldRedStyles = cTypography({ name: "JP1L_16_Bold", color: "errorRed" })
const jp1l16MediumStyles = cTypography({ name: "JP1L_16_Medium", color: "black" })
const jp1l16RegularStyles = cTypography({ name: "JP1L_16_Regular", color: "black" })
const en56BoldStyles = cTypography({ name: "EN_56_Bold", color: "black" })
const en32SemiBoldStyles = cTypography({ name: "EN_32_SemiBold", color: "black" })

// Layout styles
const contentContainerStyles = flex({ direction: 'column', gap: '8' })
const flexExamplesContainerStyles = cFlex({ direction: "column", gap: "8" })

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
      <h1 className={headingStyles}>
        Panda CSS + React
      </h1>
      
      <div className={contentContainerStyles}>
        <p className={descriptionStyles}>
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
          <div className={typographyContainerStyles}>
            <p className={jp1l48BoldStyles}>JP1L_48_Bold</p>
            <p className={jp1l32BoldPinkStyles}>JP1L_32_Bold with vividPink</p>
            <p className={jp1l24BoldPurpleStyles}>JP1L_24_Bold with purple</p>
            <p className={jp1l20BoldBlueStyles}>JP1L_20_Bold with paleBlue</p>
            <p className={jp1l16BoldRedStyles}>JP1L_16_Bold with errorRed</p>
            <p className={jp1l16MediumStyles}>JP1L_16_Medium</p>
            <p className={jp1l16RegularStyles}>JP1L_16_Regular</p>
            <p className={en56BoldStyles}>EN_56_Bold</p>
            <p className={en32SemiBoldStyles}>EN_32_SemiBold</p>
          </div>
        </div>

        <div className={cardContainerStyles}>
          <h2 className={sectionTitleStyles}>
            Flex Recipe Examples
          </h2>
          <div className={flexExamplesContainerStyles}>
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