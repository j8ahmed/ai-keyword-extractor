import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react';
import { 
    Footer,
    Header,
    KeywordsModal,
    TextInput,
} from './components';
import './App.css'

export default function App() {
    const [keywords, setKeywords] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const extractKeywords = async (text) => {
        console.log(text)
        setLoading(true);
        setIsOpen(true);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content:
                            'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' +
                            text,
                    },
                ],
                model: 'gpt-3.5-turbo',
                prompt:
                    'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' +
                    text +
                    '',
                temperature: 0.5,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.8,
                presence_penalty: 0.0,
            }),
        };

        //try {
        //    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
        //    const json = await response.json();
        //    console.log(json.choices[0].text.trim());
        //    setKeywords(json.choices[0].text.trim());
        //    setLoading(false);
        //} catch (error) {
        //    console.error(error);
        //}
        setTimeout(() => {
            setKeywords("Demo: JavaScript, Data, OpenAI, API");
            setLoading(false);
        }, 5000)
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Box bg="blue.600" color="white" height="100vh" paddingTop="130">
            <Container centerContent>
                <Header />

                <TextInput extractKeywords={extractKeywords} />

                <Footer />
            </Container>

            <KeywordsModal
                keywords={keywords}
                loading={loading}
                isOpen={isOpen}
                closeModal={closeModal}
            />
            </Box>
    )
}
