
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Image,
  Flex
} from '@chakra-ui/react';

import  Image1 from './pexels-disha-sheta-4010464.jpg' 
import  { useState } from 'react';
const SplitWithImage = () => {
    const [formData, setFormData] = useState({email:"",password:""});
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email.length>=5 && formData.password.length>=4 && formData.username.length>=3) {
            window.location.href = '/cards';
          } else {
            alert("you are not alowed to enter")
          }
        // Save the form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));
    
        // Redirect to the other page
        //i add inside the condicin
       // window.location.href = '/cards';
      };
  return (
    <Stack minH="100vh" direction={{ base: 'column-reverse', md: 'row' }} onSubmit={handleSubmit}>
    <Flex flex={1}>
      <Image alt="Cover image" objectFit="cover" src={Image1} />
    </Flex>
    <Flex p={8} flex={1} align="center" justify="center">
      <Stack spacing={4}>
        <Stack align="center">
          <Heading fontSize="2xl">sgin up</Heading>
          <Heading fontSize="2xl">Flower shop </Heading>
        </Stack>
        <VStack type="text"
         
          as="form"
          spacing={8}
          boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
          h="max-content !important"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
          <FormControl id="username">
              <FormLabel>User name</FormLabel>
              <Input rounded="md" type="username"  
          name="username"
          placeholder="Enter your user name "
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input rounded="md" type="email"  
          name="email"
          placeholder="Enter your email address"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input rounded="md" type="password"  name="password"
          placeholder="Enter your password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </FormControl>
          </VStack>
          <VStack w="100%">
           
            <Button
              bg="pink"
              color="white"
              _hover={{
                bg: 'pink'
              }}
              rounded="md"
              w="100%"
              type="submit"
            >
              Sign in
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Flex>
  </Stack>
    
  );
};

export default SplitWithImage;