export interface TimeLeftComponents {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function calculateTimeLeft(timeBefore: number) {
  const difference = timeBefore - 1000;

  return difference > 0 ? difference : 0;
};

export function getTimeLeftComponents(timeLeft: number) {
  if (timeLeft === 0) {
    const timeLeftComponents = {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / 1000 / 60) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };

    return timeLeftComponents;
  } else {
    const timeLeftComponents = {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / 1000 / 60) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };

    return timeLeftComponents;
  }
};
