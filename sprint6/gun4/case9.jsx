//ReactStrap ile aşağıdaki modal component'ini div içinde oluştur.

/*
<Modal isOpen={true}> 
    <………..>Title</…………>
    <………..>Body Content</…………..> 
</Modal>
*/


import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function App(){
    return (
        <div>
        <Button color="danger" onClick={toggle}>Buton</Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>QNB Pop Up</ModalHeader>
          <ModalBody>Limit artır?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Kabul et</Button>{' '}
            <Button color="secondary" onClick={toggle}>Reddet</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
   }
   