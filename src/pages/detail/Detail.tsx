import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import Spinner from '@/components/Spinner';
import { Text } from '@/components/text';
import { Flex, Span } from '@/pages/detail/components/common';
import IssueStateContext from '@/store/api-context';
import { colors } from '@/styles/colors';

const Detail = () => {
  const { isLoading, issueData } = useContext(IssueStateContext);
  const { issueNumber = '1' } = useParams();
  const issueDetail = issueData?.find((issue) => issue.number === parseInt(issueNumber, 10));

  return isLoading ? (
    <Spinner />
  ) : (
    <Layout>
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
          <Comments>
            <Text element="span">코멘트</Text>
            <Text element="span" fontSize="XL1" fontWeight="bold" color={`${colors.grey700}`}>
              {issueDetail?.comments}
            </Text>
          </Comments>
        </IssueInfo>
        <Article>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{issueDetail?.body || ''}</ReactMarkdown>
        </Article>
      </Section>
    </Layout>
  );
};

export default Detail;

const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid ${colors.grey200};

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    padding: 0;
  }
`;

const IssueInfo = styled(Flex)`
  background-color: ${colors.grey200};
  border-radius: 20px 20px 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const UserProfile = styled.img`
  border-radius: 50%;
  border: 1px solid ${colors.grey400};
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

export const Comments = styled.div`
  text-align: center;
`;

export const Article = styled.article`
  padding: 1rem 2rem;
  white-space: pre-line;
  border-radius: 0 0 20px 20px;
  border: 1px solid ${colors.grey200};
  padding: 24px;
  word-break: break-all;
`;
