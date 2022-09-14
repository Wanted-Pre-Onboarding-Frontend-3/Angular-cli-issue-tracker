import { useContext, useState } from 'react';
import styled from 'styled-components';

import Spinner from '@/components/Spinner';
import useIntersect from '@/hooks/useIntersect';
import AdBanner from '@/pages/home/components/AdBanner';
import MainList from '@/pages/home/components/MainList';
import IssueStateContext from '@/store/api-context';
import { getNextPage } from '@/utils/GetNextPage';

const Home = () => {
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const { getIssueApi, issueData, setIssueData, isLoading, setIsLoading } = useContext(IssueStateContext);
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLastPage) {
      setIsLoading(true);
      const nextData = await getIssueApi({
        params: {
          page: getNextPage(),
        },
      });
      if (nextData.length === 0) {
        setIsLastPage(true);
      }
      setIssueData((curr) => curr.concat(...nextData));
      setIsLoading(false);
    }
  });

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
      <SpinnerWrapper>{isLoading && <Spinner />}</SpinnerWrapper>
      <Target ref={ref} />
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

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Target = styled.div`
  height: 1px;
  z-index: -1;
`;

export default Home;
