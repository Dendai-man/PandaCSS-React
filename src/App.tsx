import { useState } from 'react'
import { css } from '../styled-system/css'
import { flex, grid } from '../styled-system/patterns'
import { Card } from './components/Card'
import { StyledExample } from './components/StyledExample'
import { ButtonVariants } from './components/ButtonVariants'
import { cTypography } from './styles/libs/recipes/cTypography'
import { cFlex } from './styles/libs/recipes/cFlex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={css({ maxW: '1200px', mx: 'auto', p: '4' })}>
      <h1 className={cTypography({ name: "JP1L_32_Bold", color: "black" })}>
        Panda CSS + React
      </h1>
      
      <div className={flex({ direction: 'column', gap: '8' })}>
        <p className={cTypography({ name: "JP1L_16_Regular", color: "paleBlack" })}>
          This is a minimal setup for Panda CSS with React.
        </p>
        
        <button
          className={css({
            bg: 'purple',
            color: 'white',
            px: '4',
            py: '2',
            borderRadius: 'md',
            _hover: { bg: 'graphPurple' },
            width: 'fit-content'
          })}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <h2 className={cTypography({ name: "JP1L_24_Bold", color: "black", className: css({ mb: '4' }) })}>
            CSS Function Approach
          </h2>
          <div className={grid({ columns: { base: 1, md: 2, lg: 3 }, gap: '4' })}>
            <Card 
              title="Panda CSS" 
              description="A modern CSS-in-JS library with great developer experience." 
            />
            <Card 
              title="React" 
              description="A JavaScript library for building user interfaces." 
            />
            <Card 
              title="TypeScript" 
              description="A strongly typed programming language that builds on JavaScript." 
            />
          </div>
        </div>

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <h2 className={cTypography({ name: "JP1L_24_Bold", color: "black", className: css({ mb: '4' }) })}>
            JSX Components Approach
          </h2>
          <StyledExample />
        </div>

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <h2 className={cTypography({ name: "JP1L_24_Bold", color: "black", className: css({ mb: '4' }) })}>
            Component Variant API (cva) Approach
          </h2>
          <ButtonVariants />
        </div>

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <h2 className={cTypography({ name: "JP1L_24_Bold", color: "black", className: css({ mb: '4' }) })}>
            Typography Recipe Examples
          </h2>
          <div className={cFlex({ direction: "column", gap: 4 })}>
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

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <h2 className={cTypography({ name: "JP1L_24_Bold", color: "black", className: css({ mb: '4' }) })}>
            Flex Recipe Examples
          </h2>
          <div className={cFlex({ direction: "column", gap: 8 })}>
            <div>
              <p className={cTypography({ name: "JP1L_16_Bold", color: "black", className: css({ mb: '2' }) })}>Row with space-between</p>
              <div className={cFlex({ justify: "between", align: "center", className: css({ bg: 'palePurple', p: '4', borderRadius: 'md' }) })}>
                <div className={css({ bg: 'purple', p: '4', color: 'white', borderRadius: 'md' })}>Item 1</div>
                <div className={css({ bg: 'purple', p: '4', color: 'white', borderRadius: 'md' })}>Item 2</div>
                <div className={css({ bg: 'purple', p: '4', color: 'white', borderRadius: 'md' })}>Item 3</div>
              </div>
            </div>
            
            <div>
              <p className={cTypography({ name: "JP1L_16_Bold", color: "black", className: css({ mb: '2' }) })}>Column with center alignment</p>
              <div className={cFlex({ direction: "column", align: "center", gap: 4, className: css({ bg: 'thinPink', p: '4', borderRadius: 'md' }) })}>
                <div className={css({ bg: 'vividPink', p: '4', color: 'white', borderRadius: 'md' })}>Item 1</div>
                <div className={css({ bg: 'vividPink', p: '4', color: 'white', borderRadius: 'md' })}>Item 2</div>
                <div className={css({ bg: 'vividPink', p: '4', color: 'white', borderRadius: 'md' })}>Item 3</div>
              </div>
            </div>
            
            <div>
              <p className={cTypography({ name: "JP1L_16_Bold", color: "black", className: css({ mb: '2' }) })}>Wrap with gap</p>
              <div className={cFlex({ wrap: "wrap", gap: 4, className: css({ bg: 'thinBlue', p: '4', borderRadius: 'md' }) })}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={css({ bg: 'paleBlue', p: '4', color: 'black', borderRadius: 'md', width: '100px' })}>
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