import React from 'react';

import {
    EuiButton,
    EuiModal,
    EuiModalBody,
    EuiModalFooter,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiText,
  } from '@elastic/eui';

  const Modal = ({state,close}) => {


    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        height:'auto',
    }
    



    let modal;
    if (state) {
        modal = (
          <EuiModal onClose={close} style={modalStyle}>
            <EuiModalHeader>
              <EuiModalHeaderTitle stlye={{margin:'auto'}}>Analytics</EuiModalHeaderTitle>
            </EuiModalHeader>
    
            <EuiModalBody>
             
            </EuiModalBody>
    
            <EuiModalFooter>
              <EuiButton onClick={close} fill>
                Close
              </EuiButton>
            </EuiModalFooter>
          </EuiModal>
        );
      }
      return (<>{modal}</>)
  }

  export default Modal