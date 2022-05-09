//TODO : 모바일 크기 컨테이너 여기서 맞추면 될 듯.
import React from 'react';
import styled from 'styled-components';

import ContentWrapper from './ContentWrapper';
import Header from './Header';
import Navigation from './Navigation';
function AppWrapper({children}) {
  return (
    <StyleApp>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Navigation />
    </StyleApp>
  );
}

const StyleApp = styled.div`
  border: 1px solid red;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export default AppWrapper;
