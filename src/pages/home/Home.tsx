import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Api, GetManyPointsIssueResource } from '@/api';
import AdBanner from '@/pages/home/components/AdBanner';
import MainList from '@/pages/home/components/MainList';

const Home = () => {
  const [issues, setIssues] = useState<GetManyPointsIssueResource[]>([]);

  useEffect(() => {
    const getIssue = async () => {
      const { data } = await Api.getManyIssue.request();
      setIssues(data);
    };

    getIssue();
  }, []);

  return (
    <RootWrap>
      {issues &&
        issues.map((itemProps, index) => {
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
