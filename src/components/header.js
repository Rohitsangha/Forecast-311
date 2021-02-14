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
            <EuiHeaderLogo  iconType="logoMaps">311 Optimizer</EuiHeaderLogo>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLink href="https://github.com/Rohitsangha/CalgaryHacks" style={{fontSize:'18px'}}>
              <i className="fab fa-github-alt"></i>
              GitHub
            </EuiHeaderLink>
          </EuiHeaderSectionItem>
        </EuiHeader>
    )
}

export default Header