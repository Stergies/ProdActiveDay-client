import { Link as RouterLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useUser } from '../context/UserContext';
import { API_BASE_URL } from '../util.js';
import { 
    Link, 
    Flex, 
    Box, 
    Spacer, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    Image, 
    Text,
} from '@chakra-ui/react';

export default function NavBar() {
    const { user, updateUser } = useUser();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/signout`, {
                credentials: 'include',
            });
            const { message } = await res.json();
            toast.success(message);
            updateUser(null);
            navigate('/');
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <Box as="nav" bg="gray.400">
            <Flex
                minWidth="max-content"
                alignItems="center"
                p="12px"
                maxW="7xl"
                m="0 auto"
            >
                {/* ProdActiveDay Logo */}
                <Box p="2">
                    <Link 
                        as={RouterLink} 
                        to="/" 
                        fontSize="2xl" // Make the text bigger
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                        textDecoration="none" // No underline by default
                        _hover={{ textDecoration: 'none' }} // No underline on hover
                    >
                        <Text 
                            as="span" 
                            color="gray.600" // Static color for Pro
                        >
                            Prod
                        </Text>
                        <Text 
                            as="span" 
                            color="white" // Default color for ActiveDay
                            fontStyle="italic"
                            _hover={{ color: "gray.500" }} // Change to blue.500 on hover
                        >
                            ActiveDay
                        </Text>
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    {user ? (
                        <Menu>
                            <MenuButton>
                                <Image
                                    boxSize="40px"
                                    borderRadius="full"
                                    src={user.avatar}
                                    alt={user.username}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={RouterLink} to="/profile">
                                    Profile
                                </MenuItem>
                                <MenuItem as={RouterLink} to="/tasks">
                                    Tasks
                                </MenuItem>
                                <MenuItem onClick={handleSignOut}>
                                    Sign Out
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <Link 
                            as={RouterLink} 
                            to="/signin" 
                            fontWeight="bold" 
                            color="white" // Default color
                            textDecoration="none" // No underline by default
                            _hover={{
                                color: "gray.600", // Change to blue.500 on hover
                                textDecoration: "none", // Ensure no underline
                            }}
                        >
                            Sign In
                        </Link>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}




