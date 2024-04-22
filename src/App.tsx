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

    const extractKeywords = async (sourceText) => {
        setLoading(true);
        setIsOpen(true);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: "Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n" + sourceText
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.5,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 2048,
                    stopSequences: []
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            }),
        };

        try {
            const {VITE_GEMINI_API_URL, VITE_GEMINI_API_KEY} = import.meta.env
            const url = VITE_GEMINI_API_URL + "?key=" + VITE_GEMINI_API_KEY
            const response = await fetch(url, options);
            const json = await response.json();
            const data = json.candidates[0].content.parts[0].text.trim();
            setKeywords(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        //Used for testing UI Modal without wasting API calls
        //setTimeout(() => {
        //    setKeywords("Demo: JavaScript, Data, OpenAI, API");
        //    setLoading(false);
        //}, 5000)
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
