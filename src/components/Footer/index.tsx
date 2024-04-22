import { Box, Text, Image, Flex } from '@chakra-ui/react';
//import logo from '../assets/openai.png';

export default function Footer(){
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
      {/* <Image src={logo} marginRight={3} /> */}
        <Text><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Powered By Google Gemini</a></Text>
      </Flex>
    </Box>
  );
};
