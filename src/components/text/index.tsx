import React from 'react';

import { FontSizeKey, FontWeightKey, TextDecorationKey } from '@/styles/typography';

import { RootWrap } from './styles';

type TextElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'pre' | 'span' | 'div';

export type TextProps = {
  color?: string;
  fontSize?: FontSizeKey;
  fontWeight?: FontWeightKey;
  textDecoration?: TextDecorationKey;
  lineClamp?: number;
};

interface Props extends TextProps {
  className?: string;
  children?: React.ReactNode;
  element?: TextElementType;
}

export const Text: React.FC<Props> = (props) => {
  const { className, children, element, ...rest } = props;

  return (
    <RootWrap className={className} as={element} {...rest}>
      {children}
    </RootWrap>
  );
};
