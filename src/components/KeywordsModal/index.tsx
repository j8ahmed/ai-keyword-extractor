import {
  Button,
  CircularProgress,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

export default function KeywordsModal({ keywords, loading, isOpen, closeModal }){
    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                
                <ModalContent>
                    <ModalHeader>Keywords</ModalHeader>

                    <ModalCloseButton />

                    <ModalBody display='flex' alignItems='center' justifyContent='center'>
                        {loading ? (
                            <CircularProgress isIndeterminate color='teal.300' />
                        ) : (
                        <Text>{keywords}</Text>
                        )}
                    </ModalBody>

                    <ModalFooter>

                    <Button colorScheme='teal' mr={3} onClick={closeModal}>
                        Close
                    </Button>
                </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    );
};
