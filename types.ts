export enum PageState {
  HOME = 'HOME',
  PROJECT = 'PROJECT',
  ABOUT = 'ABOUT',
  SCIENCE = 'SCIENCE',
  SOLUTION = 'SOLUTION',
  TEAM = 'TEAM',
}

export interface NavItem {
  id: PageState;
  label: string;
}

export interface Member {
  name: string;
  bio: string;
  imageUrl: string;
}