import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Carousel from "./Carousel";
const PalmierModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex place-items-center content-center justify-center lg:hidden ">
      <h3
        onClick={onOpen}
        className=" w-45 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Gîte Palmier
      </h3>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PalmierModal;
