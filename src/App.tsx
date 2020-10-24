import React, { useEffect, useState } from 'react';

import { TimeLeftComponents, calculateTimeLeft, getTimeLeftComponents } from './utils/CalculateTimeLeft';

function App() {

  const [targetTime, setTargetTime] = useState<number>(Date.now() + 14 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState<number>(targetTime - Date.now());

  const [timeLeftComponents, setTimeLeftComponents] = useState<TimeLeftComponents>();

  useEffect(() => {

    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(timeLeft));
      setTimeLeftComponents(getTimeLeftComponents(timeLeft));
      console.log(timeLeftComponents)
    }, 1000);
  }, [timeLeft]);

  /*timeLeft === 0 ? (
    <h2 className="finished">
      AOPA!
    </h2>
  );*/

  if (timeLeftComponents === undefined) {
    return <h2>Carregando...</h2>
  }


  return (
    <div>
      <h1>Life Changing Challenge</h1>
      {
        <h3 className="time-left-dsiplay">
          {timeLeftComponents.days && <span>{timeLeftComponents.days}d </span>}
          {timeLeftComponents.hours && <span>{timeLeftComponents.hours}h </span>}
          {timeLeftComponents.minutes && <span>{timeLeftComponents.minutes}min </span>}
          {timeLeftComponents.seconds && <span>{timeLeftComponents.seconds}s</span>}
        </h3>
      }
    </div>
  );
}

export default App;
