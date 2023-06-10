import { Card, CardBody, CardFooter,Image ,Stack,Text,Divider,Heading,ButtonGroup,Button,Box,Input} from '@chakra-ui/react'

import  Img1 from'./pexels-kat-smith-548375.jpg'
import Img2 from './pexels-karolina-grabowska-4207567.jpg'
import Footer from './Footer'
import Img4 from './pexels-irina-iriser-2534521.jpg'
import { useState } from 'react'
export default function Allcards() {
  const [input,setInput]=useState("");
  //const [list,setList]=useState("");
  let heds=['Climbing Roses','Hybrid Tea Roses','Grandiflora Roses','Floribunda Roses','Miniature Roses','Shrub Roses']
  const handleSubmit=()=>{
 // setList(input)
  // console.log(input);
 // for(let hed of heds){
     //console.log(hed);
 if(heds.includes(input)){
       return alert("We have this type of rose ✅")
      
         }else{
        return alert("We dont have this type of rose ❌")
        }
   
   
 // }
}
// {list.map((item)=>(
 //  console.log({item})

  //))}
 
  // {list.map((item)=>(
  //  <>
  // console.log({item});
   //  </>
    // ))}
  return (
   <>

   <Stack d={['none', 'none', 'block']} width='400px' >
            <Input rounded="md" 
             value={input} onChange={(e)=>setInput(e.target.value)}
          id="search-input"
          placeholder="Find your favorite flower " 
         />
              <Button onClick={handleSubmit}
               
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)' }}
                color="white"
                variant="solid"
                size="sm"
                rounded="md"
              >
               Search
              </Button>
          
            </Stack>
   <Box display= "flex"
  flex-wrap= "wrap" >
    <Box width="100%"
  margin={{base:"0 0px",md:"0 0px",lg:"0 0px"}}>
   <Card maxW={{base:"sm",md:"sm",lg:"xxl"}} margin="30px"  >
  <CardBody>
    <Image 
      src={Img1}  boxSize='350px'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Climbing Roses</Heading>
      <Text>
      are not a class, but more of a description. In other words, you may find grandiflora or floribunda climbing roses. Despite the name, climbing roses can’t quite climb as efficiently as vines. Also referred to as “rambling” roses.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $45
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW={{base:"sm",md:"sm",lg:"xxl"}} margin="30px">
  <CardBody>
    <Image boxSize='350px'
      src={Img2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Hybrid Tea Roses</Heading>
      <Text>
      are one of the most popular classes of roses, and it’s not hard to understand why. With bountiful, ornate blooms that sprout from long stems and reach anywhere from 30-50 petals.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $30
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW={{base:"sm",md:"sm",lg:"xxl"}} margin="30px" >
  <CardBody>
    <Image
      src={Img4} boxSize='350px'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grandiflora Roses</Heading>
      <Text>
      Regarded as a subgroup class of hybrid tea roses with floribunda features, the grandiflora rose was created in the last century. The perfect combination between the two, grandifloras present elegant .
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $70
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Box>
 <Box width="100%"
  margin="0 -15px">
<Card maxW={{base:"sm",md:"sm",lg:"xxl"}} margin="30px" >
  <CardBody>
    <Image
      src={Img4} boxSize='350px'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Floribunda Roses</Heading>
      <Text>
      are another favorite rose class. Similar to grandifloras, a floribunda rose presents a large cluster of flowers. With a continuous bloom, it will last much longer than the six- to seven-week cycle of hybrid tea roses or grandiflora roses.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $50
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW={{base:"sm",md:"sm",lg:"xxl"}} margin="30px" >
  <CardBody>
    <Image
      src={Img1} boxSize='350px'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Miniature Roses</Heading>
      <Text>
      A form of the hybrid tea or grandiflora rose, miniature roses and miniflora roses are typically shorter and a bit more compact. Miniature roses can grow anywhere between 15-30 inches.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $55
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW={{base:"sm",md:"sm",lg:"xxl"}} margin="30px" >
  <CardBody>
    <Image
      src={Img2} boxSize='350px'
      alt='Green double couch with wooden legs'
      borderRadius='lg' 
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Shrub Roses</Heading>
      <Text>
      Shrub roses tend to sprawl wide and large, anywhere between five and 15 feet in every direction.

      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $60
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

</Box>
</Box>
<Footer/>
   </>
  )
}
