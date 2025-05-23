import { cva } from '../../styled-system/css'
import { Flex } from '../../styled-system/jsx'

// Define button variants using cva
const buttonStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
    cursor: 'pointer',
    px: '4',
    py: '2',
    transition: 'all 0.2s',
  },
  variants: {
    intent: {
      primary: {
        bg: 'blue.500',
        color: 'white',
        _hover: { bg: 'blue.600' },
      },
      secondary: {
        bg: 'gray.200',
        color: 'gray.800',
        _hover: { bg: 'gray.300' },
      },
      danger: {
        bg: 'red.500',
        color: 'white',
        _hover: { bg: 'red.600' },
      },
      ghost: {
        bg: 'transparent',
        color: 'gray.800',
        _hover: { bg: 'gray.100' },
      },
    },
    size: {
      sm: { fontSize: 'sm', px: '3', py: '1' },
      md: { fontSize: 'md', px: '4', py: '2' },
      lg: { fontSize: 'lg', px: '5', py: '3' },
    },
    rounded: {
      true: { borderRadius: 'full' },
    },
    disabled: {
      true: { 
        opacity: 0.5, 
        cursor: 'not-allowed',
        _hover: { bg: 'initial' },
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
})

type ButtonProps = {
  children: React.ReactNode
  intent?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ 
  children, 
  intent = 'primary', 
  size = 'md', 
  rounded, 
  disabled, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      className={buttonStyles({ intent, size, rounded, disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const ButtonVariants = () => {
  return (
    <div>
      <Flex direction="column" gap="4">
        <Flex gap="3" wrap="wrap">
          <Button intent="primary">Primary</Button>
          <Button intent="secondary">Secondary</Button>
          <Button intent="danger">Danger</Button>
          <Button intent="ghost">Ghost</Button>
        </Flex>
        
        <Flex gap="3" wrap="wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Flex>
        
        <Flex gap="3" wrap="wrap">
          <Button rounded>Rounded</Button>
          <Button disabled>Disabled</Button>
        </Flex>
      </Flex>
    </div>
  )
}