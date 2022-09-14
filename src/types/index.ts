export interface IIssue {
  url: string;
  repositoryUrl: string;
  labelsUrl: string;
  commentsUrl: string;
  eventsUrl: string;
  htmlUrl: string;
  id: number;
  nodeId: string;
  number: number; // 이슈번호
  title: string; // 이슈제목
  user: {
    login: string; // 작성자
    id: number;
    nodeId: string;
    avatarUrl: string; // 작성자 프로필 이미지
    gravatarId: string;
    url: string;
    htmlUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    starredUrl: string;
    subscriptionsUrl: string;
    organizationsUrl: string;
    reposUrl: string;
    eventsUrl: string;
    receivedEventsUrl: string;
    type: string;
    siteAdmin: boolean;
  };
  labels: [];
  state: string; // 이슈 오픈 상태
  locked: boolean;
  assignee: null | string;
  assignees: [];
  milestone: null | string;
  comments: 0; // 코멘트 수
  createdAt: string; // 작성일
  updatedAt: string;
  closedAt: null | string;
  authorAssociation: string;
  activeLockReason: null | string;
  draft: boolean;
  pullRequest: {
    url: string;
    htmlUrl: string;
    diffUrl: string;
    patchUrl: string;
    mergedAt: null;
  };
  body: string; // 본문
  reactions: {
    url: string;
    totalCount: number;
    '+1': number;
    '-1': number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  timelineUrl: string;
  performedViaGithubApp: null | string;
  stateReason: null | string;
}

export type IssueContextType = {
  api: object;
  issueData: IIssue[];
  error: boolean;
  isLoading: boolean;
};

export type Props = {
  children: React.ReactNode;
};
