import React from 'react';

import {
    EuiHeader,
    EuiHeaderSectionItem,
    EuiHeaderLogo,
    EuiHeaderLink,
  } from '@elastic/eui';
  

const Header = () => {


    return (
        <EuiHeader>
          <EuiHeaderSectionItem border="right">
<<<<<<< HEAD
            <EuiHeaderLogo  iconType="logoMaps">Calgary 311 Analyzer</EuiHeaderLogo>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLink href="https://github.com/Rohitsangha/CalgaryHacks" style={{fontSize:'1.2rem'}}>
              <i className="fab fa-github-alt"></i> GitHub
              </EuiHeaderLink>
=======
            <EuiHeaderLogo  iconType="logoMaps">311 Optimizer</EuiHeaderLogo>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLink href="https://github.com/Rohitsangha/CalgaryHacks" style={{fontSize:'18px'}}>
              <i className="fab fa-github-alt"></i>
              GitHub
            </EuiHeaderLink>
>>>>>>> 195b138b9a98dd3a4e08fdd2e229ee9457a0d7c4
          </EuiHeaderSectionItem>
        </EuiHeader>
    )
}

export default Header