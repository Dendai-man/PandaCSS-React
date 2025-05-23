import { useState } from 'react'
import { css } from '../styled-system/css'
import { flex, grid } from '../styled-system/patterns'
import { Card } from './components/Card'
import { StyledExample } from './components/StyledExample'
import { ButtonVariants } from './components/ButtonVariants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={css({ maxW: '1200px', mx: 'auto', p: '4' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '4' })}>
        Panda CSS + React
      </h1>
      
      <div className={flex({ direction: 'column', gap: '8' })}>
        <p className={css({ color: 'gray.700' })}>
          This is a minimal setup for Panda CSS with React.
        </p>
        
        <button
          className={css({
            bg: 'blue.500',
            color: 'white',
            px: '4',
            py: '2',
            borderRadius: 'md',
            _hover: { bg: 'blue.600' },
            width: 'fit-content'
          })}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <div className={css({ border: '1px solid', borderColor: 'gray.200', p: '4', borderRadius: 'md' })}>
          <h2 className={css({ fontSize: 'xl', fontWeight: 'semibold', mb: '4' })}>
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

        <div className={css({ border: '1px solid', borderColor: 'gray.200', p: '4', borderRadius: 'md' })}>
          <h2 className={css({ fontSize: 'xl', fontWeight: 'semibold', mb: '4' })}>
            JSX Components Approach
          </h2>
          <StyledExample />
        </div>

        <div className={css({ border: '1px solid', borderColor: 'gray.200', p: '4', borderRadius: 'md' })}>
          <h2 className={css({ fontSize: 'xl', fontWeight: 'semibold', mb: '4' })}>
            Component Variant API (cva) Approach
          </h2>
          <ButtonVariants />
        </div>
      </div>
    </div>
  )
}

export default App