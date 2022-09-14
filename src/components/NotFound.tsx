import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <h1>404 Page Not found</h1>
      <a href="https://thingsflow.com/ko/home">홈페이지로 이동</a>
    </Container>
  );
};

export default NotFound;

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
`;
