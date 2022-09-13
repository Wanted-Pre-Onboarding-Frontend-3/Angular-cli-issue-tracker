import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

const AdBanner = () => {
  return (
    <ImageWrap>
      <Image src={`${process.env.PUBLIC_URL}/thingsflow_banner.png`} alt="Ad banner" />
    </ImageWrap>
  );
};

const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary500};
  flex: 1;
  width: 100%;
  margin: 0 auto;
`;

const Image = styled.img`
  max-height: 80px;
  max-width: 80px;
`;
export default AdBanner;
