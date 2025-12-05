import Text from '@/components/ui/Text';
import { useEffect, useRef, useState } from 'react';

const TimeUnit = ({ value, label, isFlipping }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative lg:size-[70px] max-lg:size-[60px] perspective-1000">
      <div
        className={`lg:size-[70px] max-lg:size-[60px] lg:rounded-[10px] max-lg:rounded-lg grid place-items-center shadow-[0px_4px_14px_1px_rgba(var(--dark-100),_0.16)] bg-white transition-all duration-300 ${
          isFlipping ? 'animate-flip scale-110' : 'scale-100'
        }`}
      >
        <Text
          as="h4"
          size="md"
          className={`font-extrabold font-primary text-light-500 leading-none transition-all duration-300 ${
            isFlipping ? 'scale-90 opacity-50' : 'scale-100 opacity-100'
          }`}
        >
          {String(value).padStart(2, '0')}
        </Text>
      </div>
      {/* Pulse effect on change */}
      {isFlipping && (
        <div className="absolute inset-0 lg:rounded-[10px] max-lg:rounded-lg bg-primary-200 opacity-30 animate-ping pointer-events-none" />
      )}
    </div>
    <Text
      as="p"
      size="xs"
      className="font-primary text-light-500 leading-none"
    >
      {label}
    </Text>
  </div>
);

const AnimatedTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [flip, setFlip] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });

  // Use ref to track previous values without causing re-renders
  const prevTimeLeft = useRef(timeLeft);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };

        // Trigger flip animation when values change
        Object.keys(newTimeLeft).forEach(key => {
          if (newTimeLeft[key] !== prevTimeLeft.current[key]) {
            setFlip(prev => ({ ...prev, [key]: true }));
            setTimeout(() => {
              setFlip(prev => ({ ...prev, [key]: false }));
            }, 600);
          }
        });

        prevTimeLeft.current = newTimeLeft;
        setTimeLeft(newTimeLeft);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]); // Only depend on targetDate

  return (
    <div className="flex lg:gap-7 max-lg:gap-3 max-lg:flex-wrap">
      <TimeUnit value={timeLeft.days} label="Days" isFlipping={flip.days} />
      <TimeUnit value={timeLeft.hours} label="Hrs" isFlipping={flip.hours} />
      <TimeUnit value={timeLeft.minutes} label="Mins" isFlipping={flip.minutes} />
      <TimeUnit value={timeLeft.seconds} label="Sec" isFlipping={flip.seconds} />
    </div>
  );
};

export default AnimatedTimer;