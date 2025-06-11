
import React, { useEffect, useState } from 'react';

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  target, 
  suffix = '', 
  duration = 2000, 
  isVisible 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isVisible]);

  return (
    <span className="counter font-manrope">
      {count}{suffix}
    </span>
  );
};

export default CounterAnimation;
