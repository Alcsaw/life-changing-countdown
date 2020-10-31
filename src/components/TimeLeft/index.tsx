import React, { useEffect, useState } from 'react';
import { getTimeLeftComponents, TimeLeftComponents } from '../../utils/CalculateTimeLeft';

import './styles.css';

interface TimeLeftProps {
  timeLeft: number;
}

const TimeLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {

  const [timeLeftComponents, setTimeLeftComponents] = useState<TimeLeftComponents>();

  useEffect(() => {
    setTimeLeftComponents(getTimeLeftComponents(timeLeft));
  }, [timeLeft]);

  if (timeLeftComponents === undefined) {
    return <h2>Carregando...</h2>
  }

  return (
    <h3 className="time-left-dsiplay">
      {timeLeftComponents.days && <span>{timeLeftComponents.days}d </span>}
      {timeLeftComponents.hours && <span>{timeLeftComponents.hours}h </span>}
      {timeLeftComponents.minutes && <span>{timeLeftComponents.minutes}min </span>}
      {timeLeftComponents.seconds && <span>{timeLeftComponents.seconds}s</span>}
    </h3>
  );
}

export default TimeLeft;
