import { Box, Container, Flex, Heading, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </Stack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} p={4}>
        <Box as="main" gridColumn={{ md: "span 2" }}>
          <Heading size="lg" mb={4}>Featured Articles</Heading>
          <Box bg="gray.100" p={4} mb={4}>
            <Heading size="md">Article Title 1</Heading>
            <Text>Summary of the article content...</Text>
          </Box>
          <Box bg="gray.100" p={4} mb={4}>
            <Heading size="md">Article Title 2</Heading>
            <Text>Summary of the article content...</Text>
          </Box>
        </Box>

        <Box as="aside">
          <Heading size="lg" mb={4}>Trending News</Heading>
          <Box bg="gray.100" p={4} mb={4}>
            <Heading size="md">Trending News 1</Heading>
            <Text>Summary of the trending news...</Text>
          </Box>
          <Box bg="gray.100" p={4} mb={4}>
            <Heading size="md">Trending News 2</Heading>
            <Text>Summary of the trending news...</Text>
          </Box>

          <Heading size="lg" mb={4}>Market Data</Heading>
          <Box bg="gray.100" p={4} mb={4}>
            <Heading size="md">Market Data 1</Heading>
            <Text>Summary of the market data...</Text>
          </Box>
          <Box bg="gray.100" p={4} mb={4}>
            <Heading size="md">Market Data 2</Heading>
            <Text>Summary of the market data...</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <Flex as="footer" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Text>&copy; 2023 Financial Times</Text>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
          <Link as={RouterLink} to="/terms">Terms of Service</Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;