import styled from 'styled-components';

import Header from './Header';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  @media and screen (max-width: 768px) {
  }
`;
