import type { LearningProgress } from '../types';

const STORAGE_KEY = 'hoc-tu-tru-progress';

export const saveProgress = (progress: LearningProgress[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const loadProgress = (): LearningProgress[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading progress:', error);
    return [];
  }
};

export const updateCardProgress = (cardId: string, isLearned: boolean) => {
  const progress = loadProgress();
  const existingIndex = progress.findIndex((p) => p.cardId === cardId);

  if (existingIndex >= 0) {
    progress[existingIndex] = {
      ...progress[existingIndex],
      isLearned,
      lastReviewed: new Date(),
      reviewCount: progress[existingIndex].reviewCount + 1,
    };
  } else {
    progress.push({
      cardId,
      isLearned,
      lastReviewed: new Date(),
      reviewCount: 1,
    });
  }

  saveProgress(progress);
  return progress;
};

export const getCardProgress = (cardId: string): LearningProgress | undefined => {
  const progress = loadProgress();
  return progress.find((p) => p.cardId === cardId);
};
