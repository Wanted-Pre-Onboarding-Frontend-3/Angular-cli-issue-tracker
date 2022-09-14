import React from 'react';
import styled from 'styled-components';

interface IProps {
  number: number;
  title: string;
  user: { login: string };
  updatedAt: string;
  comments: number;
}

const ListItem = ({ number, title, user, updatedAt, comments }: IProps) => {
  return (
    <LiContainer>
      <IssueWrapper>
        <p>
          #{number} {title}
        </p>
        <p>
          작성자 : {user.login}, 작성일 : {updatedAt}
        </p>
      </IssueWrapper>
      <CommentWrapper>
        <p>{comments}</p>
      </CommentWrapper>
    </LiContainer>
  );
};

export default ListItem;

const LiContainer = styled.li`
  width: 100%;
  padding: 1rem;
  display: flex;
`;

const IssueWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
`;

const CommentWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
`;
