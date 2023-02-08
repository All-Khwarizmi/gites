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
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import CarouselLG from "./CarouselLG";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Modal: {
      sizes: { "2.5xl": { dialog: { maxW: "712px" } } },
    },
  },
});
const AnanasModalLG = ({ slides }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex w-screen place-items-center content-center justify-center ">
      <h3
        onClick={onOpen}
        className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Gîte Ananas
      </h3>
      <div>
        <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody className="grid w-full grid-cols-2 gap-2">
              <CarouselLG slides={slides} />
              <div>
                Gîte de 63m2 comprenant une chambre avec un lit double (140cm) et une chambre avec deux lits simples (90cm), une salle de bain avec douche et WC, un salon avec un canapé et une télévision TNT, une cuisine équipée (cuisinière à gaz, micro-ondes, réfrigérateur/congélateur, cafetière, grille-pain), une terrasse avec un coin repas et un hamac. 

Parking et Wifi gratuit
Accès à la piscine et au barbecue 
Climatisation dans les chambres (20h à 8h)
Linge fournis (draps, linge de toilette, torchons)

                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AnanasModalLG;
