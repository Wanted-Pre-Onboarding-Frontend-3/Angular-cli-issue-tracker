import styled from 'styled-components';

import Header from '@/components/Header';

export interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
