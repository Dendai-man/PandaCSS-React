import { useState } from 'react'
import { css } from '../styled-system/css'
import { flex, grid } from '../styled-system/patterns'
import { Card } from './components/Card'
import { StyledExample } from './components/StyledExample'
import { ButtonVariants } from './components/ButtonVariants'
import { Typography } from './components/Typography'
import { Flex } from './components/Flex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={css({ maxW: '1200px', mx: 'auto', p: '4' })}>
      <Typography name="JP1L_32_Bold" color="black">
        Panda CSS + React
      </Typography>
      
      <div className={flex({ direction: 'column', gap: '8' })}>
        <Typography name="JP1L_16_Regular" color="paleBlack">
          This is a minimal setup for Panda CSS with React.
        </Typography>
        
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
          <Typography name="JP1L_24_Bold" color="black" className={css({ mb: '4' })}>
            CSS Function Approach
          </Typography>
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
          <Typography name="JP1L_24_Bold" color="black" className={css({ mb: '4' })}>
            JSX Components Approach
          </Typography>
          <StyledExample />
        </div>

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <Typography name="JP1L_24_Bold" color="black" className={css({ mb: '4' })}>
            Component Variant API (cva) Approach
          </Typography>
          <ButtonVariants />
        </div>

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <Typography name="JP1L_24_Bold" color="black" className={css({ mb: '4' })}>
            Typography Recipe Examples
          </Typography>
          <Flex direction="column" gap={4}>
            <Typography name="JP1L_48_Bold" color="black">JP1L_48_Bold</Typography>
            <Typography name="JP1L_32_Bold" color="vividPink">JP1L_32_Bold with vividPink</Typography>
            <Typography name="JP1L_24_Bold" color="purple">JP1L_24_Bold with purple</Typography>
            <Typography name="JP1L_20_Bold" color="paleBlue">JP1L_20_Bold with paleBlue</Typography>
            <Typography name="JP1L_16_Bold" color="errorRed">JP1L_16_Bold with errorRed</Typography>
            <Typography name="JP1L_16_Medium" color="black">JP1L_16_Medium</Typography>
            <Typography name="JP1L_16_Regular" color="black">JP1L_16_Regular</Typography>
            <Typography name="EN_56_Bold" color="black">EN_56_Bold</Typography>
            <Typography name="EN_32_SemiBold" color="black">EN_32_SemiBold</Typography>
          </Flex>
        </div>

        <div className={css({ border: '1px solid', borderColor: 'tableBorder', p: '4', borderRadius: 'md' })}>
          <Typography name="JP1L_24_Bold" color="black" className={css({ mb: '4' })}>
            Flex Recipe Examples
          </Typography>
          <Flex direction="column" gap={8}>
            <div>
              <Typography name="JP1L_16_Bold" color="black" className={css({ mb: '2' })}>Row with space-between</Typography>
              <Flex justify="between" align="center" className={css({ bg: 'palePurple', p: '4', borderRadius: 'md' })}>
                <div className={css({ bg: 'purple', p: '4', color: 'white', borderRadius: 'md' })}>Item 1</div>
                <div className={css({ bg: 'purple', p: '4', color: 'white', borderRadius: 'md' })}>Item 2</div>
                <div className={css({ bg: 'purple', p: '4', color: 'white', borderRadius: 'md' })}>Item 3</div>
              </Flex>
            </div>
            
            <div>
              <Typography name="JP1L_16_Bold" color="black" className={css({ mb: '2' })}>Column with center alignment</Typography>
              <Flex direction="column" align="center" gap={4} className={css({ bg: 'thinPink', p: '4', borderRadius: 'md' })}>
                <div className={css({ bg: 'vividPink', p: '4', color: 'white', borderRadius: 'md' })}>Item 1</div>
                <div className={css({ bg: 'vividPink', p: '4', color: 'white', borderRadius: 'md' })}>Item 2</div>
                <div className={css({ bg: 'vividPink', p: '4', color: 'white', borderRadius: 'md' })}>Item 3</div>
              </Flex>
            </div>
            
            <div>
              <Typography name="JP1L_16_Bold" color="black" className={css({ mb: '2' })}>Wrap with gap</Typography>
              <Flex wrap="wrap" gap={4} className={css({ bg: 'thinBlue', p: '4', borderRadius: 'md' })}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={css({ bg: 'paleBlue', p: '4', color: 'black', borderRadius: 'md', width: '100px' })}>
                    Item {i + 1}
                  </div>
                ))}
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  )
}

export default App