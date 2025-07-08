import React, { useState, useCallback } from 'react';
import NameInputScreen from './components/NameInputScreen.tsx';
import TestScreen from './components/TestScreen.tsx';
import ResultsScreen from './components/ResultsScreen.tsx';
import Logo from './components/Logo.tsx';
import { GameState, RoundResult } from './types.ts';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [playerName, setPlayerName] = useState<string>('');
  const [finalResults, setFinalResults] = useState<RoundResult[]>([]);

  const handleStartTest = useCallback((name: string) => {
    setPlayerName(name);
    setGameState('test');
    setFinalResults([]);
  }, []);

  const handleFinishTest = useCallback((results: RoundResult[]) => {
    setFinalResults(results);
    setGameState('results');
  }, []);

  const handleRestart = useCallback(() => {
    setPlayerName('');
    setFinalResults([]);
    setGameState('welcome');
  }, []);

  const renderScreen = () => {
    switch (gameState) {
      case 'welcome':
        return <NameInputScreen onStart={handleStartTest} />;
      case 'test':
        return <TestScreen playerName={playerName} onFinishTest={handleFinishTest} />;
      case 'results':
        return <ResultsScreen playerName={playerName} results={finalResults} onRestart={handleRestart} />;
      default:
        return <NameInputScreen onStart={handleStartTest} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4">
      <header className="w-full max-w-5xl mx-auto py-4 mb-6">
        <Logo />
      </header>
      <main className="w-full flex-grow flex items-start justify-center">
        <div className="w-full max-w-3xl bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-10">
          {renderScreen()}
        </div>
      </main>
      <footer className="text-center py-4 mt-6 text-slate-400 text-sm">
        <p>&copy; 2024 Binjas Perkasa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;