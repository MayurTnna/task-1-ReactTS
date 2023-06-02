import { Avatar, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import AddProfile from "./AddProfile";
import "../../assets/scss/myAvatar.scss";

interface MyAvatarProps {
  imageUrlProfile?: string;
}

export function MyAvatar({ imageUrlProfile }: MyAvatarProps) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <span onClick={() => setLgShow(true)}>
        <div className="chakra">
          <ChakraProvider>
            <Avatar size="xl" src={imageUrlProfile} className="my-profile" />
          </ChakraProvider>
        </div>
      </span>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Hello, click on image first , drag and choose image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProfile />
        </Modal.Body>
      </Modal>
    </>
  );
}
