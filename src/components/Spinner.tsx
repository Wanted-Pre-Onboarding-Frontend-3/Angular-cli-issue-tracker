import styled, { keyframes } from 'styled-components';

import { colors } from '@/styles/colors';

const Spinner = () => {
  return <StyledSpinner />;
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  &:after {
    content: ' ';
    display: block;
    width: 30px;
    height: 30px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${colors.black};
    border-color: ${colors.black} transparent ${colors.black} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export default Spinner;
