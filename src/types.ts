export type QuestType = 'mcq' | 'fill' | 'match' | 'sort' | 'sandbox' | 'debug';

export interface McqQuest {
  type: 'mcq';
  title: string;
  prompt: string;
  options: string[];
  answer: number; // 0-based index
  explanation?: string;
}

export interface FillQuest {
  type: 'fill';
  title: string;
  prompt: string;
  codeBefore: string;
  codeAfter: string;
  answer: string;
  hints: string[];
  fallbackCheck?: (val: string) => boolean;
  explanation?: string;
}

export interface MatchQuest {
  type: 'match';
  title: string;
  prompt: string;
  left: string[];
  right: string[];
  explanation?: string;
}

export interface SortCategory {
  label: string;
  tag: string;
}

export interface SortItem {
  v: string;
  c: string; // Category label
}

export interface SortQuest {
  type: 'sort';
  title: string;
  prompt: string;
  categories: SortCategory[];
  items: SortItem[];
  explanation?: string;
}

export interface SandboxQuest {
  type: 'sandbox';
  title: string;
  prompt: string;
  context: string;
  starter: string;
  hints: string[];
  checkOutput?: string;
  testCode?: string;
  fallbackCheck?: (code: string) => boolean;
  successOut: string;
  failOut: string;
  explanation?: string;
}

export interface DebugQuest {
  type: 'debug';
  title: string;
  prompt: string;
  code: string[];
  errorLine: number; // 0-based line index
  explanation: string;
  options: string[];
}

export type Quest = McqQuest | FillQuest | MatchQuest | SortQuest | SandboxQuest | DebugQuest;

export interface CheatItem {
  m: string;
  d: string;
}

export interface TheoryItem {
  type: 'text';
  content: string;
}

export interface Level {
  name: string;
  title: string;
  location: string;
  icon: string;
  badge: string;
  badgeIcon: string;
  story: string;
  theory: TheoryItem[];
  cheats: CheatItem[];
  challenges: Quest[];
}

export interface UserState {
  currentLevel: number;
  currentChallenge: number;
  xp: number;
  streak: number;
  bestStreak: number;
  hearts: number;
  maxHearts: number;
  completed: boolean[];
  earnedBadges: number[];
  learnedMethods: CheatItem[];
  challengeProgress: Record<number, boolean[]>;
  soundEnabled: boolean;
}
