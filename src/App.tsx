import React, { useState, useEffect } from 'react';
import { Atmosphere } from './components/Atmosphere';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestCard } from './components/QuestCard';
import { FeedbackModal } from './components/FeedbackModal';
import { CompletionScreen } from './components/CompletionScreen';
import { PlaygroundModal } from './components/PlaygroundModal';
import { PythonGuideModal } from './components/PythonGuideModal';

import { LEVELS } from './data/levels';
import { pyodideService } from './services/pyodideService'; // Assuming this path is correct
import { useGameReducer } from '../useGameReducer'; // Corrected path

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Game State Management
  const { state: userState, dispatch } = useGameReducer();

  // Interactive Quest State
  const [mcqSelected, setMcqSelected] = useState<number>(-1);
  const [fillValue, setFillValue] = useState<string>('');
  const [sortPlacements, setSortPlacements] = useState<Record<number, string>>({});
  const [debugLine, setDebugLine] = useState<number | null>(null);
  const [debugFix, setDebugFix] = useState<number | null>(null);

  // Feedback Modal State
  const [feedback, setFeedback] = useState<{
    visible: boolean;
    type: 'success' | 'error' | 'warn';
    title: string;
    msg: string;
    xpText?: string;
    explanation?: string;
  }>({
    visible: false,
    type: 'success',
    title: '',
    msg: '',
  });

  // Pre-initialize Pyodide service in background
  useEffect(() => {
    pyodideService.initialize();
  }, []);

  // Current level & challenge references
  const currentLevelObj = LEVELS[userState.currentLevel];
  const currentQuestObj =
    currentLevelObj.challenges[userState.currentChallenge];

  // Reset interactive inputs when quest changes
  useEffect(() => {
    setMcqSelected(-1);
    setFillValue('');
    setSortPlacements({});
    setDebugLine(null);
    setDebugFix(null);
  }, [userState.currentLevel, userState.currentChallenge]);

  // Handle Correct Answer
  const handleCorrect = () => {
    dispatch({ type: 'CORRECT_ANSWER', payload: { quest: currentQuestObj, level: currentLevelObj } });

    const successMsgs = [
      'The Druk nods in approval. Your understanding deepens.',
      'Like a prayer flag carried by the wind, your code rings true.',
      'The monks smile. Another secret of Python revealed.',
      'The mountain path clears before you. Onward, Guna.',
      'Truth flows like the Wang Chhu river. Well done!',
    ];
    const msg = successMsgs[Math.floor(Math.random() * successMsgs.length)];
    const xpGain = 50 + (userState.streak + 1) * 5;

    setFeedback({
      visible: true,
      type: 'success',
      title: 'Sacred Wisdom Gained!',
      msg,
      xpText: `+${xpGain} XP`,
      explanation: currentQuestObj.explanation,
    });
  };

  // Handle Incorrect Answer
  const handleWrong = (msg: string) => {
    const newHearts = userState.hearts - 1;

    if (newHearts <= 0) {
      dispatch({ type: 'HEARTS_DEPLETED', payload: { quest: currentQuestObj } });
      setFeedback({
        visible: true,
        type: 'error',
        title: 'Hearts Depleted',
        msg: 'The path has overwhelmed you, but wisdom comes through perseverance. Your hearts are restored — try again.',
        explanation: currentQuestObj.explanation,
      });
    } else {
      dispatch({ type: 'WRONG_ANSWER' });
      setFeedback({
        visible: true,
        type: 'error',
        title: 'Not Quite',
        msg,
        xpText: `${newHearts} ${newHearts === 1 ? 'heart' : 'hearts'} remain`,
        explanation: currentQuestObj.explanation,
      });
    }
  };

  // Check Answer Handler
  const handleCheckAnswer = () => {
    switch (currentQuestObj.type) {
      case 'mcq': {
        if (mcqSelected === -1) {
          setFeedback({
            visible: true,
            type: 'warn',
            title: 'Select an Option',
            msg: 'Please select one of the choices above before checking.',
          });
          return;
        }
        if (mcqSelected === currentQuestObj.answer) {
          handleCorrect();
        } else {
          handleWrong('Incorrect option selected. Review the concepts and try again!');
        }
        break;
      }

      case 'fill': {
        const val = fillValue.trim();
        if (!val) {
          setFeedback({
            visible: true,
            type: 'warn',
            title: 'Blank Input',
            msg: 'Please type your code in the blank before checking.',
          });
          return;
        }

        const isCorrect = currentQuestObj.fallbackCheck
          ? currentQuestObj.fallbackCheck(val)
          : val.toLowerCase() === currentQuestObj.answer.toLowerCase();

        if (isCorrect) {
          handleCorrect();
        } else {
          handleWrong(`Incorrect code. Expected "${currentQuestObj.answer}".`);
        }
        break;
      }

      case 'sort': {
        const totalItems = currentQuestObj.items.length;
        const placedCount = Object.keys(sortPlacements).length;

        if (placedCount < totalItems) {
          setFeedback({
            visible: true,
            type: 'warn',
            title: 'Incomplete Sorting',
            msg: `Place all ${totalItems} items into category boxes before checking.`,
          });
          return;
        }

        let allCorrect = true;
        currentQuestObj.items.forEach((item, idx) => {
          if (sortPlacements[idx] !== item.c) {
            allCorrect = false;
          }
        });

        if (allCorrect) {
          handleCorrect();
        } else {
          handleWrong('Some items are in the wrong category boxes.');
        }
        break;
      }

      case 'debug': {
        if (debugLine === null) {
          setFeedback({
            visible: true,
            type: 'warn',
            title: 'Select Error Line',
            msg: 'Click on the line of code containing the error first.',
          });
          return;
        }

        if (debugFix === null) {
          setFeedback({
            visible: true,
            type: 'warn',
            title: 'Select Fix Option',
            msg: 'Choose the correct fix option for the selected line.',
          });
          return;
        }

        if (debugLine === currentQuestObj.errorLine && debugFix === 0) {
          handleCorrect();
        } else if (debugLine === currentQuestObj.errorLine) {
          handleWrong('You selected the right error line, but chosen fix is incorrect.');
        } else {
          handleWrong('Incorrect line selected. Inspect the syntax carefully.');
        }
        break;
      }

      default:
        break;
    }
  };

  // Continue Next Quest after Feedback Modal
  const handleContinueAfterFeedback = () => {
    setFeedback((prev) => ({ ...prev, visible: false }));

    if (feedback.type === 'success') {
      dispatch({ type: 'CONTINUE_QUEST' });
    }
  };

  // Skip Quest
  const handleSkipQuest = () => {
    dispatch({ type: 'SKIP_QUEST' });

    setFeedback({
      visible: true,
      type: 'warn',
      title: 'Quest Skipped',
      msg: 'No XP awarded for skipped quests, but your journey continues.',
    });
  };

  // Reset Progress
  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all quest progress, XP, and badges?')) {
      dispatch({ type: 'RESET_PROGRESS' });
      setShowWelcome(true);
    }
  };

  const isGameCompleted = userState.completed.every(Boolean);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col relative overflow-x-hidden">
      <Atmosphere />

      {/* Welcome Screen */}
      {showWelcome ? (
        <WelcomeScreen
          onStart={() => setShowWelcome(false)}
          onOpenGuide={() => setIsGuideOpen(true)}
        />
      ) : isGameCompleted ? (
        <CompletionScreen state={userState} onRestart={handleResetProgress} />
      ) : (
        <div className="flex flex-col min-h-screen z-10">
          <Header
            state={userState}
            onOpenPlayground={() => setIsPlaygroundOpen(true)}
            onOpenGuide={() => setIsGuideOpen(true)}
            onResetProgress={handleResetProgress}
            onToggleSound={() => dispatch({ type: 'TOGGLE_SOUND' })}
          />

          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            <Sidebar
              levels={LEVELS}
              state={userState}
              onSelectLevel={(levelIdx) => dispatch({ type: 'SELECT_LEVEL', payload: { levelIdx } })}
            />

            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar">
              <QuestCard
                level={currentLevelObj}
                quest={currentQuestObj}
                questIndex={userState.currentChallenge}
                totalQuests={currentLevelObj.challenges.length}
                state={userState}
                onCheckAnswer={handleCheckAnswer}
                onSkipQuest={handleSkipQuest}
                mcqSelected={mcqSelected}
                setMcqSelected={setMcqSelected}
                fillValue={fillValue}
                setFillValue={setFillValue}
                sortPlacements={sortPlacements}
                setSortPlacements={setSortPlacements}
                debugLine={debugLine}
                setDebugLine={setDebugLine}
                debugFix={debugFix}
                setDebugFix={setDebugFix}
                onMatchSuccess={handleCorrect}
                onMatchError={() => handleWrong('Not quite matching! Try again.')}
                onSandboxSuccess={handleCorrect}
                onSandboxError={(err) => handleWrong(err || 'Sandbox execution error')}
              />
            </main>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      <FeedbackModal
        visible={feedback.visible}
        type={feedback.type}
        title={feedback.title}
        msg={feedback.msg}
        xpText={feedback.xpText}
        explanation={feedback.explanation}
        onContinue={handleContinueAfterFeedback}
      />

      {/* Interactive Freeform Playground Modal */}
      <PlaygroundModal isOpen={isPlaygroundOpen} onClose={() => setIsPlaygroundOpen(false)} />

      {/* Beginner Python Guide Modal */}
      <PythonGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
}
