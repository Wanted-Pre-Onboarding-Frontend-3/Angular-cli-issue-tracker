import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

import Spinner from '@/components/Spinner';
import { Text } from '@/components/text';
import IssueStateContext from '@/store/api-context';

import { Flex, Span } from './components/common';

const Detail = () => {
  const { isLoading, issueData } = useContext(IssueStateContext);
  const { issueNumber = '1' } = useParams();
  const issueDetail = issueData?.find((issue) => issue.number === parseInt(issueNumber, 10));

  return isLoading ? (
    <Spinner />
  ) : (
    <Section>
      <IssueInfo flexDirection="row" padding={[24, 24, 24, 24]} alignItems="center" gap={24}>
        <UserProfile src={issueDetail?.user?.avatar_url} alt="user profile" />
        <Flex flexDirection="column" gap={8}>
          <Text element="h1" fontSize="XL3" fontWeight="bold">
            <Span fontSize={24} mr={12} color="gray">
              #{issueDetail?.number}
            </Span>
            {issueDetail?.title}
          </Text>
          <Flex flexDirection="row" gap={4}>
            <Text element="span">작성자</Text>
            <Text element="span">{issueDetail?.user?.login}</Text>
            <Text element="span">작성일</Text>
            <Text element="span">{new Date(issueDetail?.created_at || '')?.toLocaleString()}</Text>
          </Flex>
        </Flex>
        <Text element="span">코멘트 {issueDetail?.comments}</Text>
      </IssueInfo>
      <Article>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issueDetail?.body || ''}</ReactMarkdown>
      </Article>
    </Section>
  );
};

export default Detail;

const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
const IssueInfo = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const UserProfile = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

export const Article = styled.article`
  white-space: pre-line;
  padding: 24px;
`;
