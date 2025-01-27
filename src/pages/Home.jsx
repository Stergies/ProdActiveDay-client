import { Link as RouterLink } from 'react-router-dom';
import { 
    Box,
    Heading,
    Text,
    Link,
    Flex,
    Stack,
} from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex
            direction={{ base: 'column', md: 'row' }} // Row direction on larger screens
            gap={6}
            p={14}
            maxW="100%"
            mx="auto"
            h="100vh" // Full viewport height for image
            bgImage="/productive-realistic.jpg" // Background image
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            {/* Left Side: Image - Background Image spans the full monitor */}
            <Box 
                flex="1" // Image takes 50% of the screen width
                h="100%" // Full height of the page
            />

            {/* Right Side: Text Content with Black Border and White Background */}
            <Box 
                flex="1" // Text takes the other 50% of the screen width
                alignSelf="center" // Center text vertically
                border="2px solid black" // Black border around the text
                p={6} // Padding inside the border
                backgroundColor="white" // White background color for the text box
                borderRadius="md" // Optional: Adds rounded corners to the border
                position="relative" // Keeps the text box on top of the image
                zIndex={2} // Ensures text appears on top of the image
            >
                <Stack 
                    spacing={6} 
                    pr={{ base: 4, md: 8 }} // Padding-right to shift text more to the right
                    pt={{ base: 4, md: 12 }} // Optional: Add padding-top for spacing
                    textAlign="right" // Right-align text content
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: '4xl', lg: '6xl' }}
                        fontWeight="bold"
                    >
                        Make your{' '}
                        <Text as="span" color="gray.300">
                            perfect
                        </Text>
                        <br />
                        day
                    </Heading>
                    <Box>
                        <Text 
                            as="span" 
                            fontWeight="bold" 
                            color="gray.300" 
                            fontSize={{ base: '1xl', md: '2xl' }} // Increased font size
                        >
                            ProdActiveDay&nbsp;
                        </Text>
                        will help you manage your day and to-do list.
                        <br />
                        We have a wide range of features to help you get things done.
                    </Box>
                    <Link
                        as={RouterLink}
                        to={'/profile'}
                        fontWeight="bold"
                        color="blue.500" // Default color
                        textDecoration="none" // No underline by default
                        _hover={{
                            color: "blue.300", // Change to blue.500 on hover
                            textDecoration: "none", // Ensure no underline
                        }}
                    >
                        Let's get started...
                    </Link>
                </Stack>
            </Box>
        </Flex>
    );
}



