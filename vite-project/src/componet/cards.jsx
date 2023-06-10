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
import  { useState,useEffect } from 'react';
export default function Cards() {
    const [formData, setFormData] = useState({});
    const [form1Data, setForm1Data] = useState({});
    useEffect(() => {
      // Get the form data from local storage
      const data = JSON.parse(localStorage.getItem('formData'));
      
      // Set the form data state
      setFormData(data);
      
    }, []);
    const handleSubmit= (e)=>{
        e.preventDefault();
        //console.log(form1Data.email);
        if(formData.email==form1Data.email && formData.username==form1Data.username &&  formData.password==form1Data.password ){
            //console.log(formData.email);
          alert("wellcome ^-^ "+formData.username )
          window.location.href = './allcards'
           }else{
            alert("You are not allowed to enter")
           }
    }
  
return (
    <Stack minH="100vh" direction={{ base: 'column-reverse', md: 'row' }} onSubmit={handleSubmit}>
    <Flex flex={1}>
      <Image alt="Cover image" objectFit="cover" src={Image1} />
    </Flex>
    <Flex p={8} flex={1} align="center" justify="center">
      <Stack spacing={4}>
        <Stack align="center">
          <Heading fontSize="2xl">login</Heading>
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
          onChange={(e) => setForm1Data({ ...form1Data, username: e.target.value })}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input rounded="md" type="email"  
          name="email"
          placeholder="Enter your email address"
          onChange={(e) => setForm1Data({ ...form1Data, email: e.target.value })}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input rounded="md" type="password"  name="password"
          placeholder="Enter your password"
          onChange={(e) => setForm1Data({ ...form1Data, password: e.target.value })} />
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
  }

   
  //to print all the data send it from the form
  //{JSON.stringify(formData, null, 2)}