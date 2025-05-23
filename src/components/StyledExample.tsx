import { Box, Flex, VStack, Text, Button } from '../../styled-system/jsx'

export const StyledExample = () => {
  return (
    <Box maxW="600px" p="4" borderRadius="md" boxShadow="lg" bg="gray.50">
      <VStack spacing="4" align="stretch">
        <Text fontSize="xl" fontWeight="bold" color="blue.700">
          Using Panda CSS JSX Components
        </Text>
        
        <Text color="gray.600">
          This example demonstrates using the styled JSX components from Panda CSS.
          These components provide a more declarative way to style your React components.
        </Text>
        
        <Flex gap="3" wrap="wrap">
          <Button bg="blue.500" color="white" _hover={{ bg: 'blue.600' }}>
            Primary Button
          </Button>
          <Button 
            bg="transparent" 
            color="blue.500" 
            border="1px solid" 
            borderColor="blue.500"
            _hover={{ bg: 'blue.50' }}
          >
            Secondary Button
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}