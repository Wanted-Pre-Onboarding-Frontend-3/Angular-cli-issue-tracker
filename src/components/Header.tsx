import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import IssueStateContext from '@/store/api-context';
import { colors } from '@/styles/colors';
import { fontSize, fontWeight } from '@/styles/typography';

const Header = () => {
  const issueCtx = useContext(IssueStateContext);
  const repoOwner = issueCtx.issueData[0]?.html_url.split('/')[3];
  const repoName = issueCtx.issueData[0]?.html_url.split('/')[4];
  return (
    <Container>
      <Tag>ISSUE</Tag>
      <Link to="/">
        {repoOwner && repoOwner} / {repoName && repoName}
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: ${colors.white};
  padding: 20px 0 30px 0;
  text-align: center;
  font-size: ${fontSize.XL2};
  font-weight: ${fontWeight.bold};
  border-bottom: 1px solid ${colors.grey500};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 10px 0 20px 0;
    font-size: ${fontSize.XL1};
  }
`;

const Tag = styled.div`
  width: 100px;
  background-color: ${colors.primary700};
  padding: 0.6rem 0.8rem;
  margin-right: 1rem;
  color: ${colors.white};
  font-size: ${fontSize.M4};
  border-radius: 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 0.3rem 0.4rem;
    margin-right: 0.8rem;
    color: ${colors.white};
    font-size: ${fontSize.M2};
  }
`;
