import React from 'react';
import styled from 'styled-components';

import { GetManyPointsIssueResource } from '@/api';
import { Text } from '@/components/text';
import { colors } from '@/styles/colors';
import { formatDate } from '@/utils/FormatDate';

type Props = GetManyPointsIssueResource;

const MainList: React.FC<Props> = (props) => {
  const { number, title, user, created_at: createdAt, comments } = props;

  return (
    <RootWrap>
      <TitleWrap>
        <TitleLabelWrap>
          <Text fontSize="M4" color={colors.grey600}>{`#${number}`}</Text>
          <Text fontSize="M4" color={colors.black} lineClamp={1}>
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
              {user.login},
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
        <CommentLabelWrap>
          <Text fontSize="M1" color={colors.black}>
            코멘트 :
          </Text>
        </CommentLabelWrap>
        <CommentLabelWrap>
          <Text fontSize="M1" color={colors.black}>
            {comments}
          </Text>
        </CommentLabelWrap>
      </CommentWrap>
    </RootWrap>
  );
};

const RootWrap = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50px;

  &:not(:last-child) {
    padding-bottom: 8px;
    border-bottom: 1px solid ${colors.grey600};
  }
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
`;

const LabelWrap = styled.div`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CommentLabelWrap = styled.div`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export default MainList;
