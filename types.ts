
export interface RoundResult {
  round: number;
  answered: number;
  correct: number;
  incorrect: number;
}

export type GameState = 'welcome' | 'test' | 'results';

export interface PerformanceAspect {
  level: string;
  description: string;
}

export interface AnalysisReport {
  speed: PerformanceAspect;
  accuracy: PerformanceAspect;
  endurance: PerformanceAspect;
  consistency: PerformanceAspect;
}
