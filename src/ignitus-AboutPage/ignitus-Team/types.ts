import { getContributorsData } from "./actions";

export type TeamActionType = {
  type: string;
  data?: any;
};

export type GitHubDataType = {
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
  site_admin: false;
  contributions: number;
  user_id: number;
};

export type TeamReducerReturnType = {
  presets: GitHubDataType[];
  isFetching: boolean;
};

export type TeamPropType = {
  getContributorsData: typeof getContributorsData,
  contributorsData: TeamReducerReturnType
}