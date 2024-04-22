import { Box, Text, Image, Flex } from '@chakra-ui/react';
//import logo from '../assets/openai.png';

export default function Footer(){
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
      {/* <Image src={logo} marginRight={3} /> */}
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};
