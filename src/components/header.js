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
            <EuiHeaderLogo  iconType="logoMaps">Calgary 311 Analyzer</EuiHeaderLogo>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLink href="https://github.com/Rohitsangha/CalgaryHacks" style={{fontSize:'1.2rem'}}>
              <i className="fab fa-github-alt"></i> GitHub
              </EuiHeaderLink>
          </EuiHeaderSectionItem>
        </EuiHeader>
    )
}

export default Header