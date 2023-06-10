
import {
  Container,
  Box,
  Text,
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuItem,
  MenuDivider,
  MenuButton,
  IconButton,
  MenuList,
  HStack,


  useColorModeValue,
 
 
} from '@chakra-ui/react';

// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';
// Here we have used react-icons package for the icons
import { MdAdd } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';
export default function Nav1() {


  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Flex mb="0px" align="center">
       
         
            <Box p="2">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl' }}
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  bgClip="text"
                  _focus={{ boxShadow: 'none', outline: 'none' }}
                  _hover={{
                    textDecoration: 'none',
                    bgGradient: 'linear(to-r, red.500, yellow.500)'
                  }}
                >
                 Flower shop
                </Heading>
              </motion.div>
            </Box>
        
     
        <Spacer />
        <Box>
          <HStack>
            
            <Box d={['block', 'block', 'none']}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<GiHamburgerMenu />}
                  transition="all 0.2s"
                  size="md"
                  color="white"
                  variant="outline"
                  bg={useColorModeValue('gray.400', 'gray.800')}
                  _hover={{ bg: 'auto' }}
                  _focus={{ boxShadow: 'outline' }}
                />
                <MenuList fontSize="sm" zIndex={5}>
                  <MenuItem icon={<MdAdd />} >
                    {' '}
                    <Text textShadow="1px 1px #9c1786">Flower</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<AiOutlineArrowRight />}>
                    {' '}
                    <Text textShadow="1px 1px #9c1786">best sales</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <IconButton aria-label="Color Switcher" icon={<FiSun />} />

          </HStack>
        </Box>
      </Flex>
    </Container>
  );
}
