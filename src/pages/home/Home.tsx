import React, { useContext } from 'react';
import styled from 'styled-components';

import AdBanner from '@/pages/home/components/AdBanner';
import MainList from '@/pages/home/components/MainList';
import IssueStateContext from '@/store/api-context';

const Home = () => {
  const { issueData } = useContext(IssueStateContext);
  return (
    <RootWrap>
      {issueData &&
        issueData.map((itemProps, index) => {
          //* 5번째 광고 추가
          if (index === 4) {
            return (
              <>
                <AdBanner />
                <MainList {...itemProps} />
              </>
            );
          }

          return <MainList {...itemProps} />;
        })}
    </RootWrap>
  );
};

const RootWrap = styled.div`
  max-width: 500px;
  min-width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Home;
