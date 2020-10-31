import React, { useEffect, useState } from 'react';
import TimeLeft from './components/TimeLeft';

import { calculateTimeLeft } from './utils/CalculateTimeLeft';

function App() {

  const [targetTime, setTargetTime] = useState<number>(Date.now() + 14 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState<number>(targetTime - Date.now());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(timeLeft));
    }, 1000);
  }, [timeLeft]);

  /*timeLeft === 0 ? (
    <h2 className="finished">
      AOPA!
    </h2>
  );*/

  return (
    <div>
      <h1>Life Changing Challenge</h1>
      <TimeLeft timeLeft={timeLeft} />
    </div>
  );
}

export default App;
