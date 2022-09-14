import { AxiosRequestConfig } from 'axios';

export interface IIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number; // 이슈번호
  title: string; // 이슈제목
  user: {
    login: string; // 작성자
    id: number;
    node_id: string;
    avatar_url: string; // 작성자 프로필 이미지
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
  };
  labels: [];
  state: string; // 이슈 오픈 상태
  locked: boolean;
  assignee: null | string;
  assignees: [];
  milestone: null | string;
  comments: 0; // 코멘트 수
  created_at: string; // 작성일
  updated_at: string;
  closed_at: null | string;
  author_association: string;
  active_lock_reason: null | string;
  draft: boolean;
  pull_request: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    merged_at: null;
  };
  body: string; // 본문
  reactions: {
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
  };
  timeline_url: string;
  performed_via_github_app: null | string;
  state_reason: null | string;
}

export type IssueContextType = {
  getIssueApi: (config?: AxiosRequestConfig) => Promise<any>;;
  issueData: IIssue[];
  setIssueData: React.Dispatch<React.SetStateAction<IIssue[] | []>>;
  error: boolean;
  isLoading: boolean;
};

export type Props = {
  children: React.ReactNode;
};
