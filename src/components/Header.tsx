import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { fontSize, fontWeight } from '@/styles/typography';

const Header = () => {
  // {Organization Name} {Repository Name} 동적값을 넣어야 하나
  return <Container>Angular / Angular-cli</Container>;
};

export default Header;

const Container = styled.header`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0 30px 0;
  text-align: center;
  font-size: ${fontSize.XL2};
  font-weight: ${fontWeight.bold};
  border-bottom: 1px solid ${colors.grey500};
`;
