import { useContext } from 'react';
import styled from 'styled-components';

import useIntersect from '@/hooks/useIntersect';
import AdBanner from '@/pages/home/components/AdBanner';
import MainList from '@/pages/home/components/MainList';
import IssueStateContext from '@/store/api-context';
import { getNextPage } from '@/utils/GetNextPage';
import Layout from '@/components/Layout';

const Home = () => {
  const { getIssueApi, issueData, setIssueData } = useContext(IssueStateContext);
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    const nextData = await getIssueApi({
      params: {
        page: getNextPage(),
      },
    });
    setIssueData((curr) => curr.concat(...nextData));
  });

  return (
    <Layout>
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
        <Target ref={ref} />
      </RootWrap>
    </Layout>
  );
};

export default Home;

const RootWrap = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media and screen (max-width: 768px) {
    width: 100%;
    max-width: 768px;
  }
`;

const Target = styled.div`
  height: 1px;
  z-index: -1;
`;
