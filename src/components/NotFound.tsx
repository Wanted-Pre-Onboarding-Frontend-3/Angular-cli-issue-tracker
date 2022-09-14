import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { fontSize, fontWeight } from '@/styles/typography';

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <h4>존재하지 않는 페이지입니다.</h4>
      <Link to="/">
        <h3>이슈 리스트로 돌아가기</h3>
      </Link>
      <a href="https://thingsflow.com/ko/home" target="_blank" rel="noreferrer">
        <img src={`${process.env.PUBLIC_URL}/thingsflow_banner.png`} alt="Ad banner" />
      </a>
    </Container>
  );
};

export default NotFound;

const Container = styled.section`
  width: 100%;
  height: 100%
  max-width: 1280px;
  margin: 3rem auto;
  text-align: center;

  h1 {
    font-size: 72px;
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 2rem;
  }

  h3 {
    color: ${colors.primary700};
    font-size: ${fontSize.L1};
    font-weight: ${fontWeight.bold};
    margin-bottom: 3rem;
  }

  img {
    width: 500px;
    margin: 0 auto;
  }

  @media and screen (max-width: 768px) {
    img {
      width: 300px;
    }
  }
`;
