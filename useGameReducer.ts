import { useReducer, useEffect } from 'react';
import { UserState, Level, Quest } from './src/types';
import { LEVELS } from './src/data/levels';
import { playSound } from './audio';

const SAVE_KEY = 'guna_master_quest_v4';

export const initialUserState: UserState = {
  currentLevel: 0,
  currentChallenge: 0,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  hearts: 3,
  maxHearts: 3,
  completed: new Array(LEVELS.length).fill(false),
  earnedBadges: [],
  learnedMethods: [],
  challengeProgress: {},
  soundEnabled: true,
};

type GameAction =
  | { type: 'CORRECT_ANSWER'; payload: { quest: Quest; level: Level } }
  | { type: 'WRONG_ANSWER' }
  | { type: 'HEARTS_DEPLETED'; payload: { quest: Quest } }
  | { type: 'CONTINUE_QUEST' }
  | { type: 'SKIP_QUEST' }
  | { type: 'SELECT_LEVEL'; payload: { levelIdx: number } }
  | { type: 'RESET_PROGRESS' }
  | { type: 'TOGGLE_SOUND' };

function gameReducer(state: UserState, action: GameAction): UserState {
  switch (action.type) {
    case 'CORRECT_ANSWER': {
      const { quest, level } = action.payload;
      playSound('correct', state.soundEnabled);

      const newStreak = state.streak + 1;
      const bestStreak = Math.max(state.bestStreak, newStreak);
      const xpGain = 50 + newStreak * 5;

      const levelProg = [...(state.challengeProgress[state.currentLevel] || new Array(level.challenges.length).fill(false))];
      levelProg[state.currentChallenge] = true;

      const learned = [...state.learnedMethods];
      if (state.currentChallenge === 0) {
        level.cheats.forEach((c) => {
          if (!learned.find((m) => m.m === c.m)) {
            learned.push(c);
          }
        });
      }

      return {
        ...state,
        streak: newStreak,
        bestStreak,
        xp: state.xp + xpGain,
        learnedMethods: learned,
        challengeProgress: {
          ...state.challengeProgress,
          [state.currentLevel]: levelProg,
        },
      };
    }

    case 'WRONG_ANSWER': {
      playSound('wrong', state.soundEnabled);
      const newHearts = state.hearts - 1;
      return {
        ...state,
        hearts: newHearts,
        streak: 0,
      };
    }

    case 'HEARTS_DEPLETED': {
      playSound('wrong', state.soundEnabled);
      return {
        ...state,
        hearts: state.maxHearts,
        streak: 0,
      };
    }

    case 'CONTINUE_QUEST': {
      const currentLevelObj = LEVELS[state.currentLevel];
      const isLastQuestInLevel = state.currentChallenge >= currentLevelObj.challenges.length - 1;

      if (isLastQuestInLevel) {
        const completedLevels = [...state.completed];
        completedLevels[state.currentLevel] = true;

        const earned = [...state.earnedBadges];
        if (!earned.includes(state.currentLevel)) {
          earned.push(state.currentLevel);
          playSound('badge', state.soundEnabled);
        }

        const isLastLevelInGame = state.currentLevel >= LEVELS.length - 1;
        if (isLastLevelInGame) {
          return { ...state, completed: completedLevels, earnedBadges: earned };
        }

        return {
          ...state,
          completed: completedLevels,
          earnedBadges: earned,
          currentLevel: state.currentLevel + 1,
          currentChallenge: 0,
          hearts: state.maxHearts,
        };
      }

      return { ...state, currentChallenge: state.currentChallenge + 1 };
    }

    case 'SKIP_QUEST': {
      return { ...state, streak: 0 };
    }

    case 'SELECT_LEVEL': {
      return {
        ...state,
        currentLevel: action.payload.levelIdx,
        currentChallenge: 0,
        hearts: state.maxHearts,
      };
    }

    case 'RESET_PROGRESS': {
      localStorage.removeItem(SAVE_KEY);
      return initialUserState;
    }

    case 'TOGGLE_SOUND': {
      return { ...state, soundEnabled: !state.soundEnabled };
    }

    default:
      return state;
  }
}

function loadState(): UserState {
  try {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure `completed` array has the correct length if LEVELS change
      if (parsed.completed.length !== LEVELS.length) {
        parsed.completed = new Array(LEVELS.length).fill(false);
      }
      return { ...initialUserState, ...parsed };
    }
  } catch (e) {
    console.warn('Failed to parse saved state:', e);
  }
  return initialUserState;
}

export function useGameReducer() {
  const [state, dispatch] = useReducer(gameReducer, loadState());

  useEffect(() => {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }, [state]);

  return { state, dispatch };
}