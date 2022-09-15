import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from '@/components/text';
import { colors } from '@/styles/colors';
import { IIssue } from '@/types';
import { formatDate } from '@/utils/FormatDate';

const MainList: React.FC<IIssue> = (props) => {
  const { number, title, user, created_at: createdAt, comments } = props;

  return (
    <RootWrap>
      <LinkWrap to={`/issue/${number}`}>
        <TitleWrap>
          <TitleLabelWrap>
            <Text fontSize="M4" color={colors.grey600}>{`#${number}`}</Text>
            <Text fontSize="M4" color={colors.black} fontWeight="bold" lineClamp={1}>
              {title}
            </Text>
          </TitleLabelWrap>
          <ContentWrap>
            <LabelWrap>
              <Text fontSize="M1" color={colors.black}>
                작성자 :
              </Text>
            </LabelWrap>
            <LabelWrap>
              <Text fontSize="M1" color={colors.black}>
                {user.login} |
              </Text>
            </LabelWrap>
            <LabelWrap>
              <Text fontSize="M1" color={colors.black}>
                작성일 :
              </Text>
            </LabelWrap>
            <LabelWrap>
              <Text fontSize="M1" color={colors.black}>
                {formatDate(createdAt)}
              </Text>
            </LabelWrap>
          </ContentWrap>
        </TitleWrap>
        <CommentWrap>
          <Text fontSize="M2" color={colors.black}>
            코멘트
          </Text>
          <Text fontSize="M1" color={colors.black} fontWeight="bold">
            {comments}
          </Text>
        </CommentWrap>
      </LinkWrap>
    </RootWrap>
  );
};

const RootWrap = styled.div`
  min-height: 50px;
  padding: 16px 10px;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.grey600};
  }
  &:hover {
    background-color: ${colors.grey200};
  }
`;

const LinkWrap = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 85%;
`;

const TitleLabelWrap = styled.div`
  display: flex;
  column-gap: 12px;
  margin-bottom: 8px;
  width: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-basis: 15%;

  &:ntn-child(2) {
    padding-right: 14px;
  }
`;

const LabelWrap = styled.div`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const CommentWrap = styled.div`
  text-align: center;
`;

export default MainList;
