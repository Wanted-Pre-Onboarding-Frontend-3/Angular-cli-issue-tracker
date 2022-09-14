/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Text } from '@/components/text';

import { Article, Reactions, User, UserProfile } from '../Detail';
import { Flex, Section } from './common';

const CommentSection = ({ url = '' }: { url?: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<CommentObject[]>([]);

  useEffect(() => {
    (async (url: string) => {
      if (url) {
        const { data, status } = await axios.get(url);
        if (status === 200) {
          setComments(() => data?.map((comment: Comment) => new CommentObject(comment)));
          setIsLoading(() => false);
        }
      }
    })(url);
  }, [url]);

  return isLoading ? (
    <Text>로딩중...</Text>
  ) : (
    <Section>
      <CommentList>
        {comments?.map((comment) => {
          return (
            <li key={comment?.id}>
              <Flex flexDirection="row" alignItems="center" gap={8}>
                <UserProfile src={comment.user.avatar_url} />
                <Text element="span">{comment?.user?.login}</Text>
                <Text element="span">{comment.created_at.toLocaleString()}</Text>
                <Text element="span">{comment?.user?.login}</Text>
              </Flex>
              <Article>{comment?.body}</Article>
            </li>
          );
        })}
      </CommentList>
    </Section>
  );
};

export default CommentSection;

const CommentList = styled.ul``;

export interface Comment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  author_association: string;
  body: string;
  reactions: Reactions;
  performed_via_github_app: null;
}

class CommentObject implements Comment {
  url: string;

  html_url: string;

  issue_url: string;

  id: number;

  node_id: string;

  user: User;

  created_at: Date;

  updated_at: Date;

  author_association: string;

  body: string;

  reactions: Reactions;

  performed_via_github_app: null;

  constructor(json: Comment) {
    const {
      author_association,
      body,
      created_at,
      html_url,
      id,
      issue_url,
      node_id,
      performed_via_github_app,
      reactions,
      updated_at,
      url,
      user,
    } = json;
    this.author_association = author_association;
    this.body = body;
    this.created_at = new Date(created_at);
    this.html_url = html_url;
    this.id = id;
    this.issue_url = issue_url;
    this.node_id = node_id;
    this.performed_via_github_app = performed_via_github_app;
    this.reactions = reactions;
    this.updated_at = new Date(updated_at);
    this.url = url;
    this.user = user;
  }
}
