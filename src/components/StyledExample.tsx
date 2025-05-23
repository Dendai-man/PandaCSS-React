import { Box, Flex, VStack } from '../../styled-system/jsx'
import { css } from '../../styled-system/css'

export const StyledExample = () => {
  return (
    <Box maxW="600px" p="4" borderRadius="md" boxShadow="lg" bg="gray.50">
      <VStack spacing="4" align="stretch">
        <div className={css({ fontSize: "xl", fontWeight: "bold", color: "blue.700" })}>
          Using Panda CSS JSX Components
        </div>
        
        <div className={css({ color: "gray.600" })}>
          This example demonstrates using the styled JSX components from Panda CSS.
          These components provide a more declarative way to style your React components.
        </div>
        
        <Flex gap="3" wrap="wrap">
          <button 
            className={css({ 
              bg: "blue.500", 
              color: "white", 
              px: "3", 
              py: "2", 
              borderRadius: "md",
              _hover: { bg: 'blue.600' } 
            })}
          >
            Primary Button
          </button>
          <button 
            className={css({ 
              bg: "transparent", 
              color: "blue.500", 
              border: "1px solid", 
              borderColor: "blue.500",
              px: "3", 
              py: "2", 
              borderRadius: "md",
              _hover: { bg: 'blue.50' } 
            })}
          >
            Secondary Button
          </button>
        </Flex>
      </VStack>
    </Box>
  )
}