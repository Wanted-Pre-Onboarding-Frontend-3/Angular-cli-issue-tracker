/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import { Text } from '@/components/text';

import CommentSection from './components/CommentSection';
import { Flex, Span } from './components/common';

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [issueDetail, setIssueDetail] = useState<Partial<IssueObject>>();
  const { issueNumber } = useParams();

  useEffect(() => {
    (async () => {
      if (!issueNumber) {
        return;
      }
      const { data, status } = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues/${issueNumber}`
      );
      if (status === 200) {
        setIssueDetail(() => new IssueObject(data));
        setIsLoading(() => false);
      }
    })();
  }, [issueNumber]);

  return isLoading ? (
    <Text>로딩중...</Text>
  ) : (
    <>
      <Section>
        <IssueInfo flexDirection="row" padding={[24, 24, 24, 24]} alignItems="center" gap={24}>
          <UserProfile src={issueDetail?.user?.avatar_url} alt="user profile" />
          <Flex flexDirection="column" gap={8}>
            <Text element="h1" fontSize="XL3" fontWeight="bold">
              <Span fontSize={24} mr={12} color="gray">
                #{issueDetail?.number}
              </Span>
              {issueDetail?.title}
            </Text>
            <Flex flexDirection="row" gap={4}>
              <Text element="span">작성자</Text>
              <Text element="span">{issueDetail?.user?.login}</Text>
              <Text element="span">작성일</Text>
              <Text element="span">{issueDetail?.created_at?.toLocaleString()}</Text>
            </Flex>
          </Flex>
          <Text element="span">코멘트 {issueDetail?.comments}</Text>
        </IssueInfo>
        <Article>{issueDetail?.body}</Article>
      </Section>
      <CommentSection url={issueDetail?.comments_url} />
    </>
  );
};

export default Detail;

const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
const IssueInfo = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const UserProfile = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

export const Article = styled.article`
  white-space: pre-line;
  padding: 24px;
`;

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: any[];
  state: string;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  closed_by: null;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

class IssueObject implements Issue {
  url: string;

  repository_url: string;

  labels_url: string;

  comments_url: string;

  events_url: string;

  html_url: string;

  id: number;

  node_id: string;

  number: number;

  title: string;

  user: User;

  labels: any[];

  state: string;

  locked: boolean;

  assignee: null;

  assignees: any[];

  milestone: null;

  comments: number;

  created_at: Date;

  updated_at: Date;

  closed_at: null;

  author_association: string;

  active_lock_reason: null;

  body: string;

  closed_by: null;

  reactions: Reactions;

  timeline_url: string;

  performed_via_github_app: null;

  state_reason: null;

  constructor(json: any) {
    const {
      active_lock_reason,
      assignee,
      assignees,
      author_association,
      body,
      closed_at,
      closed_by,
      comments,
      comments_url,
      created_at,
      events_url,
      html_url,
      id,
      labels,
      labels_url,
      locked,
      milestone,
      node_id,
      number,
      performed_via_github_app,
      reactions,
      repository_url,
      state,
      state_reason,
      timeline_url,
      title,
      updated_at,
      url,
      user,
    } = json;

    this.active_lock_reason = active_lock_reason;
    this.assignee = assignee;
    this.assignees = assignees;
    this.author_association = author_association;
    this.body = body;
    this.closed_at = closed_at;
    this.closed_by = closed_by;
    this.comments = comments;
    this.comments_url = comments_url;
    this.created_at = new Date(created_at);
    this.events_url = events_url;
    this.html_url = html_url;
    this.id = id;
    this.labels = labels;
    this.labels_url = labels_url;
    this.locked = locked;
    this.milestone = milestone;
    this.node_id = node_id;
    this.number = number;
    this.performed_via_github_app = performed_via_github_app;
    this.reactions = reactions;
    this.repository_url = repository_url;
    this.state = state;
    this.state_reason = state_reason;
    this.timeline_url = timeline_url;
    this.title = title;
    this.updated_at = new Date(updated_at);
    this.url = url;
    this.user = user;
  }
}
