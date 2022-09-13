export interface IIssue {
  id: number;
  state: string; // 이슈 오픈 상태
  number: number; // 이슈번호
  title: string; // 이슈제목
  created_at: string; // 작성일
  comments: number; // 코멘트 수
  user: array;
  login: string; // 작성자
  avatar_url: string; // 작성자 프로필 이미지
  body: string; // 본문
}

export type Props = {
  children: React.ReactNode;
};
