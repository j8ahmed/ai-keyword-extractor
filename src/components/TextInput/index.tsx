import { useState } from 'react';
import { Button, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export default function TextInput({ extractKeywords }){
  const [text, setText] = useState('');

  const toast = useToast();

  const submitText = () => {
      if (text === '') {
          toast({
              title: 'Text field is empty.',
              description: 'Please enter some text to extract keywords.',
              status: 'error',
              duration: 5000,
              isClosable: false,
          });
          return;
      }

      extractKeywords(text);
  };

  return (
    <>
      <Textarea
        bg='teal.900'
        padding={4}
        marginTop={6}
        height={200}
        color='white'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg='teal.600'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'teal.900' }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};
